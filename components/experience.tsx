import { NextPage } from "next";

interface ExperienceI {
    companyName: string,
    location: string,
    startDate: string,
    endDate: string,
    projects: string[],
    logo: string,
    credentials: string,
    description: string,
}

const Experience : NextPage = () => {
    return (
        <div className="experience-page">
            <div className="section-heading">
                <h1> Experience</h1>
                <span>Here is list of my hard earned experience. I am always keen to learn new things and  sometime even end up over worked.</span>
            </div>
            <div className="experience-div">
                <div className="experience-list">
                    <h2>Venturepact</h2>
                </div>
            </div>
        </div>
    )
}

export default  Experience;