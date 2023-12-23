import PropTypes from 'prop-types'

export default function Project({project,setCursorColor, makeCircleBigger, makeCircleSmaller,setCursorText}) {

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
        makeCircleBigger("30px", "30px"); 
    }

    const handleLinkLeave = () => {
        setCursorText("");
        setCursorColor("white");
        makeCircleBigger("60px", "60px"); 
    }

    return (
        <>
        <div className="projectContainer">
            <div
                className="project" 
                onMouseEnter={() => makeCircleBigger()} 
                onMouseLeave={() => makeCircleSmaller()}
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
                {project.images ? project.images.map((image, index) => {
                return (
                    <img
                        className="image"
                        key={index}
                        src={image}
                        alt="image"
                        onMouseEnter={() => handleImageEnter()}
                        onMouseLeave={() => handleImageLeave()}
                    />
                )
                }) : ""}
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
    style: PropTypes.object
}

