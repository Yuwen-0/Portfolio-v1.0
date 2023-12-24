import "./Contact.scss"
import LinkedInLogo from "./LinkedIn_icon.svg"
import upworkIcon from './upwork-tile.svg';
export default function Contact() {
    const SocialMedia = {
        Github: "https://github.com/Yuwen-0",
        LinkedIn: "https://www.linkedin.com/in/halil-alagül-362a3b276/",
        Upwork: "https://www.upwork.com/freelancers/~019ecf46aceb5b9146",
    }
    const Contact = {
        Email: "halil.alagul0@gmail.com",
        Phone: "+90 537 510 98 47"
    }
    return (
        <footer className="contact" id="Contact">
            <h2>Email:{Contact.Email}</h2>
            <h2>Phone:{Contact.Phone}</h2>
            <ul className="socialMedia">
            <li className="Github">
                <a href={SocialMedia.Github} target="_blank" rel="noreferrer">
                    <svg className="icon" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
                </a>
            </li>
            <li className="LinkedIn">
                <a href={SocialMedia.LinkedIn} target="_blank" rel="noreferrer">
                    <img className="icon" src={LinkedInLogo} alt="" />
                </a>
            </li>
            <li  className="Upwork">
                <a href={SocialMedia.Upwork} target="_blank" rel="noreferrer">
                    <img className="icon" src={upworkIcon} alt="" />
                </a>
            </li>
            </ul>
            <h2 className="copyright">Copyright © 2023 - Halil Ibrahim Alagül</h2>
        </footer>
    )
}