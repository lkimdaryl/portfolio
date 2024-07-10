import './hero.css'
import ProfilePic from '../../assets/profile_pic.png'
import Contact from '../Contact/contact'
const Hero = () => {
    return (
        <div>
            <div className='hero-wrapper'>
                <div id="hero">
                    <div id="intro">
                        <h3>Hi!</h3>
                        <h2>I'm <strong>Kim</strong>.</h2>
                    </div>
                    <img id="my-img" src={ProfilePic} alt="Kim's profile picture" />
                </div>
                <div>
                    <h2 id="title">Creative <br />Developer</h2>
                    <p><strong>
                        I build accessible, inclusive products and digital experiences.
                    </strong></p>
                </div>
                <Contact />
            </div>
        </div>
    )
}

export default Hero