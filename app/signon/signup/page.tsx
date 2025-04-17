"use client";
import SignupProgress from "@/app/components/SignupProgress";
import React from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { signUpSchemaModel } from "@/app/schemas";
import { zodResolver } from "@hookform/resolvers/zod";

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
    inputStyle1: "text-2xl border-2 rounded-md px-3 py-4 shadow-md",
    inputStyle2: "text-2xl border-2 rounded-md px-3 py-4 shadow-md",

    divStyle: " flex flex-col",

    errorStyle: "text-red-300",
  };

  const longInputWidth = "25rem";

  return (
    <div className="bg-green-100" style={{ minHeight: "100vh" }}>
      <SignupProgress />
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
                className={formStyle.inputStyle1}
                {...register("lastName")}
              />
            </div>

            {errors.lastName && (
              <p className={formStyle.errorStyle}>Last name is required</p>
            )}
          </div>

          <div className={`${formStyle.divStyle} m-10`}>
            <label htmlFor="" className={formStyle.labelStyle}>
              Email
            </label>
            <input
              type="email"
              placeholder="example@email.com"
              className={`${formStyle.inputStyle2}`}
              style={{ width: `${longInputWidth}` }}
              {...register("email")}
            />

            {errors.email && (
              <p className={formStyle.errorStyle}>Email address is required</p>
            )}
          </div>

          <div className={`${formStyle.divStyle} m-5`}>
            <label htmlFor="" className={formStyle.labelStyle}>
              Password
            </label>
            <input
              type="password"
              placeholder="**********"
              className={formStyle.inputStyle2}
              style={{ width: `${longInputWidth}` }}
              {...register("password")}
            />

            {errors.password && (
              <p className={formStyle.errorStyle}>Password is required</p>
            )}
          </div>

          <button
            type="submit"
            className="mt-5 text-2xl bg-green-500 rounded-md p-4 text-white px-16 shadow-sm"
          >
            Continue
          </button>
        </form>
      </div>
    </div>
  );
};

export default signup;
