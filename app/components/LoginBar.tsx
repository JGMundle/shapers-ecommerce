import Link from 'next/link';
import React from 'react'
import styles from "./SignonBar.module.css"
import { IoMdArrowBack } from "react-icons/io";

const LoginBar = () => {

  return (
      <div className="flex flex-row">
          
      <Link href={"/"} className={styles.home}>
        <IoMdArrowBack size={25} className='mr-2'/>
        Home
      </Link>

      <Link href={"/signon/signup"} className={styles.loginbtn}>
        Sign up
      </Link>
    </div>
  );
}

export default LoginBar