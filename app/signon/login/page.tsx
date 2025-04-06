import LoginBar from '@/app/components/LoginBar';
import SignupProgress from '@/app/components/SignupProgress';
import React from 'react'

const page = () => {
    const formStyle = {
    mainForm: "mt-10 flex flex-col items-center",
    fieldStyle: "",
    labelStyle: "text-xl text-gray-600",
    inputStyle1: "text-2xl border-2 rounded-md px-3 py-4 shadow-md",
    inputStyle2: "text-2xl border-2 rounded-md px-3 py-4 shadow-md",

    divStyle: " flex flex-col"
  };

  const longInputWidth = "25rem"
  return (
    <div className="bg-green-100" style={{ minHeight: "100vh" }}>
      <LoginBar />
      <div className="mt-20">
        <h1 className="text-5xl font-bold text-center">
          Log in to continue
        </h1>
        <form action="submit" className={formStyle.mainForm}>
          <div className={`${formStyle.divStyle} m-10`}>
            <label htmlFor="" className={formStyle.labelStyle}>
              Email
            </label>
            <input
              type="text"
              placeholder="example@email.com"
              className={`${formStyle.inputStyle2}`}
              style={{ width: `${longInputWidth}` }}
            />
          </div>

          <div className={`${formStyle.divStyle} mb-5`}>
            <label htmlFor="" className={formStyle.labelStyle}>
              Password
            </label>
            <input
              type="password"
              placeholder="**********"
              className={formStyle.inputStyle2}
              style={{ width: `${longInputWidth}` }}
            />
          </div>
          <div className='absolute left-10'/>

          <button className="mt-5 text-2xl bg-green-500 rounded-md p-4 text-white px-16 shadow-sm">
            Log in
          </button>
        </form>
      </div>
    </div>
  );
}

export default page