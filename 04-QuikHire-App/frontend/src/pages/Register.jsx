import React from "react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

// toast
import { toast } from "react-toastify";

// components
import InputForm from "../components/InputForm";
import { assets } from "../assets/assets";

function Register() {
  const [fullname, setFullname] = useState("");
  const [userType, setUserType] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  /*
    const [values, setValues] = useState({
    fullName: "",
    Designation: "",
    username: "",
    email: "",
    password: "",
  });

  // handle input fields
  const handleChange = (e) => {
    const data = e.target.value;
    setValues({
      ...values,
      [e.target.id]: data,
    });
  };
  
  */

  // hooks
  const navigate = useNavigate();

  // handle submit
  const handleRegister = async (e) => {
    e.preventDefault();
    console.log("Form submitted");
    // call API to register user
    try {
      if (!fullname || !userType || !username || !email || !password) {
        return toast.error("Please Provide All Fields");
      }
      const { data } = await axios.post("/api/v1/auth/register", {
        fullname,
        userType,
        username,
        email,
        password,
      });
      if (data.success) {
        toast.success("Register Successfully");
        navigate("/login");
      } else {
        toast.error(`${data.message}`);
      }
    } catch (error) {
      toast.error("Invalid credentials");
      console.log(error);
    }
  };

  return (
    <div className="bg-[#9980FA] flex items-center justify-center h-screen">
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-md w-5/6 ">
        <div className="flex justify-center gap-5 mb-6 flex-wrap">
          <div className="flex items-top gap-5">
            <span>
              <img
                src={assets.logo}
                alt="QuikHire"
                className="inline-block h-14 w-14"
              />
            </span>
            <div>
              <h2 className="text-2xl font-semibold text-center mb-2">
                Create a new account
              </h2>
              <p className="text-gray-600 text-center mb-4">
                Enter your details to register.
              </p>
            </div>
          </div>
        </div>
        {/* form starts here */}
        <form onSubmit={handleRegister}>
          <div className="my-5">
            <div className="flex gap-3">
              <InputForm
                htmlFor={fullname}
                labelText={"Full Name"}
                type={"text"}
                id={fullname}
                value={fullname}
                handleChange={(e) => setFullname(e.target.value)}
              />
              <InputForm
                htmlFor="userType"
                labelText="Designation"
                type="select"
                id="userType"
                value={userType}
                handleChange={(e) => setUserType(e.target.value)}
                options={[
                  { value: "Student", label: "Student" },
                  { value: "Recruiter", label: "Recruiter" },
                  { value: "Employee", label: "Employee" },
                ]}
              />
            </div>
            <InputForm
              htmlFor={username}
              labelText={"Username"}
              type={"text"}
              id={username}
              value={username}
              handleChange={(e) => setUsername(e.target.value)}
            />
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
            <p className="text-gray-600 text-xs mt-1">
              Must contain 1 uppercase letter, 1 number, min. 8 characters.
            </p>
          </div>
          <button
            type="submit"
            className="w-full bg-[#9980FA] text-white px-4 py-2 rounded-lg hover:bg-purple-400 focus:outline-none focus:ring-2 focus:ring-purple-400 focus:ring-opacity-50"
          >
            Register
          </button>
          <p className="text-gray-600 text-xs text-center mt-4">
            Already have an account?
            <Link to="/login" className="text-purple-400 hover:underline mx-2">
              Click here
            </Link>
          </p>
          <p className="text-gray-600 text-xs text-center mt-2 w-2/3 mx-auto leading-6">
            By clicking Register, you agree to accept QuikHire's
            <span className="text-purple-400 hover:underline mx-2">
              Terms and Conditions
            </span>
            .
          </p>
        </form>
      </div>
    </div>
  );
}

export default Register;
