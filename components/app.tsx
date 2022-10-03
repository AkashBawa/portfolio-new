import { NextPage } from "next";
import About from "./about";
import Contact from "./contact";
import Experience from "./experience";
import Home from "./home";
import Projects from "./projects";

const App : NextPage = () => {
    return (
        <div>
            <Home></Home>
            <About></About>
            <Experience></Experience>
            <Projects></Projects>
            <Contact></Contact>
        </div>
    )
}

export default  App;