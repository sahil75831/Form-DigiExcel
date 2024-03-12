import { Button } from "@/components/ui/button";
import React from "react";

function Form({ type }) {
  return (
    <div className="fixed inset-0 flex flex-col overflow-auto bg-white md:flex-row">
      <div className="flex-1 md:sticky md:top-0 md:left-0 bg-black flex justify-center items-center">
        <img
          src="https://img.freepik.com/premium-vector/victorian-royal-brand-logo-design-classic-luxury-logotype-elegant-logo-with-crown_462371-1895.jpg"
          alt=""
          className="w-full"
        />
      </div>

      <div className="p-6 md:p-10 h-full border-b-10 flex-1 bg-white flex flex-col justify-center items-center">
        <div className=" text-center ">
          <h1 className="text-3xl font-bold text-black">
            {type === "signup"
              ? "Create your Account"
              : "login into your account"}
          </h1>
          <p className="text-sm text-gray-500">
            {type === "signup"
              ? "Enter Your Email Below To Create your Account"
              : "Enter Your Email Below To login your Account"}
          </p>
        </div>

        <br />
        <br />

        <form className="w-full flex flex-col gap-4 md:px-10 py-10">
          {type === "signup" ? (
            <input
              type="text"
              className="w-full mb-2 rounded-sm outline outline-3 outline-gray-200 p-1"
              placeholder="Name"
            />
          ) : (
            ""
          )}

          <input
            type="email"
            className="w-full mb-2 rounded-sm outline outline-3 outline-gray-200 p-1"
            placeholder="Email"
          />
          {type === "signup" ? (
            <input
              type="text"
              className="w-full mb-2 rounded-sm outline outline-3 outline-gray-200 p-1"
              placeholder="Organisation"
            />
          ) : (
            ""
          )}

          <input
            type="password"
            className="w-full mb-2 rounded-sm outline outline-3 outline-gray-200 p-1"
            placeholder="Password"
          />
          <Button className="w-full">Sign Up</Button>
        </form>

        {type === "signup" ? (
          <p className="text-sm font-bold mt-4 ">
            By Clicking Signup You agree to terms of service and privacy policy
          </p>
        ) : (
          <div className="flex flex-row justify-between items-center w-full px-10 py-10 pt-0 ">
            <p className="text-sm font-bold mt-4 cursor-pointer">
              Create an account
            </p>
            <p className="text-sm font-bold mt-4 cursor-pointer">
              Forget Password
            </p>
          </div>
        )}
        {type === "signup" ? (
          <p className="text-sm font-bold mt-8 cursor-pointer">
            Already Have An Account Login
          </p>
        ) : (
          <footer className="fixed bottom-0 p-2 text-center text-gray-500">
            2016 -2024 © ACME Privacy Policy and Cookies Policy
          </footer>
        )}
      </div>
    </div>
  );
}

export default Form;
