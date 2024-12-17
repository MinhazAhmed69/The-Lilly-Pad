import React from 'react';

const Signup = () => {
  return (
    <div className="min-h-screen bg-base-200 flex items-center justify-center">
      <div className="card lg:card-side bg-base-100 shadow-xl max-w-4xl w-full">
        <figure className="lg:w-1/2">
          <img src="https://img.freepik.com/premium-vector/vector-frog-character-wizard-wearing-magic-hat-magic-wand-with-star-sticker-trendy-cartoon_615232-1913.jpg" alt="Signup Image" className="object-cover w-full h-full" />
        </figure>
        <div className="card-body lg:w-1/2">
          <h2 className="card-title text-2xl font-bold mb-6">Join Us</h2>
          <form>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Username</span>
              </label>
              <input type="text" placeholder="Username" className="input input-bordered" />
            </div>
            <div className="form-control mt-4">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input type="email" placeholder="email@example.com" className="input input-bordered" />
            </div>
            <div className="form-control mt-4">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input type="password" placeholder="Password" className="input input-bordered" />
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-primary w-full">Sign Up</button>
            </div>
          </form>
          <div className="divider">OR</div>
          <div className="form-control">
            <button className="btn btn-outline w-full">Sign up with GitHub</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
