import Hero from './pages/Hero/Hero.jsx';
import Navbar from './components/Navbar/Navbar.jsx';
import SurveyPage from './pages/SurveyPage/SurveyPage.jsx';
import TestPage from './pages/TestPage/TestPage.jsx';
import BudgetPage from './pages/BudgetPage/BudgetPage.jsx';
import AdoptPage from './pages/AdoptPage/Adopt.jsx';
import ArticlePage from './pages/ArticlePage/ArticlePage.jsx';
import AuthGuard from './components/AuthGuard/AuthGuard.jsx'; // Import the AuthGuard component
import { Routes, Route } from 'react-router-dom';
import Checklist from './pages/ChecklistPage/Checklist.jsx';
import PetPage from './pages/PetPage/PetPage.jsx';
import About from './pages/About/About.jsx';
import { ClerkProvider, SignedIn } from '@clerk/clerk-react'
import './App.scss';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/survey" element={<AuthGuard><SurveyPage /></AuthGuard>}/>
        <Route path="/test" element={<TestPage />} />
        <Route path="/budget" element={<AuthGuard><BudgetPage /></AuthGuard>}/>
        <Route path="/adopt" element={<AdoptPage />} />
        <Route path="/adopt/:animalID" element={<PetPage />} />
        <Route path="/article" element={<ArticlePage />} />
        <Route path="/checklist" element={<Checklist></Checklist>}></Route>
        <Route path="/about" element={<About></About>}></Route>
      </Routes>
    </>
  );
}

export default App;
