import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import WelcomePage from './WelcomePage';
import ConstitutionPage from './ConstitutionPage';
import Login from './Login';
import Signup from './Signup';
import PreambleChildren from './PreambleChildren';
import PreambleYouth from './PreambleYouth';
import PreambleCitizens from './PreambleCitizens';
import QuizCitizen from './QuizCitizen';  // Import the quiz component
import FundamentalRightsCitizen from './FundamentalRightsCitizen';
import MatchingGame from './MatchingGame';
import FundamentalRightsYouth from './FundamentalRightsYouth';
import DragAndDropGame from './DragAndDropGame';
import FundamentalRightsChildren from './FundamentalRightsChildren';
import RightToEquality from './RightToEquality';
import RightToEqualityGame from './RightToEqualityGame';
import RightToFreedom from './RightToFreedom';
import RightToFreedomMemoryGame from './RightToFreedomMemoryGame';
import RightToExploitation from './RightToExploitation';
import RightToExploitationGame from './RightToExploitationGame';
import RightToFreedomOfReligion from './RightToFreedomOfReligion';
import RightToFreedomMemoryMatch from './RightToFreedomMemoryMatch';
import CulturalAndEducationalRights from './CulturalAndEducationalRights';
import ConstitutionalRemedies from './ConstitutionalRemedies';


const App = () => {
  const [users, setUsers] = useState([]);
  const [currentUser, setCurrentUser] = useState(null);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<WelcomePage />} />
        <Route
          path="/login"
          element={<Login users={users} setCurrentUser={setCurrentUser} />}
        />
        <Route
          path="/signup"
          element={<Signup users={users} setUsers={setUsers} />}
        />
        <Route path="/constitution" element={<ConstitutionPage />} />
        <Route path="/preamble-children" element={<PreambleChildren />} />
        <Route path="/preamble-youth" element={<PreambleYouth />} />
        <Route path="/preamble-citizens" element={<PreambleCitizens />} />
        <Route path="/quiz-citizen" element={<QuizCitizen />} /> {/* Route for the quiz */}
        <Route path="/fundamental-rights-citizen" element={<FundamentalRightsCitizen />} />
        <Route path="/matching-game" element={<MatchingGame />} />
        <Route path="/fundamental-rights-youth" element={<FundamentalRightsYouth />} />
        <Route path="/draganddropgame" element={<DragAndDropGame />} />
        <Route path="/fundamentalrightschildren" element={<FundamentalRightsChildren />} />
        <Route path="/right-to-equality" element={<RightToEquality />} />
        <Route path="/right-to-equality-game" element={<RightToEqualityGame />} />
        <Route path="/right-to-freedom" element={<RightToFreedom />} />
        <Route path="/right-to-freedom-game" element={<RightToFreedomMemoryGame />} />
        <Route path="/right-to-exploitation" element={<RightToExploitation />} />
        <Route path="/right-to-exploitation-game" element={<RightToExploitationGame />} />
        <Route path="/right-to-freedom-of-religion" element={<RightToFreedomOfReligion />} />
        <Route path="/right-to-freedom-memory-match" element={<RightToFreedomMemoryMatch />} />
        <Route path="/cultural-and-educational-rights" element={<CulturalAndEducationalRights />} />
        <Route path="/constitutional-remedies" element={<ConstitutionalRemedies />} />

      </Routes>
    </Router>
  );
};

export default App;
