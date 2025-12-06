import Header from "../components/Header"
import { HomeHero } from "../components/Hero"
import { Projects } from "../components/Projects"
import { About } from "../components/About"
function HomePage(){
    return(<>
    <Header />
    <HomeHero />
    <Projects />
    <About />
    </>)
}

export default HomePage