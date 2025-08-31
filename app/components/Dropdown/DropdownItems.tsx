import React, { ReactNode } from 'react'
import styles from "./DropdownItems.module.css"

interface Props {
    children: ReactNode
    onClick?: () => void
}

const DropdownItems = ({children, onClick}: Props) => {
  return (
    <div className={styles["dropdown-item"]} onClick={onClick}>
      {children}
    </div>
  );
}

export default DropdownItems