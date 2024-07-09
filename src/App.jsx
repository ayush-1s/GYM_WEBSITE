// App.jsx
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Header from './components/Header';
import Services from './components/Services';


// import About from './components/About';
import { About } from './components/About';
// import Schedule from './components/Schedule';
import { Schedule } from './components/Schedule';
// import Contact from './components/Contact';
// import { Contact } from './components/Contact';
// import Contact from './components/Contact';
// import VideoPage from './pages/VideoPage';
import VideoPage from './components/reusable/VideoPage';
import UserInfoForm from './components/reusable/UserInfoForm';
import SignUpLogin from './components/reusable/SignUpLogin';
// import SubscriptionOptions from './components/SubscriptionOptions'; // Import SubscriptionOptions component
import SubscriptionOptions from './components/reusable/SubscriptionOptions';
import PaymentPage from './components/reusable/PaymentPage';
import SubscriptionBenefits from './components/reusable/SubscriptionBenefits';
import AccountCreated from './components/reusable/AccountCreated';
import TrainingPrograms from './components/reusable/TrainingPrograms';
import MealCharts from './components/reusable/MealCharts';
import ExerciseDetails from './components/reusable/ExerciseDetails';
import PPL from './components/reusable/PPL';
import BroSplit from './components/reusable/BroSplit';
import Purchase_Franchise from './components/Purchase_Franchise';
import Contact from './components/reusable/Contact';
function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/Buy" element={<Purchase_Franchise />} />
        <Route path="/services" element={<Services />} />
        <Route path="/schedule" element={<Schedule />} />
        <Route path="/video" element={<VideoPage />} />
        <Route path="/signup-login" element={<SignUpLogin />} />
        <Route path="/user-info" element={<UserInfoForm />} />
        <Route path="/subscription-options" element={<SubscriptionOptions />} /> {/* Route for SubscriptionOptions */}
        <Route path="/account-created/:plan" element={<AccountCreated />} />
        <Route path="/subscription-benefits" element={<SubscriptionBenefits />} />
        <Route path="/training-programs" element={<TrainingPrograms />} />
        <Route path="/meal-charts" element={<MealCharts />} />
        <Route path="/exercise-details" element={<ExerciseDetails />} />
        <Route path="/ppl" element={<PPL />} />
        <Route path="/bro-split" element={<BroSplit />} />
      </Routes>
    </Router>
  );
}

export default App;

