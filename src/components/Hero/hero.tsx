import './hero.css'
import SectionWrapper from '../hoc/section-wrapper'
import { useEffect, useState } from 'react';

const Hero = () => {
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth < 976) {
                setIsMobile(true);
            } else {
                setIsMobile(false);
            }
        };
        window.addEventListener('resize', handleResize);
        handleResize();
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return (
        <div id='hero-wrapper'>
            <div id='intro'>
                <h4>Software Developer</h4>
                <h1>Hi! I'm <span>Kim.</span></h1>
                {!isMobile && <h2>I build cool experiences</h2>}
            </div>
            <div id='img-slogan'>
                <img src='profile_pic.png' alt='profile picture'/>
                {isMobile && <h2>I build cool experiences</h2>}
            </div>  
        </div>
    )
}

export default SectionWrapper(Hero)