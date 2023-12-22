import "./Home.scss";
import { useEffect } from "react";

    export default function Home({makeCircleBigger,setCursorColor, makeCircleSmaller,setCursorText}) {
    useEffect(() => {
        const jobSpanElement = document.querySelector(".jobSpan");
        const tags = [
            "Front End Developer",
            "Front End Designer",
            "React Developer",
        ];

        const sceneOut = () => {
            jobSpanElement.classList.add("sceneOut");
            setTimeout(() => {
                jobSpanElement.classList.remove("sceneOut");
            }, 2100);
        }
        
        setInterval(() => {
            setTimeout(() => {
                jobSpanElement.textContent = tags[0];
            }, 200);
            tags.push(tags.shift());
            sceneOut()
        }, 3000);
    }, []);

    function arrowButtonClick(e) {
        window.scrollTo(0, 700)
    }

    return (
        <div className="home section" id="Home">
            <h1 className="name">Hello I&apos;m <span className="nameSpan">Halil Alagül!</span></h1>
            <div className="jobContainer">
                <h1 className="job">I am a =&gt;</h1>
                <h1 className="jobSpan">Front End Developer</h1>
            </div>
            <h1 style={{marginTop: "10px",color: "gray"}}>Scroll down to see my work!</h1>
            <button onClick={arrowButtonClick} onMouseEnter={() => makeCircleBigger()} onMouseLeave={() => makeCircleSmaller()} className="downArrowContainer"><span className="downArrow"></span></button>
        </div>
    );
}
