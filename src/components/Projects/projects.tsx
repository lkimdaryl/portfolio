import './projects.css'
import Project from './project.tsx'
import MVP from '../../assets/MVP_display.png'
import FoodJournal from '../../assets/foodJournal.png'
import MyPortfolio from '../../assets/myPortfolio.png'
import TranslationApp from '../../assets/translationApp.png'
import MachineLearning from '../../assets/machineLearning.png'

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

    const FoodJournalTech = ["HTML", "CSS", "Python", "FastAPI", "React", "Vite", "JavaScript", "MySQL", "SQLAlchemy"]
    
    const MyPortfolioDetails: React.FC = () => {
        return (
            <p>
                A personal portfolio website that showcases my projects and skills.
                Built with React.
            </p>
        );
      };

    const MyPortfolioTech = ["HTML", "CSS", "React", "Vite", "TypeScript", "JavaScript"]

    const TranslationAppDetails: React.FC = () => {
        return (
            <p>
                A mobile app that allows users to translate from one language to another.
                Has features such as speech to text and vice versa.
            </p>
        );
      };

    const TranslationAppTech = ["React", "React Native", "Expo", "TypeScript", "JavaScript"]

    const MLDetails: React.FC = () => {
        return (
            <p>
                A comprehensive machine learning endeavor that involves data preprocessing, 
                model training, and performance evaluation. It showcases proficiency in Python 
                and relevant libraries like NumPy, pandas, and scikit-learn, with a well-organized 
                repository featuring scripts and datasets. The project includes various machine 
                learning algorithms, thoroughly evaluated for accuracy, precision, and recall, 
                demonstrating an effective collaborative workflow using GitHub.
            </p>
        );
      };

    const MLTech = ["Python", "Numpy", "pandas", "scikit-learn", "Tensorflow"]

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
                    image={TranslationApp} 
                    alt="Translation App image" 
                    projectName="Translation App" 
                    projectDetails={<TranslationAppDetails />} 
                    sourceAddress={'https://github.com/lkimdaryl/translator-app'} 
                    liveDemoAddress={''} 
                    technologies={TranslationAppTech} />
                <Project 
                    image={MachineLearning} 
                    alt="Machine Learning image" 
                    projectName="Machine Learning Study" 
                    projectDetails={<MLDetails />} 
                    sourceAddress={'https://github.com/lkimdaryl/CSE151AProject'} 
                    liveDemoAddress={''} 
                    technologies={MLTech} />
                <Project 
                    image={MyPortfolio} 
                    alt="MyPortfolio image" 
                    projectName="Kim's Portfolio" 
                    projectDetails={<MyPortfolioDetails />} 
                    sourceAddress={'https://github.com/lkimdaryl/portfolio'} 
                    liveDemoAddress={'https://lkimdaryl.netlify.app/'} 
                    technologies={MyPortfolioTech} />
            </div>
            {/* <button id="view-all-btn">View More Projects</button> */}
        </div>
    )
}

export default Projects