import React, { useState } from "react";

export default function SignIn() {
  const [mode, setMode] = useState("signin");

  return (
    <div className="auth-wrapper">
      <div className="auth-card">
        <h2 className="auth-title">{mode === "signin" ? "Sign In" : "Sign Up"}</h2>

        {mode === "signin" ? (
          <>
            <form
              className="auth-form"
              onSubmit={(e) => {
                e.preventDefault();
                // TODO: sign-in logic
              }}
            >
              <div className="auth-row">
                <label>Email</label>
                <input type="email" required placeholder="your@email.com" />
              </div>
              <div className="auth-row">
                <label>Password</label>
                <input type="password" required placeholder="••••••••" />
              </div>
              <button className="auth-btn primary animated-btn" type="submit">
                Continue
              </button>
            </form>
            <p className="auth-note">
              New to NextBus?{" "}
              <button
                className="auth-link"
                onClick={() => setMode("signup")}
                type="button"
              >
                Create an account
              </button>
            </p>
          </>
        ) : (
          <>
            <form
              className="auth-form"
              onSubmit={(e) => {
                e.preventDefault();
                // TODO: sign-up logic
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
              <button
                className="auth-btn ghost"
                type="button"
                onClick={() => setMode("signin")}
              >
                Back to Sign In
              </button>
            </form>
          </>
        )}
      </div>
    </div>
  );
}
