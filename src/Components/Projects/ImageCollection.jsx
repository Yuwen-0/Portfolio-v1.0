import PropTypes from "prop-types"
import { useRef } from "react"
import { useState } from "react"
import "./Projects.scss"

export default function ImageCollection({project}) {

    const [isDesktop, setIsDesktop] = useState(true);

    const imageCollection = useRef(null);

    function scroll(scrollAmount) {
        imageCollection.current.scrollTo({
            top: 0,
            left: imageCollection.current.scrollLeft + scrollAmount,
            behavior: 'smooth'
        })
    }
    return (
        <>
            <div className="imageSwitch">
                <button onClick={() => setIsDesktop(true)} className={`desktopSwitch Switch ${isDesktop ? "active" : ""}`}>Desktop</button>
                <button onClick={() => setIsDesktop(false)} className={`mobileSwitch Switch ${isDesktop ? "" : "active"}`}>Mobile</button> 
            </div>
            <div className="imageCollection"style={{width: isDesktop ? "850px" : "320px"}} ref={imageCollection} >

                {project.description.images && isDesktop ? project.description.images.desktop.map((image, index) => (
                    <img src={image} className="modelImage" key={index} alt=""/>
                )):""}

                {project.description.images && !isDesktop ? project.description.images.mobile.map((image, index) => (
                    <img src={image} className="modelImage" key={index} alt=""/>
                )) :""}
            </div>
            <button 
                onClick={() => scroll(isDesktop ? 800 : 320)} 
                style={{
                    right: isDesktop ? "176px" : "440px"
                }} 
                className="rightArrowButton Arrow"
            > {">"}</button>
            <button 
                onClick={() => scroll(isDesktop ? -800 : -320)} 
                style={{
                    left: isDesktop ? "176px" : "440px"                
                }} 
                className="leftArrowButton Arrow"
            >{"<"}</button>
        </>
    )
}

ImageCollection.propTypes = {
    project: PropTypes.object
}