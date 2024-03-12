import React from "react";

function Form() {
  return (
    <div className="fixed inset-0 flex">
      <div className="flex-1 h-full bg-black flex justify-center items-center">
        <img
          src="https://img.freepik.com/premium-vector/victorian-royal-brand-logo-design-classic-luxury-logotype-elegant-logo-with-crown_462371-1895.jpg"
          alt=""
          className="w-full "
        />
      </div>
      <div className="flex-1 h-full bg-gray-700 border border-white border-r-0 border-t-0 border-b-0 flex justify-center items-center">
        <h1>Create An Account</h1>
        <p>Enter Your Email Below To Create your Account</p>
        <input
          type="text"
          placeholder=""
          value={name}
          name="name"
          id="name"
          onChange={handleChange}
        />
        <input
          type="email"
          placeholder=""
          value={email}
          name="email"
          id="email"
          onChange={handleChange}
        />
        <input
          type="text"
          placeholder=""
          value={organisation}
          name="organisation"
          id="organisation"
          onChange={handleChange}
        />
        <input
          type="password"
          placeholder=""
          value={password}
          name="password"
          id="password"
          onChange={handleChange}
        />
      </div>
    </div>
  );
}

export default Form;
