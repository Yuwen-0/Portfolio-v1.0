import Project from './Project'
import "./Projects.scss"
import PropTypes from 'prop-types'


export default function Projects({makeCircleBigger,setCursorColor, makeCircleSmaller,setCursorText}) {

    const projects = [
        {
            name: "Multi-Step Form",
            description : {
                challanges: [
                    "remaining data when step changes",
                    "calculating total price mo / yr",
                ],
                technologies: [
                    "React",
                    "JavaScript",
                    "Sass",
                    "Html",
                    "Css",
                ],
                links: {
                    github: "https://github.com/Yuwen-0/Multi-step-form",
                    live: "https://yuwen-0.github.io/Multi-step-form/",
                },
            },
            images:["src/images/ProjectPhotos/MultiStepForm/FullWide.png","src/images/ProjectPhotos/MultiStepForm/FullWideError.png","src/images/ProjectPhotos/MultiStepForm/Step2FullWide.png","src/images/ProjectPhotos/MultiStepForm/Step1MobileError.png","src/images/ProjectPhotos/MultiStepForm/Step2Mobile.png","src/images/ProjectPhotos/MultiStepForm/Step1Mobile.png"]
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