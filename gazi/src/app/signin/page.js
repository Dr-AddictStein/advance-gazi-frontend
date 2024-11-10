"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import logo from "../assets/logo.png";
import icon from "../assets/signupicon.png";
import mailicon from "../assets/Monotone email.png";
import erroricon from "../assets/Solid question round.png";
// Validation function
const validatePassport = (passport) => {
  if (!passport) {
    return "Invalid IC/Passport Number";
  }
  return "";
};

export default function Signin() {
  const [passport, setPassport] = useState("");
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setPassport(e.target.value);
    setError(validatePassport(e.target.value));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationError = validatePassport(passport);
    if (validationError) {
      setError(validationError);
      return;
    }
    alert(JSON.stringify({ passport }, null, 2));
  };

  return (
    <div className="flex flex-col justify-between scre max-h-screen h-fit items-center bg-white w-[420px] rounded-[40px] mx-auto my-5">
      {/* Main Card */}
     
    <div className="flex flex-col items-center justify-center w-[420px]  bg-gradient-to-b from-white to-[#8BC4F6] rounded-t-[40px] rounded-bl-[80px] rounded-br-[80px] pt-8 pb-7">
        {/* Logo Image */}
        <Image src={logo} alt="Logo" className="w-[119px] h-[119px] object-contain" />
      </div>

      {/* Heading */}
      <div className="flex items-center py-5 flex-col">
        <h1 className="font-bold text-[32px] text-center text-[#0E0F2B]">Login to Your Account</h1>
        <span className="font-normal text-[24px] text-[#0E0F2B]">Get salary in advance</span>
      </div>

      {/* Form */}
      <form onSubmit={handleSubmit} className="flex flex-col items-center gap-4 w-full px-8">
        <div>
          <label htmlFor="passport" className="text-[#254B2D] pl-2 pb-2 text-left font-extrabold text-md">
            IC/Passport Number
          </label>


           <div className="relative">
         <Image src={mailicon}  className="ab absolute w-12 pt-[9px] px-2"/>
           <input
            id="passport"
            name="passport"
            type="text"
            placeholder="Enter your IC/Passport Number"
            onChange={handleChange}
            value={passport}
            className="pl-12 placeholder:text-[#424242] focus:shadow-md focus:shadow-[#FE814B] focus:outline-none border-2 border-[#FE814B] font-semibold h-[50px] w-[380px] rounded-3xl"
          />
           </div>
          {error && (
            <div className="text-[#FE814B] pl pl-16 bg-[#FFD2C2] w-full py-2 rounded-3xl font-semibold text-md mt-2">
             <div className="flex justify-items-center gap-2 items-center"> <div><Image src={erroricon} alt="error"/></div>  <div>{error}</div> </div>
            </div>
          )}
        </div>

        <button type="submit" className="w-[420px] mb-16 mt-10 flex justify-center rounded-b-[40px]">
          <div className="flex items-center justify-center gap-2 w-[393px] h-[60px] bg-[#4086C4] text-white font-semibold rounded-full shadow-lg">
            <Image src={icon} alt="Submit Icon" />
          </div>
        </button>
      </form>

      <div className="pb  pb-5 flex gap-1">
        <span className="font-medium text-[#1F160FA3]">Already have an account? </span>
        <Link href="/signin">
          <div className="text-[#FE814B] font-medium underline">Sign In.</div>
        </Link>
      </div>
    </div>
  );
}
