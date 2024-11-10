"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Check, XCircle } from "lucide-react"; // Importing icons from Lucide
import logo from "../assets/logo.png";
import icon from "../assets/backbotton.png";
import confrimcon from "../assets/signupicon.png";
import erroricon from "../assets/Solid question round.png";

// Validation function
// const validatePassport = (passport) => {
//   if (!passport) {
//     return "Invalid IC/Passport Number";
//   }
//   return "";
// };

// Custom Checkbox Component
const CustomData = ({ label, subtext }) => (
  <div className="flex pt-4 gap-3">
   
    <div className="flex flex-col  gap-1">
      <span className="text-[#1D4781] font-extrabold  text-md">{label}</span>
      <div className="  text-[#1D4781A3] font-bold">{subtext}</div>
    </div>
  </div>
);

export default function Signup() {
  const [passport, setPassport] = useState("");
  const [error, setError] = useState("");
  const [checkedItems, setCheckedItems] = useState({
    name: false,
    passport: true,
    phone: false,
    company: false,
    email: false,
  });

  const handleChange = (e) => {
    setPassport(e.target.value);
    setError(validatePassport(e.target.value));
  };

  const handleCheckboxChange = (field) => {
    setCheckedItems((prev) => ({ ...prev, [field]: !prev[field] }));
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
    <div className="flex flex-col justify-between items-center bg-[#F3F5F6] w-[420px] h-auto rounded-[40px] mx-auto my-5 shadow-lg">
    

      {/* Heading */}
      <div className="flex items-center -ml-[150px]  py-8 px-1 gap-2">

   <Link href={'/usercheck'}><Image src={icon} alt="backbutton" className="w-[40px] h-[40px]"/></Link>
<h1 className="font-extrabold text-[18px] text-center text-[#120405]">Confrim Details</h1>
</div>



      {/* Form Section */}
      <form onSubmit={handleSubmit} className="flex flex-col items-start gap-4 w-full px-8">
        {/* Custom Checkboxes */}
        <CustomData
    
          onChange={() => handleCheckboxChange("name")}
          label="Employee Name"
          subtext="John Doe"
        />
        <CustomData
          checked={checkedItems.passport}
          onChange={() => handleCheckboxChange("passport")}
          label="Employee IC/Passport Number"
          subtext="8239 1893 2189 4322"
        />
        <CustomData
          checked={checkedItems.phone}
          onChange={() => handleCheckboxChange("phone")}
          label="Employee Phone Number"
          subtext="854356952156"
        />
        <CustomData
          checked={checkedItems.company}
          onChange={() => handleCheckboxChange("company")}
          label="Company Name"
          subtext="XYZ Company"
        />
        <CustomData
          checked={checkedItems.email}
          onChange={() => handleCheckboxChange("email")}
          label="Email"
          subtext="abc@gmail.com"
        />

        {/* Agreement */}
        <div className="flex gap-2 mt-4">
          <input type="checkbox" className="custom-checkbox mt-1" />
          <span className="text-[#1D4781] font-bold  text-sm">
            By signing in to this AdvanceGaji app, You agree with the <span className="text-[#4086C4]">Terms & Conditions</span>
          </span>
        </div>

        {/* Error Message */}
        {/* {error && (
          <div className="text-[#FE814B] bg-[#FFD2C2] w-full py-2 px-4 rounded-3xl font-semibold text-md mt-2 flex items-center gap-2">
            <XCircle size={20} className="text-[#FE814B]" />
            <span>{error}</span>
          </div>
        )} */}

        {/* Confirm Button */}
        <div className="w-full flex justify-center py-8 ">
          <Link href={'/setpin'}
            type="submit"
            className="flex items-center justify-center gap-2 w-[393px] h-[60px] bg-[#4086C4]  font-semibold rounded-full shadow-lg"
          >
            <Image src={confrimcon} alt="Submit Icon"  />
    
          </Link>
        </div>
      </form>
    </div>
  );
}
