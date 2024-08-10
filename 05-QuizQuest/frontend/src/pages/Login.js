import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

// components
import InputForm from "../components/InputForm";

// toast
import { toast } from "react-toastify";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // hooks
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      if (!email || !password) {
        return toast.error("Please provide All Fields");
      }

      const { data } = await axios.post("/api/v1/auth/login", {
        email,
        password,
      });

      if (data.success) {
        toast.success("Logged In Successfully!");
        localStorage.setItem("token", data.token);
        navigate("/quiz");
      }
    } catch (error) {
      toast.error("Invalid Credentials please try again!");
      console.log(error);
    }
  };
  return (
    <div className="min-h-screen flex items-center justify-center w-full bg-slate-500">
      <div className="bg-white shadow-md rounded-lg px-8 py-6 max-w-md text-black ">
        <h1 className="text-2xl font-bold text-center mb-4 ">Welcome Back!</h1>
        <div>
          <form onSubmit={handleLogin}>
            <InputForm
              htmlFor={email}
              labelText={"Email"}
              type={"email"}
              id={email}
              value={email}
              handleChange={(e) => setEmail(e.target.value)}
            />
            <InputForm
              htmlFor={password}
              labelText={"Password"}
              type={"text"}
              id={password}
              value={password}
              handleChange={(e) => setPassword(e.target.value)}
            />
            <p className="text-xs my-2">
              Forgot Password?
              <Link
                to="/register"
                className="text-slate-400 hover:underline mx-2 "
              >
                Click here
              </Link>
            </p>

            <div className="flex items-center justify-between mb-4">
              <p className="text-xs">
                Don't have an account ?
                <Link
                  to="/register"
                  className="text-slate-400 hover:underline mx-2"
                >
                  Create Account
                </Link>
              </p>
            </div>
            <button
              type="submit"
              className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-slate-500 hover:bg-slate-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-slate-400"
            >
              Login
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
