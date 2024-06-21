import React, { useState } from 'react';
import Rating from './Rating';

function GiveReviews() {
  // State variables
  const [showForm, setShowForm] = useState(true); // State to track if the form should be displayed
  const [submittedMessage, setSubmittedMessage] = useState(''); // State to store the submitted message
  const [showWarning, setShowWarning] = useState(false); // State to show a warning message
  const [formData, setFormData] = useState({ // State to store form data
    name: '', // Name input field
    review: '', // Review input field
    rating: 0 // Rating input field
  });

  // Function to handle button click to show the form
  const handleButtonClick = () => {
    setShowForm(true);
  };

  // Function to handle changes in form inputs
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmittedMessage(formData); // Set submitted message to the form data
    setFormData({ name: '', review: '', rating: 0 }); // Reset form data

    // Check if all fields are filled before submitting
    if (formData.name && formData.review && formData.rating > 0) {
      setShowWarning(false); // Hide warning message if all fields are filled
    } else {
      setShowWarning(true); // Show warning message if any field is empty
    }
  };

  return (
    <div>
      <h2>Form with Message</h2>
      {!showForm ? (
        <button onClick={handleButtonClick}>Open Form</button>
      ) : (
        <form onSubmit={handleSubmit}>
          <h2>Give Your Feedback</h2>
          {showWarning && <p className="warning">Please fill out all fields.</p>}
          <div>
            <label htmlFor="name">Name:</label>
            <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} />
          </div>
          <div>
            <label htmlFor="review">Review:</label>
            <textarea id="review" name="review" value={formData.review} onChange={handleChange} />
          </div>
          <div>
            <label htmlFor="rating">Rating:</label>
            <Rating></Rating>
          </div>
          <button type="submit">Submit</button>
        </form>
      )}
      {submittedMessage && (
        <div>
          <h3>Submitted Message:</h3>
          <p>{submittedMessage}</p>
        </div>
      )}
    </div>
  );
}

export default GiveReviews;