import { NextPage } from "next";
import Image from 'next/image';
interface SkllsI {
    name: string,
    startDate : string,
    backgroundColor : {
        light: string,
        dark: string,
    },
    textColor: string,
    projects: string[],
    logo: {
        url : string,
        backgroungColor: string
    }
}

const Skills : NextPage = () => {

    const skills: SkllsI[] = [
        {
            name: 'MongoDB',
            startDate: 'April 2019',
            backgroundColor: {
                light : '#0E9145',
                dark: '#02351E'
            },
            textColor: 'white',
            projects : ['Outgrow', 'Healthcrum'],
            logo:  { url:  '/mongodb.png', backgroungColor: 'white' }
        },
        {
            name: 'Angular',
            startDate: 'April 2019',
            backgroundColor: {
                light : '#C4002B',
                dark:  '#8c0215'
            },
            textColor: 'white',
            projects : ['Outgrow', 'Healthcrum'],
            logo:  { url:  '/angular.png', backgroungColor: 'white' }
        },
        {
            name: 'ReactJS',
            startDate: 'April 2019',
            backgroundColor: {
                light : '#5ED3F3',
                dark:  '#046077'
            },
            textColor: 'white',
            projects : ['Outgrow', 'Healthcrum'],
            logo:  { url:  '/react.png', backgroungColor: 'white' }
        },
        {
            name: 'NodeJS',
            startDate: 'April 2019',
            backgroundColor: {
                light : '#5FAE45',
                dark:  '#1a6803'
            },
            textColor: 'white',
            projects : ['Outgrow', 'Healthcrum'],
            logo:  { url:  '/nodejs.png', backgroungColor: 'white' }
        },
        {
            name: 'Javascript',
            startDate: 'April 2019',
            backgroundColor: {
                light : '#f7e156',
                dark:  '#b79f00'
            },
            textColor: 'white',
            projects : ['Outgrow', 'Healthcrum'],
            logo:  { url:  '/javascript.png', backgroungColor: 'white' }
        },
        {
            name: 'ExpressJS',
            startDate: 'April 2019',
            backgroundColor: {
                light : '#4f4848',
                dark:  '#0B0B0B'
            },
            textColor: 'white',
            projects : ['Outgrow', 'Healthcrum'],
            logo:  { url:  '/express.png', backgroungColor: 'white' }
        },
        {
            name: 'Socket.io',
            startDate: 'April 2019',
            backgroundColor: {
                light : '#f76ac6',
                dark:  '#8e0475'
            },
            textColor: 'white',
            projects : ['Outgrow', 'Healthcrum'],
            logo:  { url:  '/socketio.png', backgroungColor: 'white' }
        },
        {
            name: 'AWS Lambda',
            startDate: 'April 2019',
            backgroundColor: {
                light : '#F37C1B',
                dark:  '#964c13'
            },
            textColor: 'white',
            projects : ['Outgrow', 'Healthcrum'],
            logo:  { url:  '/lambda.png', backgroungColor: 'white' }
        },
        {
            name: 'HTML',
            startDate: 'April 2019',
            backgroundColor: {
                light : '#E54C21',
                dark:  '#962506'
            },
            textColor: 'white',
            projects : ['Outgrow', 'Healthcrum'],
            logo:  { url:  '/html.png', backgroungColor: 'white' }
        },

        
    ]

    return (
        <div className="skills-wrapper">
            <div className="section">
                <div className="heading">
                    <h1> My skills </h1>
                    <span>Here is list of my hard earned skills. I am always keen to learn new things and  sometime even end up over worked.</span>
                </div>
                <div className="list-skills">
                    {
                        skills.map((skill, index) => {
                            return (
                                <div key={`skill-${index}`} className="skill-card" style={{background:  `linear-gradient(${skill.backgroundColor.light}, ${skill.backgroundColor.dark})`, color: skill.textColor}}>
                                    <div className="logo">
                                        <div className="logo-div" style={{backgroundColor: skill.logo.backgroungColor}}>
                                            <Image src={skill.logo.url} height={'50px'} width={'50px'} alt={skill.name}/>
                                        </div>
                                    </div>
                                    <h4> {skill.name} </h4>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}

export default  Skills;