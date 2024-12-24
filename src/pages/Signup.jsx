import React, { useState } from 'react';

const Signup = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');

  const handleSignup = (e) => {
    e.preventDefault();
    if (!username || !email || !password) {
      setMessage('Please fill out all fields.');
    } else {
      setMessage(`Welcome, ${username}! Your account has been created.`);
    }
  };

  return (
    <div className="min-h-screen bg-base-200 flex items-center justify-center">
      <div className="card lg:card-side bg-base-100 shadow-xl max-w-4xl w-full">
        <figure className="lg:w-1/2">
          <img
            src="https://img.freepik.com/premium-vector/vector-frog-character-wizard-wearing-magic-hat-magic-wand-with-star-sticker-trendy-cartoon_615232-1913.jpg"
            alt="Signup Image"
            className="object-cover w-full h-full"
          />
        </figure>
        <div className="card-body lg:w-1/2">
          <h2 className="card-title text-2xl font-bold mb-6">Join Us</h2>
          <form onSubmit={handleSignup}>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Username</span>
              </label>
              <input
                type="text"
                placeholder="Username"
                className="input input-bordered"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>
            <div className="form-control mt-4">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                placeholder="email@example.com"
                className="input input-bordered"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="form-control mt-4">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                placeholder="Password"
                className="input input-bordered"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div className="form-control mt-6">
              <button type="submit" className="btn btn-primary w-full">
                Sign Up
              </button>
            </div>
          </form>
          {message && (
            <div className="mt-4 text-center text-sm text-red-600">
              {message}
            </div>
          )}
          <div className="divider">OR</div>
          <div className="form-control">
            <button className="btn btn-outline w-full">Sign up with Google</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;