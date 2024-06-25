import './skills.css'

const Skills = () => {
    return (
        <div className="skills-section">
            <h2 className="section-title">Skills</h2>
            <div className="category-container">
                <div className="category">
                    <h3 className="category-title">Programming</h3>
                    <div className="skills">
                        <p className="skill-name">Java</p>
                        <p className="skill-name">JavaScript</p>
                        <p className="skill-name">Python</p>
                    </div>
                </div>
                <div className="category">
                    <h3 className="category-title">Web Technologies</h3>
                    <div className="skills">
                        <p className="skill-name">HTML</p>
                        <p className="skill-name">CSS</p>
                        <p className="skill-name">FastAPI</p>
                        <p className="skill-name">React</p>
                        <p className='skill-name'>Typescript</p>
                    </div>
                </div>
                <div className="category">
                    <h3 className="category-title">Database</h3>
                    <div className="skills">
                        <p className="skill-name">MySQL</p>
                        <p className="skill-name">PostgreSql</p>
                    </div>
                </div>
                <div className="category">
                    <h3 className="category-title">Tools</h3>
                    <div className="skills">
                        <p className="skill-name">Eclipse</p>
                        <p className="skill-name">Github</p>
                        <p className="skill-name">VSCode</p>
                        <p className="skill-name">PyCharm</p>
                        <p className="skill-name">Jira</p>
                        <p className="skill-name">Figma</p>
                        <p className="skill-name">Notion</p>
                        <p className="skill-name">Slack</p>
                        <p className="skill-name">Android Studio</p>
                        <p className="skill-name">Prisma</p>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Skills