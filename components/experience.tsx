import { NextPage } from "next";

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
            logo : '',
            credentials: '',
            compUrl: 'www.venturepact.com',
            aboutCompany: '',
            roles: ['Handle this', 'handle that']
        }
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
                            <div className="experience-list">
                                <h2>Software developer</h2>
                                <span className="description"> {`${experience.companyName} | ${experience.compUrl} | ${experience.startDate}-${experience.endDate}`} </span>
                            </div>
                        )
                    })
                }
                
                <div className="experience-list">
                    <h2>Software developer</h2>
                  
                </div>
            </div>
        </div>
    )
}

export default  Experience;