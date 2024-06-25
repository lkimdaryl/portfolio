interface ProjectProps {
    image: string;
    alt: string;
    projectName: string;
    projectDetails: any;
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
                <img src={image} alt={alt} />
                <div className="project-details">
                    <div><strong>{projectName}</strong></div>
                    <br/>
                    <div>{projectDetails}</div>
                    <br/>
                    {technologies && (
                        <div className="technologies">
                            <p>Technologies used:</p>
                            {technologies.map((tech, index) => (
                                <span key={index} className="technology-tag">{tech}</span>
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
            <div className="project-name"><strong>{projectName}</strong></div>
        </div>
    )
}

export default project