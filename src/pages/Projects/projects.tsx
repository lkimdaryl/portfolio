import './projects.css'
import Project from './project.tsx'
import projects from './projects.json'
import SectionWrapper from '../../components/hoc/section-wrapper'


const Projects = () => {

    return (
        <div className="project-section" id="projects">
            <div id='project-intro'>
                <h4>What I have done so far</h4>
                <h1>Projects.</h1>
            </div>
            <div className='projects-container'>
                {Object.entries(projects).map(([key, value]) => (
                    <Project 
                        image={value.image} 
                        alt={value.alt} 
                        projectName={key} 
                        projectDetails={value.description} 
                        sourceAddress={value.sourceAddress} 
                        liveDemoAddress={value.liveDemoAddress} 
                        apiDocumentationAddress={value.apiDocumentationAddress}
                        technologies={value.technologies}
                        siteOverviewAddress={value.siteOverviewAddress} />
                ))}
            </div>
        </div>
    )
}

export default SectionWrapper(Projects)