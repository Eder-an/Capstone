import React from 'react';

import { BrowserRouter, Routes, Route } from "react-router-dom";

import Layout from './Components/Landing_Page/LandingPage';
import Login from './Components/Login/Login';
import SignUp from './Components/Sign_Up/Sign_Up';
import InstantConsultation from './Components/InstantConsultation/InstantConsultation';
import Notification from './Components/Notification/Notification';
import ReviewForm from './Components/ReviewForm/ReviewForm';


function App() {

    return (
        <div className="App">
            <BrowserRouter>
                <Notification>
                    <Routes>
                        <Route path="/" element={<Layout />} />
                        <Route path="/signup" element={<SignUp />} />
                        <Route path="/login" element={<Login />} />
                        <Route path="/instant-consultation" element={<InstantConsultation />} />
                        <Route path="/reviews" element={<ReviewForm />} />
                    </Routes>
                </Notification>    
            </BrowserRouter>
        </div>
    );
}

export default App;