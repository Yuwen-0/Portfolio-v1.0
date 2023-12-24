import Project from './Project'
import "./Projects.scss"
import PropTypes from 'prop-types'
import Step1FullWide from "/src/images/ProjectPhotos/MultiStepForm/Desktop/Step1FullWide.png";
import Step1FullWideError from "/src/images/ProjectPhotos/MultiStepForm/Desktop/Step1FullWideError.png";
import Step2FullWide from "/src/images/ProjectPhotos/MultiStepForm/Desktop/Step2FullWide.png";
import Step3FullWide from "/src/images/ProjectPhotos/MultiStepForm/Desktop/Step3FullWide.png";
import Step4FullWide from "/src/images/ProjectPhotos/MultiStepForm/Desktop/Step4FullWide.png";
import EndFullWide from "/src/images/ProjectPhotos/MultiStepForm/Desktop/EndFullWide.png";

import Step1Mobile from "/src/images/ProjectPhotos/MultiStepForm/Mobile/Step1Mobile.png";
import Step1MobileError from "/src/images/ProjectPhotos/MultiStepForm/Mobile/Step1MobileError.png";
import Step2Mobile from "/src/images/ProjectPhotos/MultiStepForm/Mobile/Step2Mobile.png";
import Step3Mobile from "/src/images/ProjectPhotos/MultiStepForm/Mobile/Step3Mobile.png";
import Step4Mobile from "/src/images/ProjectPhotos/MultiStepForm/Mobile/Step4Mobile.png";
import EndMobile from "/src/images/ProjectPhotos/MultiStepForm/Mobile/EndMobile.png";

export default function Projects({setIsModalOpen,makeCircleBigger,setCursorColor, makeCircleSmaller,setCursorText}) {

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
                images:{
                    desktop: [
                      Step1FullWide,
                      Step1FullWideError,
                      Step2FullWide,
                      Step3FullWide,
                      Step4FullWide,
                      EndFullWide,
                    ],
                    tablet: [],
                    mobile: [
                      Step1Mobile,
                      Step1MobileError,
                      Step2Mobile,
                      Step3Mobile,
                      Step4Mobile,
                      EndMobile,
                    ],
                   }
            },
        }
    ]

    return (
        <div className='projects' id='Projects'>
            {projects.map((project, index) => (
                <Project setIsModalOpen={setIsModalOpen} setCursorColor={setCursorColor} setCursorText={setCursorText} makeCircleBigger={makeCircleBigger} makeCircleSmaller={makeCircleSmaller} key={index} project={project} />
            ))}
        </div>
    )
}

Projects.propTypes = {
    makeCircleBigger: PropTypes.func.isRequired,
    setCursorColor: PropTypes.func.isRequired,
    makeCircleSmaller: PropTypes.func.isRequired,
    setCursorText: PropTypes.func.isRequired,
    setIsModalOpen: PropTypes.func.isRequired
}