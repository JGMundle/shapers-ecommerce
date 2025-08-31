import React, { ReactNode } from 'react'
import { IoChevronForward, IoChevronDownSharp } from "react-icons/io5";
import styles from "./DropdownButton.module.css"

interface Props {
  children: ReactNode
  open: boolean
  toggle: () => void
}

const DropdownButton = ({ children, open, toggle }: Props) => {
  const chevronSize = 25;
  return (
    <div onClick={toggle} className={styles["dropdown-btn"]}>
      {children}
      <span className='ml-1'>
        {open ? <IoChevronDownSharp size={chevronSize}/> : <IoChevronForward size={chevronSize}/>}
      </span>
    </div>
  );
}

export default DropdownButton