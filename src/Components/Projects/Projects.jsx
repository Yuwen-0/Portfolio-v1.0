import Project from './Project'
import "./Projects.scss"
import PropTypes from 'prop-types'


export default function Projects({makeCircleBigger,setCursorColor, makeCircleSmaller,setCursorText}) {

    const projects = [
        {
            name: "Multi-Step Form",
            description : {
                challanges: [
                    "Challange 1",
                    "Challange 2",
                ],
                technologies: [
                    "React",
                    "JavaScript",
                ],
                links: {
                    github: "https://github.com",
                    live: "https://github.com",
                },
            },
            images:["src/images/ProjectPhotos/MultiStepForm/FullWide.png","src/images/ProjectPhotos/MultiStepForm/FullWideError.png","src/images/ProjectPhotos/FullWide.png"]
        },
        {
            name: "Multi-Step Form",
            description : {
                challanges: [
                    "Challange 1",
                    "Challange 2",
                ],
                technologies: [
                    "React",
                    "JavaScript",
                ],
                links: {
                    github: "https://github.com",
                    live: "https://github.com",
                },
            }
        }    
        
    ]

    return (
        <div className='projects'>
            {projects.map((project, index) => (
                <Project setCursorColor={setCursorColor} setCursorText={setCursorText} makeCircleBigger={makeCircleBigger} makeCircleSmaller={makeCircleSmaller} key={index} project={project} />
            ))}
        </div>
    )
}

Projects.propTypes = {
    makeCircleBigger: PropTypes.func.isRequired,
    setCursorColor: PropTypes.func.isRequired,
    makeCircleSmaller: PropTypes.func.isRequired,
    setCursorText: PropTypes.func.isRequired,
}