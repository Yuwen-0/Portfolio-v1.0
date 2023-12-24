import "./Contact.scss"

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

    const Icons = {
        Github: "./Github",
        LinkedIn: ".//LinkedIn",
        Upwork: "./Upwork",
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