import "./Contact.scss"
import GithubIcon from "./Github.png";
import LinkedinIcon from "./LinkedIn.png";
import UpworkIcon from "./UpWork.png";

export default function Contact() {
    const SocialMedia = {
        Github: "https://github.com/ha376",
        LinkedIn: "https://www.linkedin.com/in/ha376/",
        Upwork: "https://www.upwork.com/freelancers/~019ecf46aceb5b9146",
    }
    const Contact = {
        Email: "halil.alagul0@gmail.com",
        Phone: "+90 537 510 98 47"
    }

    const Icons = {
        Github: GithubIcon,
        LinkedIn: LinkedinIcon,
        Upwork: UpworkIcon
    }
    return (
        <footer className="contact" id="Contact">
            <h2>Email:{Contact.Email}</h2>
            <h2>Phone:{Contact.Phone}</h2>
            <ul className="socialMedia">
                {Object.entries(SocialMedia).map(([key, value]) => {
                    return <li key={key} className={key}><a href={value} target="_blank" rel="noreferrer"><img className="icon" src={`${Icons[key]}`} alt="" /></a></li>
                })}
            </ul>
            <h2 className="copyright">Copyright © 2023 - Halil Ibrahim Alagül</h2>
        </footer>
    )
}