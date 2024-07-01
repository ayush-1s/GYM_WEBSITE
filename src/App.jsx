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
import { Contact } from './components/Contact';
// import VideoPage from './pages/VideoPage';
import VideoPage from './components/reusable/VideoPage';
import UserInfoForm from './components/reusable/UserInfoForm';
import SignUpLogin from './components/reusable/SignUpLogin';
// import SubscriptionOptions from './components/SubscriptionOptions'; // Import SubscriptionOptions component
import SubscriptionOptions from './components/reusable/SubscriptionOptions';
import PaymentPage from './components/reusable/PaymentPage';
import SubscriptionBenefits from './components/reusable/SubscriptionBenefits';
function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/services" element={<Services />} />
        <Route path="/schedule" element={<Schedule />} />
        <Route path="/video" element={<VideoPage />} />
        <Route path="/signup-login" element={<SignUpLogin />} />
        <Route path="/user-info" element={<UserInfoForm />} />
        <Route path="/subscription-options" element={<SubscriptionOptions />} /> {/* Route for SubscriptionOptions */}
      </Routes>
    </Router>
  );
}

export default App;

