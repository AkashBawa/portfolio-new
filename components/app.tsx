import { NextPage } from "next";
import Skills from "./skills";
import Contact from "./contact";
import Experience from "./experience";
import Home from "./home";
import Projects from "./projects";
import { useRef } from "react";

const App : NextPage = () => {
    let contactRef = useRef<any>();

    const screollToBottom = () => {
        console.log('move')
        contactRef.current?.scrollIntoView({ behavior: 'smooth' })
    }
    return (
        <div>
            {/* <div className="menu-bar">
                <nav className="navbar-custom">
                    <label className="myLogo">AB logo</label>
                    <ul className="ul">
                        <li> <a href="#">Home</a> </li>
                        <li> <a href="#">SKills</a> </li>
                        <li> <a href="#">Experience</a> </li>
                        <li> <a href="#">Projects</a> </li>
                        <li> <a href="#">Contact Me</a> </li>
                    </ul>
                </nav>
            </div> */}

            <Home screollToBottom={screollToBottom}></Home>
            <Skills></Skills>
            <Experience></Experience>
            <Projects></Projects>
            <div ref={contactRef}>
                <Contact ></Contact>
            </div>
            
        </div>
    )
}

export default  App;