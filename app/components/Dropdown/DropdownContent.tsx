import React, { ReactNode } from "react";
import styles from "./DropdownContent.module.css";

interface Props {
  children: ReactNode;
  open: boolean;
}

const DropdownContent = ({ children, open }: Props) => {
  return (
    <div
      className={`${styles["dropdown-content"]} ${
        open ? styles["content-open"] : null
      }`}
    >
      {children}
    </div>
  );
};

export default DropdownContent;
