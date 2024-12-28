import './home.css'
import Hero from '../../components/Hero/hero'
import { useEffect, useState } from 'react';

export default function Home() {

    const [isSceneLoaded, setIsSceneLoaded] = useState<boolean>(false);

    useEffect(() => {
        const timer = setTimeout(() => {
          setIsSceneLoaded(true);
        }, 500);
    
        // Cleanup timer on component unmount
        return () => clearTimeout(timer);
      }, []); 

    return (
        <div id='main-container'>
            {isSceneLoaded? (
                <Hero />  
            ):(
                <div>&nbsp;</div>
            )}
        </div>
    )
}