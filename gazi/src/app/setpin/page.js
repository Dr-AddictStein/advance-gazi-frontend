"use client"
import Link from 'next/link';
import { useState } from 'react';
import icon from "../assets/backbotton.png";
import verify from "../assets/verify.png";
import Image from 'next/image';
import erroricon from '../assets/Solid question round.png'
export default function PinSetup() {
  const [pin, setPin] = useState(['', '', '', '','','']);
  const [confirmPin, setConfirmPin] = useState(['', '', '', '','','']);
  const [error, setError] = useState('');




  const handlePinChange = (value, index, type) => {
    const newPin = type === 'pin' ? [...pin] : [...confirmPin];
    newPin[index] = value.slice(-1); // Limit to a single digit per box
    type === 'pin' ? setPin(newPin) : setConfirmPin(newPin);
    setError('');
  };

  




  const handleSubmit = (e) => {
    e.preventDefault();
    if (pin.join('') !== confirmPin.join('')) {
      setError('PIN Number not Same');
    } else {
      alert('PIN set successfully');
      // Additional logic if needed
    }
  };

  return (
    <>
    
    <div className="flex flex-col justify-between items-center bg-[#F3F5F6] w-[420px] h-auto rounded-[40px] mx-auto my-5 shadow-lg">

    <div className="flex items-center -ml-[220px]  py-8 px-1 gap-2">

<Link href={'/confrimuser'}><Image src={icon} alt="backbutton" className="w-[40px] h-[40px]"/></Link>
<h1 className="font-extrabold text-[18px] text-center text-[#120405]">Set Pin</h1>
</div>

      <form
        onSubmit={handleSubmit}
        className="  space-y-6 relative"
      >
   
        
        <div className="space-y-4">
          {/* Set PIN */}
          <label className="block text-[#120405] text-[22px] font-extrabold py-5 text-center">Please Set Pin</label>
          <div className="flex justify-center space-x-2">
            {pin.map((digit, index) => (
              <input
                key={`pin-${index}`}
                type="text"
                value={digit}
                maxLength="1"
                onChange={(e) => handlePinChange(e.target.value, index, 'pin')}
                className="w-12 h-12 border border-gray-300 rounded-md text-center text-lg font-semibold"
              />
            ))}
          </div>

          {/* Confirm PIN */}
          <label className="block text-[#120405] text-[22px] font-extrabold py-5 text-center">Confirm Pin</label>
          <div className="flex justify-center space-x-2">
            {confirmPin.map((digit, index) => (
              <input
                key={`confirmPin-${index}`}
                type="text"
                value={digit}
                maxLength="1"
                onChange={(e) => handlePinChange(e.target.value, index, 'confirmPin')}
                className="w-12 h-12 border border-gray-300 rounded-md text-center text-lg font-semibold"
              />
            ))}
          </div>
        </div>

        {error && (
           <div className="text-[#FE814B] pl pl-16 bg-[#FFD2C2] w-full py-2 rounded-3xl font-semibold text-md mt-2">
           <div className="flex justify-items-center gap-2 items-center"> <div><Image src={erroricon} alt="error"/></div>  <div>{error}</div> </div>
          </div>
        )}

<div className="w-full flex justify-center py-10 ">
          <Link href={'/signin'}
            // type="submit"
            className="flex items-center justify-center gap-2 w-full h-[60px] bg-[#9FA5AE] font-semibold rounded-full shadow-lg"
          >
            <Image src={verify} alt="Submit Icon"  />
    
          </Link>
        </div>

      
      </form>
    </div>
    
    </>
  );
}
