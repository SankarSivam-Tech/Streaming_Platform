import React from "react";
import Logo from "../assets/netflix-logo.png";
import { useState } from "react";
import { Link } from "react-router-dom";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    console.log(email, password);
  };

  return (
    <main className="w-full h-screen hero-bg">
      <header className="max-w-6xl mx-auto flex justify-between items-center p-4 ">
        <Link to={"/"}>
          <img src={Logo} alt="Logo" className="w-52" />
        </Link>
      </header>

      <article className="flex justify-center items-center mt-20 mx-3">
        <section className="w-full max-w-md p-8 space-y-6 bg-black/60 rounded-lg shadow-md ">
          <h1 className="text-center text-white font-bold text-2xl mb-4">
            Login
          </h1>

          <form className="space-y-4" onSubmit={handleLogin}>
            <div>
              <label
                htmlFor="email"
                className=" font-medium text-sm text-gray-300 block"
              >
                Email
              </label>

              <input
                type="email"
                id="email"
                placeholder="you@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-3 py-2 rounded-md  mt-1 bg-transparent focus:outline-none focus:ring border border-gray-700 text-white "
              />
            </div>

            <div>
              <label
                htmlFor="password"
                className=" font-medium text-sm text-gray-300 block"
              >
                Password
              </label>

              <input
                type="password"
                id="password"
                placeholder="******"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="px-3 py-2 rounded-md w-full mt-1 bg-transparent focus:outline-none focus:ring border border-gray-700 text-white "
              />
            </div>

            <button className="w-full text-white bg-red-600 hover:bg-red-700 font-semibold py-2 rounded-md ">
              Login
            </button>
          </form>

          <section className="text-gray-400 text-center">
            Don't have an account?{" "}
            <Link to={"/signup"} className="text-red-500 hover:underline">
              Sign up.
            </Link>
          </section>
        </section>
      </article>
    </main>
  );
};

export default LoginPage;
