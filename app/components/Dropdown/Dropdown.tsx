"use client";
import React, { ReactNode, useState, useEffect, useRef, MouseEvent } from "react";
import DropdownButton from "./DropdownButton";
import DropdownContent from "./DropdownContent";

interface Props {
  buttonText: string;
  content?: ReactNode;
}

const Dropdown = ({ buttonText, content }: Props) => {
  const [open, setOpen] = useState<boolean>(false);

  const dropdownRef = useRef(null)

  const toggleDropdown = () => {
    setOpen(open => !open)
  }

  /* This is where I try and create the functionality for the dropdown to close when you click outside 
  of the content box. But I can't seem to find the right type. */
  
  // useEffect(() => {
  //   const handleClick = (e: MouseEvent) => {
  //     if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
  //       setOpen(false)
  //     }
  //   }
  // }, [dropdownRef])

  return (
    <div className="relative top-1 left-5" ref={dropdownRef}>
      <DropdownButton toggle={() => toggleDropdown()} open={open}>
        <h1 className="text-2xl font-bold">{buttonText}</h1>
      </DropdownButton>

      <DropdownContent open={open}>
        <h2 className="text-lg">{content}</h2>
      </DropdownContent>
    </div>
  );
};

export default Dropdown;
