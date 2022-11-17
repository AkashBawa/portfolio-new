import { NextPage } from "next";
import Image from 'next/image'
interface ExperienceI {
    companyName: string,
    designation: string,
    location: string,
    startDate: string,
    endDate: string,
    projects: string[],
    logo: string,
    credentials: string,
    compUrl : string,
    aboutCompany ?: string,
    roles : string[]
}

const Experience : NextPage = () => {

    const experiences : ExperienceI[] = [
        {
            companyName: 'Venturepact',
            designation: 'Software developer',
            location: 'Jalandhar',
            startDate: 'June 2021',
            endDate: 'Dec 2022',
            projects: ['Outgrow', 'Omniengage'],
            logo : '/venturepact.png',
            credentials: '',
            compUrl: 'www.venturepact.com',
            aboutCompany: '',
            roles: ['Sitewide Development in Frontend(angular2) + Backend (MongoDB and Nodejs)', "Managing Outgrow's different development environments (Dev - Staging - Production)", "Defining development process and execution."]
        },
        {
            companyName: 'Dots',
            designation: 'MEAN Stack Intern',
            location: 'Remote',
            startDate: 'Jan 2021',
            endDate: 'May 2021',
            projects: ['Healthcrum'],
            logo : '/dots.png',
            credentials: '',
            compUrl: 'www.dotsforall.com',
            aboutCompany: '',
            roles: ['Worked on the Web sockets , Angular 8 , Node.js, MongoDB and Express', "Worked on project HealthCrum.in using MEAN stack."]
        }
        // {
        //     companyName: 'Impinge Solution',
        //     designation: 'MEAN Stack Intern',
        //     location: 'Mohali',
        //     startDate: 'June 2019',
        //     endDate: 'July 2019',
        //     projects: ['Tourism'],
        //     logo : '/impinge.jpeg',
        //     credentials: '',
        //     compUrl: 'https://www.impingesolutions.com/',
        //     aboutCompany: '',
        //     roles: ['Worked on the Web sockets , Angular 8 , Node.js, MongoDB and Express', "Worked on project HealthCrum.in using MEAN stack."]
        // }
    ]

    return (
        <div className="experience-page">
            <div className="section-heading">
                <h1> Experience</h1>
                <span>Here is list of my hard earned experience. I am always keen to learn new things and  sometime even end up over worked.</span>
            </div>
            <div className="experience-div">
                {
                    experiences.map((experience, index) => {
                        return (
                            <div className="experience-list" key={`exp-${index}`}>
                                <h2> {experience.designation} 
                                    <span>
                                        <Image src={experience.logo} height={30} width={30} alt={'Logo'}></Image>
                                    </span>
                                </h2>
                                <span className="description"> {`${experience.companyName} | ${experience.compUrl} | ${experience.startDate}-${experience.endDate}`} </span>
                                <div className="roles">
                                    <ol>
                                        {
                                            experience.roles.map((role, index) => {
                                                return (
                                                    <li key={`role-${index}`}>{role}</li>
                                                )
                                            })
                                        }
                                    </ol>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default  Experience;