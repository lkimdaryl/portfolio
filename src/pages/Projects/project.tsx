import { Tilt } from 'react-tilt'

interface ProjectProps {
    image: string;
    alt: string;
    projectName: string;
    projectDetails: string;
    sourceAddress: string;
    liveDemoAddress: string;
    technologies?: string[];
}

const project = ({ image, alt, projectName, projectDetails, sourceAddress, liveDemoAddress, technologies}: ProjectProps) => {

    const handleSourceClick = () => {
        window.open(sourceAddress, '_blank');
    };

    const handleLiveDemoClick = () => {
        window.open(liveDemoAddress, '_blank');
    };
    

    return (
        <div className="project">
            <div className="project-content">
                <Tilt options={{max: 45, scale: 1, speed: 450}}>
                    <img className="project-image" src={image} alt={alt} />
                </Tilt>
                <div className="project-details">
                    <div className='project-name'><strong>{projectName}</strong></div>
                    <br/>
                    <p>{projectDetails}</p>
                    <br/>
                    {technologies && (
                        <div className="technologies">
                            <p>Technologies used:</p>
                            {technologies.map((tech, index) => (
                                // <span key={index} className="technology-tag">{tech}</span>
                                <div className='tech-container'>
                                    <Tilt options={{max: 45, scale: 1, speed: 450}}>
                                        <img key={index} src={tech} alt={tech} className='technology-tag'/>
                                    </Tilt>
                                    <div className="tech-name">{tech.split('.')[0]}</div>
                                </div>
                            ))}
                        </div>
                    )}
                    <br/><br/>
                    <div className="project-buttons">
                        <button onClick={handleSourceClick}>Source</button>
                        {liveDemoAddress && <button onClick={handleLiveDemoClick}>Live Demo</button>}
                    </div>    
                </div>
            </div>
        </div>
    )
}

export default project