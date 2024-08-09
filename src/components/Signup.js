// src/components/Signup.js
import React, { useState } from "react";

const Signup = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isSignedUp, setIsSignedUp] = useState(false);

  const handleSignup = (e) => {
    e.preventDefault();

    if (name && email && password) {
      // Save user details to localStorage
      localStorage.setItem("user", JSON.stringify({ name, email, password }));
      setIsSignedUp(true);
    }
  };

  return (
    <div className="flex items-center justify-center h-screen bg-purple-600">
      <div className="w-full max-w-md p-8 bg-white rounded shadow-md">
        {!isSignedUp ? (
          <>
            <h2 className="mb-6 text-2xl font-bold text-center text-purple-600">Sign Up</h2>
            <form onSubmit={handleSignup}>
              <div className="mb-4">
                <label className="block mb-2 text-sm font-medium">Name</label>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full px-3 py-2 border rounded"
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block mb-2 text-sm font-medium">Email id</label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-3 py-2 border rounded"
                  required
                />
              </div>
              <div className="mb-6">
                <label className="block mb-2 text-sm font-medium">Password</label>
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full px-3 py-2 border rounded"
                  required
                />
              </div>
              <button
                type="submit"
                className="w-full px-4 py-2 font-medium text-white bg-purple-600 rounded hover:bg-purple-700"
              >
                Sign Up
              </button>
            </form>
          </>
        ) : (
          <h2 className="text-2xl font-bold text-center text-green-600">Signup Successful!</h2>
        )}
      </div>
    </div>
  );
};

export default Signup;
