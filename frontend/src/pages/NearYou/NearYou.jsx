import React, { useEffect, useState } from 'react';
import './NearYou.scss';
import supabase from '../../supabase/supabaseClient';
import { findBestMatches } from '../../utils/petMatchAlgorithm';
import { useUser } from '@clerk/clerk-react'; // For user authentication
import { Link } from 'react-router-dom';

const NearYou = () => {
  const { user } = useUser();
  const [pets, setPets] = useState([]);
  const [userAnswers, setUserAnswers] = useState(null);
  const [loading, setLoading] = useState(true);

  // Fetch pets data from Supabase
  useEffect(() => {
    async function getPets() {
      try {
        const { data, error } = await supabase
          .from('pets')
          .select(
            'animalID, name, species, sex, activityLevel, energyLevel, age, size, breed, primaryBreed, pictures, animalLocation'
          );
        if (error) throw error;
        setPets(data);
      } catch (error) {
        console.error('Error fetching pets:', error.message);
      } finally {
        setLoading(false);
      }
    }
    getPets();
  }, []);

  // Fetch survey responses for the current user
  useEffect(() => {
    async function fetchSurveyData() {
      if (!user?.id) return;

      try {
        const { data, error } = await supabase
          .from('survey_responses')
          .select('answers')
          .eq('user_id', user.id)
          .maybeSingle();

        if (error) throw error;

        if (data?.answers) {
          setUserAnswers(formatSurveyData(data.answers));
        } else {
          setUserAnswers(null);
        }
      } catch (error) {
        console.error('Failed to fetch survey data:', error.message);
      }
    }
    fetchSurveyData();
  }, [user?.id]);

  // Format survey data
  const formatSurveyData = (surveyData) => ({
    species: surveyData.species,
    sex: surveyData.sex,
    activityLevel: surveyData.activityLevel,
    energyLevel: surveyData.energyLevel,
    age: surveyData.age,
    livingArea: surveyData.livingArea,
    outdoorAccess: surveyData.outdoorAccess,
    size: surveyData.size,
    breed: surveyData.breed || [], // Default to empty array
  });

  // Parse pictures safely
  const parsePictures = (pictures) => {
    try {
      return JSON.parse(pictures.replace(/'/g, '"')) || [];
    } catch {
      return [];
    }
  };


  const petsToDisplay = userAnswers ? findBestMatches(userAnswers, pets, 3) : pets;

  return (
      <div className="pet-container">
        <h1>Check out your top matches!</h1>
        <div className="pet-cards">
          {petsToDisplay.map((pet, index) => {
            const picturesArray = parsePictures(pet.pictures);
            const picture = picturesArray[0];
            return (
              <div className="pet-card" key={index}>
                <img src={picture} alt={pet.name || 'Adoptable Pet'} />
                <div className="pet-name">{pet.name}</div>
              </div>
            );
          })}
        </div>
        <Link
          to='/adopt'
          style={{
            textDecoration: 'none',
            color: '#fff',
            transition: 'color 0.3s ease',
          }}
          onMouseEnter={(e) => (e.target.style.color = '#3D0C02')}
          onMouseLeave={(e) => (e.target.style.color = '#fff')}
        >
          <p>Meet the 3,000+ adoptable pets waiting for a home!</p>
      </Link>
      </div>
  );
};

export default NearYou;
