// Optional: sign-up page if you want separate instead of integrated in SignIn

import React from "react";

export default function SignUp() {
  return (
    <div className="card auth-card">
      <h2 className="auth-title">Sign Up</h2>
      <form
        className="auth-form"
        onSubmit={(e) => {
          e.preventDefault();
          // TODO: add sign up logic
        }}
      >
        <div className="auth-row">
          <label>Name</label>
          <input type="text" required placeholder="Full name" />
        </div>
        <div className="auth-row">
          <label>Email</label>
          <input type="email" required placeholder="your@email.com" />
        </div>
        <div className="auth-row">
          <label>Password</label>
          <input type="password" required placeholder="Create password" />
        </div>
        <button className="auth-btn primary animated-btn" type="submit">
          Create Account
        </button>
      </form>
    </div>
  );
}
