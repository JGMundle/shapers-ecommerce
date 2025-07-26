"use client"
import NavBar from "./components/NavBar"
// import { useNavBar } from "@/hooks/useNavBar"

const NavBarWrapper: React.FC = () => {
    const showNavBar = useNavBar();
    return showNavBar ? <NavBar/> : null
} 

export default NavBarWrapper;