import './body.css'
// import { ReactComponent as PythonIcon } from '../assets/python.svg';
import pythonIcon from '../assets/python.svg'
import javascriptIcon from '../assets/javascript.svg'
import cssIcon from '../assets/css-3.svg'
import reactIcon from '../assets/react.svg'
import htmlIcon from '../assets/html-5.svg'
import nodeIcon from '../assets/nodejs-icon.svg'
import postgresqlIcon from '../assets/postgresql.svg'
import graphqlIcon from '../assets/graphql.svg'
import mongodbIcon from '../assets/mongodb-icon.svg'
import awsIcon from '../assets/aws.svg'
import githubIcon from '../assets/github-icon.svg'
import stripeIcon from '../assets/stripe.svg'
import reduxIcon from '../assets/redux.svg'
import bootstrapIcon from '../assets/bootstrap.svg'
import ecommerceIcon from '../assets/ecommerce.png'
import portfolioIcon from '../assets/portfolio.png'

const projects = [
  {
    id: 1,
    title: "E-commerce Website",
    description: "Functional e-commerce website with Guest and Logged-in user functionality, payments using Stripe, GraphQL and PostgreSQL hosted on AWS",
    image: ecommerceIcon,
    link: 'https://github.com/EvanPrograms/ecommerce'
  },
  {
    id: 2,
    title: "Portfolio Website",
    description: "This portfolio website made using React",
    image: portfolioIcon,
    link: 'https://github.com/EvanPrograms/portfolio',
  }
]

const Body = () => {
  return(
    <div className="body">
      <section className="about">
        <div className="title">
          About Me
        </div>
        <div className="body">
         <p>Since I was a kid, I have been interested in working, playing, and creating on computers. When I was 5, my grandpa gave my family his old PC running Windows 3.1, which sparked my passion for computers, video games, and the internet.</p>
         <p>In 2013, I enrolled in Lambton College's "Computer Network Specialist" course to learn about system repair, network setup, Cisco equipment, and computer/server maintenance. Later, I pursued further education by enrolling in the "Computer Programmer" course, where I learned about HTML5/CSS3, JavaScript, Python, SQL, and self-taught Lua and Bash.</p>
         <p>I have built a good reputation and completed several programming projects, including designing and coding a website for a local business and creating a local password generator.</p>
         <p>In my free time, I enjoy playing video games, mountain biking, watching action or sci-fi movies, growing peppers, and experimenting with various Linux distributions.</p>
         <p>Thank you for learning more about me. If you have any questions, feel free to 
            <a href="#contact"> contact me.</a>
         </p>

        </div>
      </section>
      <section className="skills">
        <div className="title">
          My Skills
        </div>
        <div className="skillCategory">
          <h3 className="subtitle">Programming Languages</h3>
          <div className="skillGrid">
            <div className="skillBox">
              <img src={javascriptIcon} className="skillIcon" alt="Javascript Icon"/>
              <p>Javascript</p>
            </div>
            <div className="skillBox">
              <img src={pythonIcon} className="skillIcon" alt="Python Icon"/>
              <p>Python</p>
            </div>
          </div>
        </div>
        <div className="skillCategory">
          <h3 className="subtitle">Front-End</h3>
          <div className="skillGrid">
            <div className="skillBox">
                <img src={reactIcon} className="skillIcon" alt="React Icon"/>
                <p>React</p>
            </div>
            <div className="skillBox">
              <img src={cssIcon} className="skillIcon" alt="CSS Icon"/>
              <p>CSS</p>
            </div>
            <div className="skillBox">
              <img src={htmlIcon} className="skillIcon" alt="HTML Icon"/>
              <p>HTML</p>
            </div>
            <div className="skillBox">
              <img src={bootstrapIcon} className="skillIcon" alt="Bootstrap Icon"/>
              <p>Bootstrap</p>
            </div>
          </div>
        </div>
        <div className="skillCategory">
          <h3 className="subtitle">Back-End and Databases</h3>
          <div className="skillGrid">
            <div className="skillBox">
                <img src={nodeIcon} className="skillIcon" alt="Node Icon"/>
                <p>Node.js</p>
            </div>
            <div className="skillBox">
              <img src={postgresqlIcon} className="skillIcon" alt="PostgreSQL Icon"/>
              <p>PostgreSQL</p>
            </div>
            <div className="skillBox">
              <img src={graphqlIcon} className="skillIcon" alt="GraphQL Icon"/>
              <p>GraphQL</p>
            </div>
            <div className="skillBox">
              <img src={mongodbIcon} className="skillIcon" alt="MongoDB Icon"/>
              <p>MongoDB</p>
            </div>
            <div className="skillBox">
              <br /><br />
              <img src={stripeIcon} className="skillIcon" alt="Stripe Icon"/>
              <p>Stripe</p>
            </div>
            <div className="skillBox">
              <img src={reduxIcon} className="skillIcon" alt="Redux Icon"/>
              <p>Redux</p>
            </div>
          </div>
        </div>
        <div className="skillCategory">
          <h3 className="subtitle">Other Tech Skills</h3>
          <div className="skillGrid">
            <div className="skillBox">
                <img src={awsIcon} className="skillIcon" alt="AWS Icon"/>
                <p>AWS</p>
            </div>
            <div className="skillBox">
              <img src={githubIcon} className="skillIcon" alt="Github Icon"/>
              <p>Github</p>
            </div>
          </div>
        </div>
      </section>
      <section className="projects">
        <div className="title">
            My Projects
        </div>
        <div className="projectGrid">
          {projects.map((project) => (
            <div key={project.id} className="projectBox">
              <img src={project.image} alt={project.title} className="projectImage" />
              <div className="projectContent">
                <h3 className="projectTitle">{project.title}</h3>
                <p className="projectDescription">{project.description}</p>
                <a href={project.link} className="projectLink" target="_blank" rel="noopener noreferrer">
                  Github
                </a>
                <a href="www.passionchocolates.com" className="projectLink" target="_blank" rel="noopener noreferrer">
                  Passionchocolates.com
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}

export default Body;