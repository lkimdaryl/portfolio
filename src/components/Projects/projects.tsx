import './projects.css'
import Project from './project.tsx'
import MVP from '../../assets/MVP_display.png'
import FoodJournal from '../../assets/foodJournal.png'
import MyPortfolio from '../../assets/myPortfolio.png'

const Projects = () => {    
    const MVPDetails: React.FC = () => {
        return (
            <p>
                Provides a space for users to explore and share their MVP
                (Minimum Viable Product) ideas.
                <br/><br/>
                Offers essential social networking features, including user registration, login,
                profile viewing, leaderboards, and MVP updates.
                <br/><br/>
                Utilizes JWT token to authenticate and authorize
                users for security.
            </p>
        );
      };

    const MVPTech = ["JavaScript", "HTML", "CSS", "Python", "FastAPI"]

    const FoodJournalDetails: React.FC = () => {
        return (
            <p>
                A community-driven platform for food enthusiasts. 
                It allows users to review meals, share culinary experiences, and discover new recipes. 
                Powered by AI, Food Journal provides personalized recipe recommendations and connects 
                users with top recipe sources.
            </p>
        );
      };

    const FoodJournalTech = ["HTML", "CSS", "Python", "FastAPI", "React", "Vite", "MySQL", "SQLAlchemy"]
    
    const MyPortfolioDetails: React.FC = () => {
        return (
            <p>
                A personal portfolio website that showcases my projects and skills.
                Built with React.
            </p>
        );
      };

    const MyPortfolioTech = ["HTML", "CSS", "React", "Vite", "TypeScript"]

    return (
        <div className="project-section" id="projects">
            <h2 className="section-title"> Projects</h2>
            <div className='projects-container'>
                <Project 
                    image={FoodJournal} 
                    alt="Food Journal image" 
                    projectName="Food Journal" 
                    projectDetails={<FoodJournalDetails />} 
                    sourceAddress={'https://github.com/lkimdaryl/FoodJournal2.0'} 
                    liveDemoAddress={'https://foodjournal2.netlify.app'} 
                    technologies={FoodJournalTech} />
                <Project 
                    image={MVP} 
                    alt="Minimum Viable Product image" 
                    projectName="MVP Ideahub" 
                    projectDetails={<MVPDetails />} 
                    sourceAddress={'https://github.com/lkimdaryl/MVPIdeation'} 
                    liveDemoAddress={''} 
                    technologies={MVPTech} />
                <Project 
                    image={MyPortfolio} 
                    alt="MyPortfolio image" 
                    projectName="Kim's Portfolio" 
                    projectDetails={<MyPortfolioDetails />} 
                    sourceAddress={'https://github.com/lkimdaryl/cse134b_hw4'} 
                    liveDemoAddress={'https://glittering-gumdrop-b92e12.netlify.app/'} 
                    technologies={MyPortfolioTech} />
            </div>
            {/* <button id="view-all-btn">View More Projects</button> */}
        </div>
    )
}

export default Projects