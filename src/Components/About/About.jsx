import "./About.scss"
import PurpleRod from "../../assets/PurpleRod.svg"

export default function About() {
    const skills = [
        'npm', 'React.js', 'HTML5', 'CSS3', 'SASS', 'JavaScript (ES6+)', 'Git', 'GitHub',
        'Visual Studio Code', 'Figma', 'Responsive Web Design', 'Node.js', 'Babel',
        'Debugging Tools', 'Staying Updated', 'ESLint', 'Adaptability', 'Fluent English',
        'Problem-Solving'
    ];

    const columnCount = 3;
    const columnSize = Math.ceil(skills.length / columnCount);
    const columns = [];
    for (let i = 0; i < columnCount; i++) {
        columns.push(skills.slice(i * columnSize, (i + 1) * columnSize));
    }
    return (
        <div id="About" className="about section">
            <img src={PurpleRod} className="purpleRod" />
            <ul className="infoList">
                <li className="infoItem skills">
                    <span className="infoTitle">Skills & Technologies</span>
                    <div className="columnsContainer">
                        {columns.map((column, index) => (
                            <ul key={index} className="skillList">
                                {column.map((skill, idx) => (
                                    <li key={idx} className="skill">{skill}</li>
                                ))}
                            </ul>
                        ))}
                    </div>
                </li>
                <li className="infoItem">
                    <span className="infoTitle">About Me</span>
                </li>
                <li className="infoItem">
                    Skill3
                </li>
            </ul>
        </div>
    )
}