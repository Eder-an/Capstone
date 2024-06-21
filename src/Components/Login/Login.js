import React, { useState, useEffect } from 'react';
// Apply CSS according to the design theme or provided CSS from week 2 lab 2
import { Link, useNavigate } from 'react-router-dom';
import { API_URL } from '../../config';

// Define the Login functional component
const Login = () => {
    // State variables to hold email and password input values
    const [password, setPassword] = useState("");
    const [email, setEmail] = useState('');

    // Initialize the navigation method from React Router
    const navigate = useNavigate();

    // Check if the user is already authenticated and redirect if necessary
    useEffect(() => {
        if (sessionStorage.getItem("auth-token")) {
            navigate("/")
        }
    }, []);

    // Handle the login form submission
    const login = async (e) => {
        e.preventDefault();
        // Send a POST request to the API endpoint for user login
        const res = await fetch(`${API_URL}/api/auth/login`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                email: email,
                password: password,
            }),
        });
        const json = await res.json();

        // Process the response data after login attempt
        if (json.authtoken) {
            // Save the auth token and email in sessionStorage upon successful login
            sessionStorage.setItem('auth-token', json.authtoken);
            sessionStorage.setItem('email', email);

            // Redirect to the homepage and reload the page
            navigate('/');
            window.location.reload();
        } else {
            // Display error messages if login attempt fails
            if (json.errors) {
                for (const error of json.errors) {
                    alert(error.msg);
                }
            } else {
                alert(json.error);
            }
        }
    };

    // Render the login form UI
    return (
        <div>
            <div className="container">
                <div className="login-grid">
                    <div className="login-text">
                        <h2>Login</h2>
                    </div>
                    <div className="login-text">
                        Are you a new member? <span><Link to="/signup" style={{ color: '#2190FF' }}> Sign Up Here</Link></span>
                    </div>
                    <br />
                    <div className="login-form">
                        <form onSubmit={login}>
                            <div className="form-group">
                                <label htmlFor="email">Email</label>
                                {/* Input field for email with value and onChange event */}
                                <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" name="email" id="email" className="form-control" placeholder="Enter your email" aria-describedby="helpId" />
                            </div>
                            {/* Input field for password - Add logic here for password input box */}
                            <div className="form-group">
                                <label htmlFor="password">Password</label>
                                <input
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    type="password"
                                    name="password"
                                    id="password"
                                    className="form-control"
                                    placeholder="Enter your password"
                                    aria-describedby="helpId"
                                />
                            </div>
                            <div className="btn-group">
                                <button type="submit" className="btn btn-primary mb-2 mr-1 waves-effect waves-light">Login</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

// Export the Login component as default
export default Login;