import LoginBar from '@/app/components/LoginBar';
import React from 'react'

const page = () => {
    const formStyle = {
    mainForm: "mt-10 flex flex-col items-center",
    fieldStyle: "",
    labelStyle: "text-xl text-gray-600",
    inputStyle: "text-lg border-2 rounded-md px-3 py-4 shadow-md",

    divStyle: " flex flex-col"
  };

  const inputWidth = "24.1rem"
  return (
    <div className="bg-green-100" style={{ minHeight: "100vh" }}>
      <div className="bg-white p-11 shadow-md">
        <LoginBar />
      </div>
      <div className="mt-10">
        <h1 className="text-5xl font-bold text-center">Log in to continue</h1>

        <form action="submit" className={formStyle.mainForm}>
          <div className="bg-white py-7 px-10 rounded-t-lg shadow-lg space-y-5">
            <div className={formStyle.divStyle}>
              <label htmlFor="" className={formStyle.labelStyle}>
                Email
              </label>
              <input
                type="text"
                placeholder="example@email.com"
                className={formStyle.inputStyle}
                style={{ width: `${inputWidth}` }}
              />
            </div>

            <div className={formStyle.divStyle}>
              <label htmlFor="" className={formStyle.labelStyle}>
                Password
              </label>
              <input
                type="password"
                placeholder="**********"
                className={formStyle.inputStyle}
                style={{ width: `${inputWidth}` }}
              />
            </div>
            {/* <div className="absolute left-10" /> */}
          </div>

          <button className="text-2xl bg-green-500 p-4 text-white shadow-md rounded-b-lg"
          style={{paddingInline: "12.6rem"}}>
            Log in
          </button>
        </form>
      </div>
    </div>
  );
}

export default page