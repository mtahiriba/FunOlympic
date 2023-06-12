import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

export default function LocalUserRegister() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [country, setCountry] = useState("");
  const [address, setAddress] = useState("");
  const [otp, setOtp] = useState("")
  const [password, setPassword] = useState("")
  const [check, setCheck] = useState(false);
  const [error, setError] = useState("")

  const navigate = useNavigate();

  const Register = () => {
    if (check){
        alert("Registered Successfully");
        navigate("/local-user-login", { replace: true });
    }
    else{
        if(name !== "" && email !== "" && country !== "" && address !== ""){
            setCheck(true)
        }
        else{
            setError("Please fill all the fields")
            setInterval(() => {
                setError("")
            }, 5000);
        }
    }
      
  };

  return (
    <div className="flex flex-col items-center h-full bg-gray-50 md:h-screen">
      <div className="flex justify-between md:px-20 px-10 w-full mt-3 md:mb-6">
        <Link to="/">
        <h3 className="text-3xl text-green-600 font-bold">FunOlympic</h3>
        </Link>
        <div className="flex justify-center items-center gap-3">
          <p className="hidden md:flex font-bold text-px opacity-70 text-neutral-600">
            Already have an account?
          </p>
          <Link
            to="/local-user-login"
            className="text-neutral-600 font-bold text-md hover:text-green-500"
          >
            <span>Login</span>
          </Link>
        </div>
      </div>

    {
       error && (
        <div className="md:w-2/6 w-5/6 bg-red-400 rounded-md flex justify-center items-center h-20 text-white">{error}</div>
       ) 
    }
      <div className="flex flex-col items-center h-full w-full  pt-3 ">
        <div className="px-5 md:px-10 h-auto md:w-2/6 w-5/6 flex flex-col items-center rounded-md gap-4 border-gray-100 border bg-white py-8 shadow-xl">
          <div className="w-full">
            <h1 className="text-2xl font-bold  mb-3 flex justify-center">
              Local User Register
            </h1>
            <hr className="w-full h-px -mt-1 mb-5 border-0 rounded  bg-gray-300" />
          </div>
          <input
            className="flex-1 border-gray-200 outline-none border-2 p-2 rounded-md hover:border-gray-400 w-full focus:border-blue-400"
            type="text"
            placeholder="Full Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <input
            className="flex-1 border-gray-200 outline-none border-2 p-2 rounded-md hover:border-gray-400 w-full focus:border-blue-400"
            type="address"
            placeholder="Address"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
          />
          <input
            className="flex-1 border-gray-200 outline-none border-2 p-2 rounded-md hover:border-gray-400 w-full focus:border-blue-400"
            type="country"
            placeholder="Country"
            value={country}
            onChange={(e) => setCountry(e.target.value)}
          />
          <input
            className="flex-1 border-gray-200 outline-none border-2 p-2 rounded-md hover:border-gray-400 w-full focus:border-blue-400"
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            className="flex-1 border-gray-200 outline-none border-2 p-2 rounded-md hover:border-gray-400 w-full focus:border-blue-400"
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          {check && (
            <input
              className="flex-1 border-gray-200 outline-none border-2 p-2 rounded-md hover:border-gray-400 w-full focus:border-blue-400"
              type="otp"
              placeholder="OTP Code"
              value={otp}
              onChange={(e) => setOtp(e.target.value)}
            />
          )}
          <button
            type="button"
            className="bg-green-500 text-white px-6 py-2 rounded-md font-semibold text-base outline-none w-full hover:bg-green-600 hover:border-green-600 border-green-500 border-2 block"
            onClick={Register}
          >
            Rigister
          </button>
          <div className="flex my-2 w-full px-10">
            <hr className="w-2/3 h-px mx-auto mt-3 mr-5 border-0 rounded bg-gray-300" />
            <p className="">OR</p>
            <hr className="w-2/3 h-px mx-auto mt-3 ml-5 border-0 rounded  bg-gray-300" />
          </div>

          <Link
            to="/international-user-register"
            className="text-neutral-600 font-bold text-md hover:text-green-500"
          >
            <span>International User Register</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
