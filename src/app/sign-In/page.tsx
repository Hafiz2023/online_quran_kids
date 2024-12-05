"use client";
import React, { useState } from "react";

export const SignIn = () => {
  const [formData, setFormData] = useState({ email: "", password: "" });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSignIn = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Sign-In Data:", formData);
    alert("Sign-In Successful!");
    // Add logic to authenticate user with the backend
  };

  return (
    <div>
      <>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Sign In</title>
        <style
          dangerouslySetInnerHTML={{
            __html: `
            body {
              font-family: Arial, sans-serif;
              margin: 0;
              padding: 0;
              background: #f9f9f9;
            }
            .container {
              text-align: center;
              padding: 50px;
            }
            .signin-form {
              margin: 20px auto;
              width: 300px;
              background: white;
              padding: 20px;
              border-radius: 5px;
              box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
            }
            .signin-form input[type="email"],
            .signin-form input[type="password"] {
              width: 100%;
              padding: 10px;
              margin: 10px 0;
              border: 1px solid #ccc;
              border-radius: 5px;
            }
            .signin-form button {
              width: 100%;
              padding: 10px;
              background: #007BFF;
              color: white;
              border: none;
              border-radius: 5px;
              cursor: pointer;
            }
            .signin-form button:hover {
              background: #0056b3;
            }
          `,
          }}
        />
        <div className="container">
          <h1>Sign In to Your Account</h1>
          <div className="signin-form">
            <form onSubmit={handleSignIn}>
              <input
                type="email"
                name="email"
                placeholder="Email Address"
                value={formData.email}
                onChange={handleInputChange}
                required
              />
              <input
                type="password"
                name="password"
                placeholder="Password"
                value={formData.password}
                onChange={handleInputChange}
                required
              />
              <button type="submit">Sign In</button>
            </form>
          </div>
        </div>
      </>
    </div>
  );
};

export default SignIn;
