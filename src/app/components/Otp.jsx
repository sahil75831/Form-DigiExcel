"use client";
import { useRef } from "react";
import { Button } from "@/components/ui/button";
import React from "react";

function Otp() {
  const input1Ref = useRef(null);
  const input2Ref = useRef(null);
  const input3Ref = useRef(null);
  const input4Ref = useRef(null);
  const input5Ref = useRef(null);
  const input6Ref = useRef(null);

  const handleKeyDown = (event, ref) => {
    if (event.key >= 0 && event.key <= 9) {
      setTimeout(() => {
        ref.current.focus();
      }, 10);
    }
  };

  return (
    <div className="fixed inset-0 w-full h-full bg-white flex flex-col items-center justify-center">
      <h1 className="font-bold text-2xl mb-20">Login Into Your Account</h1>
      <span className="text-sm text-gray-500 font-medium mb-8">
        Please Enter Your Authentication Code
      </span>
      <form action="" className="flex flex-col gap-5">
        <div className="flex flex-row gap-5">
          <input
            ref={input1Ref}
            type="text"
            className="w-10 1 border-2 text-center border-gray-300 p-3 rounded-md md:w-14 md"
            onKeyDown={(e) => handleKeyDown(e, input2Ref)}
          />

          <input
            ref={input2Ref}
            type="text"
            className="w-10  2 border-2 text-center border-gray-300 p-3 rounded-md md:w-14 -md"
            onKeyDown={(e) => handleKeyDown(e, input3Ref)}
          />

          <input
            ref={input3Ref}
            type="text"
            className="w-10  3 border-2 text-center border-gray-300 p-3 rounded-md md:w-14 -md"
            onKeyDown={(e) => handleKeyDown(e, input4Ref)}
          />

          <input
            ref={input4Ref}
            type="text"
            className="w-10 border-2 text-center border-gray-300 p-3 rounded-md md:w-14 "
            onKeyDown={(e) => handleKeyDown(e, input5Ref)}
          />
          <input
            ref={input5Ref}
            type="text"
            className="w-10 border-2 text-center border-gray-300 p-3 rounded-md md:w-14 "
            onKeyDown={(e) => handleKeyDown(e, input6Ref)}
          />
          <input
            ref={input6Ref}
            type="text"
            className="w-10 border-2 text-center border-gray-300 p-3 rounded-md md:w-14 "
          />
        </div>
        <Button>Verify</Button>
        <div className="flex justify-between px-3 py-2 mb-4 text-sm md:text-md">
          <h3 className="text-black cursor-pointer">
            Create an account Signup
          </h3>
          <h3 className="text-black cursor-pointer">Forget Password</h3>
        </div>
      </form>
      <div className="w-full max-w-xs"></div>
      <footer className="absolute bottom-0 p-2 text-center text-gray-500">
        2016 -2024 © ACME Privacy Policy and Cookies Policy
      </footer>
    </div>
  );
}

export default Otp;
