import '../assets/css/projects.css'
import managr_icon from '../assets/images/managr_icon.png'
import birblingo_icon from '../assets/images/birblingo_icon.png'
import telestorage_icon from '../assets/images/telestorage_icon.png'
import managr_icon_inverted from '../assets/images/managr_icon_inverted.png'
import birblingo_icon_inverted from '../assets/images/birblingo_icon_inverted.png'
import telestorage_icon_inverted from '../assets/images/telestorage_icon_inverted.png'
export function Projects(){
    return(
    <div id='projects' className="projects">
        <h3>Projects</h3>
        <div className="cards">
            <div id='managr' className="card">
            <div className="icon">
                <img src={managr_icon} className="logo-light" />
                <img src={managr_icon_inverted} className="logo-dark" />
            </div>
                <h4>Managr</h4>
                <p>Exploring how employee management and payroll systems work end-to-end.</p>
            </div>

            <div id='birblingo' className="card">
            <div className="icon">
                <img src={birblingo_icon} className="logo-light" />
                <img src={birblingo_icon_inverted} className="logo-dark" />
            </div>
                <h4>Birblingo</h4>
                <p>Experimenting with habit-driven language learning and repetition systems.</p>
            </div>

            <div id='telestorage' className="card">
            <div className="icon">
                <img src={telestorage_icon} className="logo-light" />
                <img src={telestorage_icon_inverted} className="logo-dark" />
            </div>
                <h4>TeleStorage</h4>
                <p>An experiment in self-hosted storage using Telegram as a transport layer.</p>
            </div>

        </div>
    </div>)
}

