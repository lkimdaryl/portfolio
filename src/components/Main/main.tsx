import './main.css'
import AboutMe from '../../pages/AboutMe/aboutme'
import Skills from '../Skills/skills'
import Projects from '../Projects/projects'
// import Contact from '../Contact/contact'

const Main = () => {
    return (
        <div id="main">
            <AboutMe />
            <Skills />
            <Projects />
            {/* <Contact /> */}
        </div>
    )
}

export default Main