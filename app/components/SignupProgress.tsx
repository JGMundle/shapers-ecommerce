import Link from 'next/link';
import React from 'react'
import styles from "./SignonBar.module.css"
import { IoMdArrowBack } from 'react-icons/io';

const SignupProgress = () => {

  return (
    <div className="flex flex-row">
      <Link href={"/"} className={styles.home}>
        <IoMdArrowBack size={25} className="mr-2" />
        Home
      </Link>
      

      <Link href={"/signon/login"} className={styles.loginbtn}>
        Log in
      </Link>
    </div>
  );
}

export default SignupProgress