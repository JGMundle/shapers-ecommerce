"use client";
import React, {
  ReactNode,
  useState,
  useEffect,
  useRef,
  MouseEvent,
} from "react";
import DropdownButton from "./DropdownButton";
import DropdownContent from "./DropdownContent";

interface Props {
  buttonText: string;
  content?: ReactNode;
}

const Dropdown = ({ buttonText, content }: Props) => {
  const [open, setOpen] = useState<boolean>(false);

  /* When targeting a specific node/tag in Typescript react, be sure to have the right "type"for the 
  useRef. For example, we're targeting the <div>. So, our "type" is going to be useRef<HTMLDivElement | null> */
  const dropdownRef = useRef<HTMLDivElement | null>(null);

  const toggleDropdown = () => {
    setOpen((open) => !open);
  };

  useEffect(() => {
    /* Since we ran into an issue with the typing for the MouseEvent, what happend is we had the wrong type of MouseEvent
    Remember that there's two types: DOM & React synthetic. In this case, we want to use the DOM one, that's why we have 
    "globalThis.MouseEvent so our "handleClicks don't flag errors */

    const handleClick = (e: globalThis.MouseEvent) => {
      if (!(e.target instanceof Node)) return; // ✅ runtime check, safe narrowing For Typescript to understand what we want

      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClick);
    return () => {
      document.removeEventListener("mousedown", handleClick);
    };
  }, [dropdownRef]);

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
