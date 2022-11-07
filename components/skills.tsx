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
            name: 'NodeJS',
            startDate: 'April 2019',
            backgroundColor: {
                light : '#5FAE45',
                dark:  '#3E843D'
            },
            textColor: 'white',
            projects : ['Outgrow', 'Healthcrum'],
            logo:  { url:  '/nodejs.png', backgroungColor: 'white' }
        },
        {
            name: 'Javascript',
            startDate: 'April 2019',
            backgroundColor: {
                light : '#c6b637',
                dark:  '#847501'
            },
            textColor: 'white',
            projects : ['Outgrow', 'Healthcrum'],
            logo:  { url:  '/javascript.png', backgroungColor: 'white' }
        },
    ]

    return (
        <div className="skills-wrapper">
            <div className="section">
                <div className="heading"> My skills</div>
                <div className="list-skills">
                    {
                        skills.map((skill) => {
                            return (
                                <div className="skill-card" style={{background:  `linear-gradient(${skill.backgroundColor.light}, ${skill.backgroundColor.dark})`, color: skill.textColor}}>
                                    <div className="logo">
                                        <div className="logo-div" style={{backgroundColor: skill.logo.backgroungColor}}>
                                            <Image src={skill.logo.url} height={'50px'} width={'50px'}/>
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