import SignupProgress from "@/app/components/SignupProgress"
import React from "react";

const signup = () => {
  // Styles
  const formStyle = {
    mainForm: "mt-10 flex flex-col items-center",
    fieldStyle: "",
    labelStyle: "text-xl text-gray-600",
    inputStyle1: "text-2xl border-2 rounded-md px-3 py-4 shadow-md",
    inputStyle2: "text-2xl border-2 rounded-md px-3 py-4 shadow-md",

    divStyle: " flex flex-col"
  };
  return (
    <div className="bg-green-100 ">
      <SignupProgress/>
      <div className="mt-20">
        <h1 className="text-5xl font-bold text-center">
          Sign Up to get started
        </h1>
        <form action="submit" className={formStyle.mainForm}>
          {/* First name & Last name */}
          <div className="flex flex-row space-x-10">
            <div className={formStyle.divStyle}>
              <label htmlFor="" className={formStyle.labelStyle}>
                First name
              </label>
              <input
                type="text"
                placeholder="Johnathan"
                className={formStyle.inputStyle1}
              />
            </div>

            <div className={formStyle.divStyle}>
              <label htmlFor="" className={formStyle.labelStyle}>
                Last name
              </label>
              <input
                type="text"
                placeholder="Doe"
                className={formStyle.inputStyle1}
              />
            </div>
          </div>

          <div className={`${formStyle.divStyle} m-10`}>
            <label htmlFor="" className={formStyle.labelStyle}>
              Email
            </label>
            <input
              type="text"
              placeholder="example@email.com"
              className={`${formStyle.inputStyle2}`}
              style={{width: "24rem"}}
            />
          </div>

          <div className={`${formStyle.divStyle} m-5`}>
            <label htmlFor="" className={formStyle.labelStyle}>
              Password
            </label>
            <input
              type="password"
              placeholder="**********"
              className={formStyle.inputStyle2}
              style={{width: "24rem"}}
            />
          </div>

          <button className="mt-5 text-2xl bg-green-500 rounded-md p-4 text-white px-16">Continue</button>
        </form>
      </div>
    </div>
  );
};

export default signup;
