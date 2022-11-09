import { NextPage } from "next";
import Image from 'next/image';
interface ProjectI {
    name: string,
    about: string[],
    logo: {
        background: string,
        url: string
    },
    heading: {
        background: {
            light: string,
            dark: string
        },
        color: string
    },
    techUsed : 
        {
            name: string,
            color: string,
            background: {
                light: string,
                dark: string
            }
        }[]
    
}

const Projects : NextPage = () => {

    const projects : ProjectI[] = [
        {
            name: 'Outgrow',
            about: ['Marketing tool and san dd sdsds dsdsd', 'User can create calculator and generates leads', 'Sync leads with different crms along with webhook and zapier'],
            logo: {
                background: 'white',
                url: '/outgrow.png'
            },
            heading: {
                background: {
                    light: '#FB5F66',
                    dark: '#c4484c'
                },
                color: 'white'
            },
            techUsed: [
                {
                    name: 'Node JS',
                    color: 'white',
                    background: {
                        light : '#5FAE45',
                        dark:  '#1a6803'
                    }
                },
                {
                    name: 'Angular',
                    color: 'white',
                    background: {
                        light : '#C4002B',
                        dark:  '#8c0215'
                    }
                },
                {
                    name: 'Express',
                    color: 'white',
                    background: {
                        light : '#4f4848',
                        dark:  '#0B0B0B'
                    }
                },
                {
                    name: 'MongoDB',
                    color: 'white',
                    background: {
                        light : '#0E9145',
                        dark: '#02351E'
                    }
                },
                {
                    name: 'AWS Lambda',
                    color: 'white',
                    background: {
                        light : '#F37C1B',
                        dark:  '#964c13'
                    }
                },
            ]
        }
    ]

    return (
        <div className="wrapper">
            <div className="section-heading">
                <h1> Projects </h1>
                <span>Here is list of my hard earned experience. I am always keen to learn new things and sometime even end up over worked. </span>
            </div>
            <div className="projects-wrapper">

                {
                    projects.map((project,index) => {
                        return (
                            <div className="project-list" key={`project-${index}`}>
                                <div className="heading flex-center"  style={{background:  `linear-gradient(${project.heading.background.light}, ${project.heading.background.dark})`, color: project.heading.color}}>
                                    <div className="image-div flex-center" style={{background: project.logo.background}}>
                                        <Image height={45} width={45} src={"/outgrow.png"} alt="outgrow"/>
                                    </div>
                                    <h4> {project.name}  </h4>
                                    
                                </div>
                                <div>
                                    <div className="project-sections">
                                        <span className="head">About</span>
                                        <div>
                                            <ol>
                                                {
                                                    project.about.map((about, index) => {
                                                        return (
                                                            <li key={`about-${index}`}>{about}</li>
                                                        )
                                                    })
                                                }
                                            </ol>
                                        </div>
                                    </div>
                                    <div className="project-sections">
                                        <span className="head">Technology Used</span>
                                        <div className="tech-list">
                                            {
                                                project.techUsed.map((tech, index) => {
                                                    return (
                                                        <span key={`tech-${index}`} style={{color: tech.color, background:  `linear-gradient(${tech.background.light}, ${tech.background.dark})`}}>  
                                                            {tech.name}
                                                        </span>
                                                    )
                                                })
                                            }
                                            {/* <span>Angular</span> */}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }
                
                {/* <div className="project-list">  
                </div>
                <div className="project-list">  
                </div> */}
            </div>
        </div>
    )
}

export default  Projects;