import { NextPage } from "next";
import About from "./about";
import Contact from "./contact";
import Experience from "./experience";
import Home from "./home";
import Projects from "./projects";

const App : NextPage = () => {
    return (
        <div>
            
            <div className="menu-bar">
                <nav className="nav">
                    <label className="myLogo">AB logo</label>
                    <ul className="ul">
                        <li> <a href="#">Home</a> </li>
                        <li> <a href="#">About</a> </li>
                        <li> <a href="#">Experience</a> </li>
                        <li> <a href="#">Projects</a> </li>
                        <li> <a href="#">Contact Me</a> </li>
                    </ul>
                </nav>
            </div>

            <Home></Home>
            <About></About>
            <Experience></Experience>
            <Projects></Projects>
            <Contact></Contact>
        </div>
    )
}

export default  App;