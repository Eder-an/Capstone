import React, { useEffect, useState } from 'react';
// import Popup from 'reactjs-popup';
import './ReviewForm.css';
import GiceReviews from './GiceReviews/GiveReviews';

const arrayReviewData = [
    { serial: 1, name: "John", speciality: "Cardiology", feedback: null, given: false },
    { serial: 2, name: "Torres", speciality: "Dermatology", feedback: null, given: false }
]

const ReviewForm = () => {
    const [visible, setVisible] = useState(false);

    const handleOpenFeedback = (feedback) => {
        console.log(feedback)
    }

    const handleOpenGiven = () => {
        setVisible(true);
    }

    return (
        <div className="container" style={{ marginTop: '5%' }}>
            <h1>Reviews</h1>
            <table>
                <thead>
                    <tr>
                        <th scope="col">Serial Number</th>
                        <th scope="col">Doctor Name</th>
                        <th scope="col">Doctor Speciality</th>
                        <th scope="col">Doctor Feedback</th>
                        <th scope="col">Review Given</th>
                    </tr>
                </thead>
                <tbody>
                    {arrayReviewData.map(review =>
                        <tr>
                            <td>{review.serial}</td>
                            <td>{review.name}</td>
                            <td>{review.speciality}</td>
                            <td><button className='btnFeedback' onClick={handleOpenFeedback(review.feedback)}>Click Here</button></td>
                            <td><button disabled={false} className='btnGiven' onClick={handleOpenGiven}>Click Here</button></td>
                        </tr>
                    )}
                </tbody>
            </table>
            <GiceReviews visible={visible}></GiceReviews>
        </div>
    );
};

export default ReviewForm;
