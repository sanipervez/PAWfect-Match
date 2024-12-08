import React from "react";
import { useLocation, useParams, Link, useNavigate } from "react-router-dom";
import PetCarousel from "../../components/PetComponents/PetCarousel";
import PetComponents from "../../components/PetComponents/PetComponents";
import PetLocation from "../../components/PetLocation/PetLocation";

const PetPage = () => {
    const { state } = useLocation();
    const { pet } = state || {};
    const navigate = useNavigate(); 
    const { animalID } = useParams(); 

    if (!pet) {
        return <p>No pet found. Please go back and try again.</p>;
    }

    if (!state || !pet) {
        return (
            <div>
                <p>No pet data available. Please return to the Adopt page.</p>
                <Link to="/adopt">
                    <button className="btn btn-primary">Back to Adopt</button>
                </Link>
            </div>
        );
    }

    let picturesArray = [];
    try {
        picturesArray = pet.pictures
            ? JSON.parse(pet.pictures.replace(/'/g, '"'))
            : [];
    } catch (error) {
        console.error("Failed to parse pictures string:", error);
    }

    return (
        <div>
            <PetCarousel
                name={pet.name}
                pictures={picturesArray.length > 0 ? picturesArray : ["/placeholder-image.png"]}
            />
            <PetComponents
                name={pet.name}
                birthdate={pet.birthdate}
                sex={pet.sex}
                breed={pet.breed}
                size={pet.size}
                descriptionPlain={pet.descriptionPlain}
            />
            
            <div style={{ textAlign: "center", marginTop: "20px" }}>
                <button
                    className="btn btn-secondary"
                    onClick={() => navigate("/adopt")}
                >
                   Go Back
                </button>
            </div>
        </div>
    );
};

export default PetPage;