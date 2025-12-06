import '../assets/css/header.css'
import koala_logo_dark from '../assets/images/koala_logo.png'
import koala_logo_light from '../assets/images/koala_logo_inverted.png'
import linkedin from '../assets/images/linkedin.png'
import linkedin_inverted from '../assets/images/linkedin_inverted.png'
import github from '../assets/images/github.png'
import github_inverted from '../assets/images/github_inverted.png'
function Header(){
    return(<header>
        <div className="logo">
  <img style={{width:"30px"}} src={koala_logo_dark} className="logo-light" />
  <img style={{width:"30px"}} src={koala_logo_light} className="logo-dark" />
</div>
        <nav>
            <ul>
                <li><a href="/">Home</a></li>
                <li><a href="/#projects">Projects</a></li>
                <li><a href="/now">Now</a></li>
                <li><a href="/#about">About</a></li>
                <li><a href="https://www.linkedin.com/in/ferozchand/">
                    <img style={{width:"20px"}} src={linkedin} className="logo-light" alt="linkedin.png" /><img style={{width:"20px"}} src={linkedin_inverted} className='logo-dark' alt="linkedin.png" />
                    </a></li>
                <li><a href="https://github.com/FerozXQc">
                    <img style={{width:"20px"}} src={github} className="logo-light" alt="github.png" /><img style={{width:"20px"}} src={github_inverted} className='logo-dark' alt="github.png" />
                    </a></li>
            </ul>
        </nav>
    </header>)
}

export default Header