import { NextPage } from "next";
import  Image  from 'next/image'; 

interface HomePropsI {
    scrollToBottom: () => void
}

const Home : NextPage<HomePropsI> = (props) => {

    return (
        <div className="home-page">
            <div className="data-layer">
                <div className="description">
                    <label style={{display: "block", color: "#8F8D9A"}} className="hello">HELLO</label>
                    <span className="name"> {"I'm "}<b style={{color: "#4d3f9b"}}>Akash Bawa</b> <br/>
                        <b>a</b> web developer.
                    </span>
                    <span className="desc">
                       { " After discovering my passion for web development, I couldn’t get enough. I made websites for friends and family, interned with a local business, and hired myself out as a freelancer on upwork. I’m looking forward to bringing that passion to a full-time role. "}
                    </span>
                    <div className="button-row">
                        <button className="contact-button" onClick={(e) => {props.scrollToBottom()}}>Contact Me</button>
                        <button className="resume">Resume</button>
                    </div>
                </div>
                <div className="image">
                    <Image src="/portfolio.jpeg" height={357} width={398}  alt="developing"/>
                </div>
            </div>
            
        </div>
    )
}

export default  Home;