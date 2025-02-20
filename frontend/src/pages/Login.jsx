import React from "react";

const Login = () => {
  return (
    <div className="bg-gray-100 flex items-center justify-center h-screen">
      <div className="w-full max-w-md bg-white p-8 rounded-lg shadow-lg">
        <h1 className="text-2xl font-semibold mb-6 text-center text-primary">
          Login
        </h1>
        <form action="/login" method="POST">
          {/* Email Field */}
          <label className="input input-bordered flex items-center gap-2 mb-4">
            <input type="email" className="grow" placeholder="Email" required />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 16"
              fill="currentColor"
              className="h-4 w-4 opacity-70"
            >
              <path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
              <path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
            </svg>
          </label>

          {/* Password Field */}
          <label className="input input-bordered flex items-center gap-2 mb-6">
            <input
              type="password"
              className="grow"
              placeholder="Password"
              required
            />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 16"
              fill="currentColor"
              className="h-4 w-4 opacity-70"
            >
              <path d="M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z" />
            </svg>
          </label>

          {/* Login Button */}
          <button type="submit" className="btn btn-primary w-full">
            Login
          </button>
          <p className="mt-4 text-center">
            Don’t have an account?{" "}
            <a href="/signup" className="text-blue-500 hover:underline">
              Sign up
            </a>
          </p>
        </form>
      </div>
      {/* Right Side with Image */}
      <div className="w-1/3 flex justify-center items-center bg-gray-200">
        <img
          src="https://picsum.photos/id/44/500/350"
          alt="Login"
          className="max-w-full h-full"
        />
      </div>
    </div>
  );
};

export default Login;
