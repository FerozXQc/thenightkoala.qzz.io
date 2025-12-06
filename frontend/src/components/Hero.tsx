import '../assets/css/hero.css'
export function HomeHero(){
    return(
    <div id="homeHero">
        <h3>Just building things..</h3>
        <p>Projects and experiments by The Night Koala.</p>
        <div className="ctaBtns">
            <button className='btn'><a href="/#projects">Explore Projects</a></button>
            <button className='btn'><a href="/now">Now</a></button>
        </div>
    </div>
    )
}