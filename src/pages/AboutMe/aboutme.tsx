import './aboutme.css'
import SectionWrapper from "../../components/hoc/section-wrapper"
import { Tilt } from 'react-tilt'
import CoinPrism from '../../components/threeD/coinprism'
import MachineCogs from '../../components/threeD/machine-cogs'

const AboutMe = () => {
    return (
        <div id='about'>
            <div id='intro-container'>
                <h4>Introduction</h4>
                <h1>Overview.</h1>
                <p>
                    I am a skilled software developer with experience in crafting dynamic applications, designing responsive user interfaces, and developing APIs. I’m  a quick learner and collaborate well with others to create efficient, scalable, and user-friendly solutions that solve real-world problems.
                </p>
                <p>
                    Let’s work together to bring your ideas to life!
                </p>
            </div>
            <div id='services'>
                <Tilt options={{max: 45, scale: 1, speed: 450}}>
                        <div className='service-container'>
                            <div className='three-d-container'>
                                <CoinPrism />
                            </div>
                            <h3>Web Developer</h3>
                        </div>
                </Tilt>
                <Tilt options={{max: 45, scale: 1, speed: 450}}>
                    <div className='service-container'>
                        <div className='three-d-container'>
                                <MachineCogs />
                            </div>
                        <h3>Backend Developer</h3>
                    </div>    
                </Tilt>
            </div>
        </div>
    )
}

export default SectionWrapper(AboutMe)