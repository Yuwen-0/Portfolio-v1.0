import "./About.scss"
import PurpleRod from "../../assets/PurpleRod.svg"
import DinoImage from "../../images/DinoGame.png"

export default function About() {
    const skills = [
        "HTML",
        "CSS",
        "JavaScript",
        "React.js",
        "Node.js",
        "Git",
        "GitHub",
        "VS Code",
        "npm",
        "Jsx",
        "SASS",
    ]
      
    "a"

         
      
    return (
            <dl id="About" className="about section">
                <img src={PurpleRod} className="purpleRod" />
                <dt className="infoTitle">Skills</dt>
                <dd className="info">
                    {skills.map((skill, index) => (
                        <p className="skill" key={index}>{skill}</p>
                    ))}
                </dd>
                <dt className="infoTitle">About Me</dt>
                <dd>
                    <p className="aboutMeParagraph">
                    Hello, I&apos;m <strong>Halil İbrahim Alagül</strong>!  My programming adventure started with a <em>weird</em> story...
                    </p>

                    <p className="aboutMeParagraph">
                    When the power went out, I had no choice but to play the dino game on Chrome. I was hooked! 
                    </p>

                    <p className="aboutMeParagraph">
                    Even when the electricity came back, I kept playing—and then I got curious about hacking the game. 
                    </p>

                    <p className="aboutMeParagraph">
                    That&apos;s when I discovered JavaScript and wrote my first 5 lines of code to speed up my dino. The rest is history! 
                    </p>

                    <img src={DinoImage} className="dino" />
                </dd>
            </dl>
           );

    }