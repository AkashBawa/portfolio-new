import { NextPage } from "next";
import Image from 'next/image'

const Home : NextPage = () => {
    return (
        <div className="home-page">
            <div className="data-layer">
                <div className="description">
                    <h1>Hello I am Akash Bawa</h1>
                    <h6> I am a full stack developer based in th e India</h6>
                </div>
                <div className="image">
                    <img src="/portfolio.jpeg"/>
                </div>
            </div>
            
        </div>
    )
}

export default  Home;