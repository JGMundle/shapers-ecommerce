"use client";
import SignupProgress from "@/app/components/SignupProgress";
import React, { FormEventHandler } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { signUpSchemaModel } from "@/app/schemas";
import { zodResolver } from "@hookform/resolvers/zod";
import axios from "axios";
import config from "@/app/config/config";
import { div } from "framer-motion/client";

const signup = () => {
  // Form stucture
  type SignUpFormData = z.infer<typeof signUpSchemaModel>;
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<SignUpFormData>({ resolver: zodResolver(signUpSchemaModel) });

  // Styles
  const formStyle = {
    mainForm: "mt-10 flex flex-col items-center",
    fieldStyle: "",
    labelStyle: "text-xl text-gray-600",
    inputStyle: "text-lg border-2 rounded-md px-3 py-4 shadow-md",

    divStyle: " flex flex-col",

    errorStyle: "text-red-300",

    SignUpBar: "bg-white p-11 shadow-md"
  };

  const inputWidth = "24.1rem";

  const signUpUser = async (data: SignUpFormData) => {

    // Try & Catch Form Info
    try {
      const response = await axios.post(
        config.TEST_DEV_URL, data
      );
      if (response.status === 201 ) {
        console.log("Success")
      }
      else {
        console.log("Failed for some reason")
      } 
      
    } catch (error) {
      if (error instanceof Error) {
        console.log("Error:" + error)
      }
    }
  }


  return (
    <div className="bg-green-100" style={{ minHeight: "100vh" }}>
      <div className="text-l" />

      <div className={formStyle.SignUpBar}>
        <SignupProgress />
      </div>
      <div className="mt-10">
        <h1 className="text-5xl font-bold text-center">
          Sign Up to get started!
        </h1>

        <form
          action="submit"
          onSubmit={handleSubmit(signUpUser)}
          className={formStyle.mainForm}
        >
          <div className="bg-white py-7 px-10 rounded-t-lg shadow-lg space-y-5">
            {/* First name & Last name */}
              <div className={formStyle.divStyle}>
                <label htmlFor="" className={formStyle.labelStyle}>
                  First name
                </label>
                <input
                  type="text"
                  placeholder="Johnathan"
                  className={formStyle.inputStyle}
                  style={{ width: `${inputWidth}` }}
                  {...register("firstName")}
                />

                {errors.firstName && (
                  <p className={formStyle.errorStyle}>First name is required</p>
                )}
              </div>

              <div className={formStyle.divStyle}>
                <label htmlFor="" className={formStyle.labelStyle}>
                  Last name
                </label>
                <input
                  type="text"
                  placeholder="Doe"
                  className={formStyle.inputStyle}
                  style={{ width: `${inputWidth}` }}
                  {...register("lastName")}
                />
              </div>

              {errors.lastName && (
                <p className={formStyle.errorStyle}>Last name is required</p>
              )}
            

            <div className={`${formStyle.divStyle}`}>
              <label htmlFor="" className={formStyle.labelStyle}>
                Email
              </label>
              <input
                type="email"
                placeholder="example@email.com"
                className={`${formStyle.inputStyle}`}
                style={{ width: `${inputWidth}` }}
                {...register("email")}
              />

              {errors.email && (
                <p className={formStyle.errorStyle}>
                  Email address is required
                </p>
              )}
            </div>

            <div className={`${formStyle.divStyle}`}>
              <label htmlFor="" className={formStyle.labelStyle}>
                Password
              </label>
              <input
                type="password"
                placeholder="**********"
                className={formStyle.inputStyle}
                style={{ width: `${inputWidth}` }}
                {...register("password")}
              />

              {errors.password && (
                <p className={formStyle.errorStyle}>Password is required</p>
              )}
            </div>
          </div>

          <button
            type="submit"
            className="text-2xl bg-green-500 p-4 text-white px-48 shadow-md rounded-b-lg"
          >
            Sign Up
          </button>
        </form>
      </div>
    </div>
  );
};

export default signup;