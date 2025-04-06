import Link from 'next/link';
import React from 'react'
import {
  Bs1Circle,
  Bs1CircleFill,
  Bs2Circle,
  Bs2CircleFill
} from "react-icons/bs";
import styles from "./SignonBar.module.css"
import { IoMdArrowBack } from 'react-icons/io';

const SignupProgress = () => {
  // Styles
  const circleSize = 35

  const progressStyle = {
    numberDivStyle: "flex flex-col items-center space-y-1",
  };

  return (
    <div className="flex flex-row p-5 shadow-md justify-center bg-white space-x-20 ">
      <Link href={"/"} className={`${styles.home} absolute left-10`}>
        <IoMdArrowBack size={25} className="mr-2" />
        Home
      </Link>
      
      <div className={progressStyle.numberDivStyle}>
        <Bs1Circle size={circleSize} />
        <p>Account</p>
      </div>

      <div className={progressStyle.numberDivStyle}>
        <Bs2Circle size={circleSize} />
        <p>Bank details</p>
      </div>

      <Link href={"/signon/login"} className={styles.loginbtn}>
        Log in
      </Link>
    </div>
  );
}

export default SignupProgress