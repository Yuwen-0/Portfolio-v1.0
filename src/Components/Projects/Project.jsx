import PropTypes from 'prop-types';
import { useRef } from 'react';
import ImageCollection from './ImageCollection.jsx';

export default function Project({setIsModalOpen,project,setCursorColor, makeCircleBigger, makeCircleSmaller,setCursorText}) {

    //Todo make diffrent divs to make mobile and desktop separate

    const modal = useRef(null);
    const modalContent = useRef(null);

    const handleImageEnter = () => {
        setCursorText("Click Here");
        setCursorColor("black");
        makeCircleBigger("60px", "60px"); 
    }

    const handleImageLeave = () => {
        setCursorText("");
        setCursorColor("white");
        makeCircleSmaller();
    }

    const handleLinkEnter = () =>  {
        setCursorText("");
        setCursorColor("pink");
        makeCircleBigger("50px", "50px"); 
    }

    const handleLinkLeave = () => {
        setCursorText("");
        setCursorColor("white");
        makeCircleSmaller();
    };

    const handleImageClick = () => {
        modal.current.classList.add("modal-open");
        setTimeout(() => modalContent.current.classList.add("modal-content-open"), 100);
        document.body.style.overflow = "hidden";
        setIsModalOpen(true);
    };

    const handleModalEnter = () => {
        setCursorColor("black");
    };

    const handleModalLeave = () => {
        setCursorColor("white");
    }

    return (
        <>
        <div className="projectContainer">
            <div
                className="project" 
            >
                <h1 className='mainProjectTitle' >{project.name}</h1>
                {   
                    <>
                        <h2 className='subProjectTitle'>Challanges</h2>
                        <ul className='challanges list'>
                            {project.description.challanges.map((challange, index) => (
                                <li key={index}>{challange}</li>
                            ))}
                        </ul>
                        <h2 className='subProjectTitle'>Technologies</h2>
                        <ul className='technologies list'>
                            {project.description.technologies.map((technology, index) => (
                                <li key={index}>{technology}</li>
                            ))}
                        </ul>
                        <h2 className='subProjectTitle'>Links</h2>
                        <ul className='links list'>
                            <li><a onMouseEnter={() => handleLinkEnter()} onMouseLeave={() => handleLinkLeave()} href={project.description.links.github}>GitHub</a></li>
                            <li><a onMouseEnter={() => handleLinkEnter()} onMouseLeave={() => handleLinkLeave()} href={project.description.links.live}>Live</a></li>
                        </ul>
                    </>
                }
            </div>
            <div className="imageKolaj" >
                {project.description.images !== undefined && project.description.images.desktop.map((image, index) => {
                    if (index >= 3) return
                   return <img
                        onClick={() => handleImageClick()}
                        key={index} 
                        onMouseEnter={() => handleImageEnter()} 
                        onMouseLeave={() => handleImageLeave()} 
                        src={image} 
                        className="image" alt=""
                    />
                })}
                {project.description.images !== undefined && project.description.images.mobile.map((image, index) => {
                    if (index >= 3) return
                    return <img
                        onClick={() => handleImageClick()}
                        key={index} 
                        onMouseEnter={() => handleImageEnter()} 
                        onMouseLeave={() => handleImageLeave()} 
                        src={image} 
                        className="image" 
                        alt=""
                    />
                }
                )}
            </div>
        </div>
        <div className='fullProjectModal' onMouseEnter={() => handleModalEnter()} onMouseLeave={() => handleModalLeave()} ref={modal}>
                <div ref={modalContent} className="fullProject">
                    <ImageCollection project={project}/>
                    <span onClick={() => {
                        modal.current.classList.remove("modal-open");
                        modalContent.current.classList.remove("modal-content-open");
                        document.body.style.overflow = "auto";
                        setIsModalOpen(false);
                    }} className='close'>&times;</span>
                </div>
        </div>
    </>
    )
}

Project.propTypes = {   
    project: PropTypes.object,
    setCursorColor: PropTypes.func,
    makeCircleBigger: PropTypes.func,
    makeCircleSmaller: PropTypes.func,
    setCursorText: PropTypes.func,
    style: PropTypes.object,
    setIsModalOpen: PropTypes.func
}

