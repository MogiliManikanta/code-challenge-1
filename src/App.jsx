import React, { useState } from "react";
import { Box, Button, TextField } from "@mui/material";
import DoNotDisturbOnOutlinedIcon from "@mui/icons-material/DoNotDisturbOnOutlined";
import "./App.css";
import { FcGoogle } from "react-icons/fc";
import { ImFacebook2 } from "react-icons/im";
import big from "./assets/Rectangle 1.png";
import small from "./assets/Rectangle 4.png";

function App() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const errors = validate();
    setErrors(errors);
    if (Object.keys(errors).length === 0) {
      alert("Registration successfully Done");
    }
  };

  const validate = () => {
    const error = {};
    if (!email) {
      error.email = "Email is Required";
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      error.email = "Email is not Matched";
    }
    if (!password) {
      error.password = "Password is Required";
    } else if (password.length < 8) {
      error.password = "Password must be 8 characters";
    }
    return error;
  };

  return (
    <div
      className="h-screen flex justify-center items-center bg-cover bg-center"
      style={{
        background: `transparent url(${big}) 0% 0% no-repeat padding-box`,
        backgroundSize: "100%",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "top center",
      }}
    >
      <div className="container w-full max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl bg-white bg-opacity-90 p-6 rounded-lg shadow-lg">
        <div className="flex justify-center items-center mb-6 rounded shadow-md bg-white">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg"
            alt="Amazon Logo"
            className="h-10 md:h-12 w-full object-contain"
          />
        </div>

        <div>
          <div className="text-center mb-6">
            <h2 className="text-green-600 text-xl md:text-2xl font-semibold">
              Login
            </h2>
            <img
              src={small}
              alt="Tree Illustration"
              className="mx-auto w-32 md:w-45 lg:w-48" // Increased size classes
            />
          </div>

          <form onSubmit={handleSubmit}>
            <Box mb={4}>
              <TextField
                label="Email"
                name="email"
                type="text"
                variant="standard"
                color="success"
                fullWidth
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                InputLabelProps={{
                  style: { color: "green" },
                }}
              />
              {errors.email && (
                <div className="text-red-400 flex items-center mt-1">
                  <DoNotDisturbOnOutlinedIcon
                    className="mr-1"
                    style={{ fontSize: "16px" }}
                  />
                  {errors.email}
                </div>
              )}
            </Box>

            <Box mb={4}>
              <TextField
                label="Password"
                name="password"
                type="password"
                variant="standard"
                fullWidth
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                InputLabelProps={{
                  style: { color: "green" },
                }}
              />
              {errors.password && (
                <div className="text-red-400 flex items-center mt-1">
                  <DoNotDisturbOnOutlinedIcon
                    className="mr-1"
                    style={{ fontSize: "16px" }}
                  />
                  {errors.password}
                </div>
              )}
            </Box>

            <Button
              type="submit"
              variant="contained"
              sx={{
                mt: 2,
                backgroundColor: "green",
                color: "white",
                "&:hover": {
                  backgroundColor: "darkgreen",
                },
              }}
              fullWidth
            >
              Sign In
            </Button>
          </form>

          <div className="text-center mt-4 text-sm">
            <a href="#" className="text-green-600 hover:underline mr-2">
              Forgot Password?
            </a>
            <span className="mx-2">|</span>
            <a href="#" className="text-red-600 hover:underline ml-2">
              New User? Sign Up
            </a>
          </div>

          <div className="my-6 flex items-center">
            <hr className="flex-grow border-gray-300" />
            <span className="px-3 text-gray-500 text-sm">or</span>
            <hr className="flex-grow border-gray-300" />
          </div>

          <div className="space-y-4">
            <button className="w-full py-2 px-4 bg-blue-500 text-white rounded-md flex items-center justify-center space-x-2 hover:bg-blue-600 transition">
              <FcGoogle />
              <span>Continue with Google</span>
            </button>
            <button className="w-full py-2 px-4 bg-blue-700 text-white rounded-md flex items-center justify-center space-x-2 hover:bg-blue-800 transition">
              <ImFacebook2 />
              <span>Continue with Facebook</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
