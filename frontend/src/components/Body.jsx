import React, { useState, useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './body.css';
import pythonIcon from '../assets/python.svg';
import javascriptIcon from '../assets/javascript.svg';
import cssIcon from '../assets/css-3.svg';
import reactIcon from '../assets/react.svg';
import htmlIcon from '../assets/html-5.svg';
import nodeIcon from '../assets/nodejs-icon.svg';
import postgresqlIcon from '../assets/postgresql.svg';
import graphqlIcon from '../assets/graphql.svg';
import mongodbIcon from '../assets/mongodb-icon.svg';
import awsIcon from '../assets/aws.svg';
import githubIcon from '../assets/github-icon.svg';
import stripeIcon from '../assets/stripe.svg';
import reduxIcon from '../assets/redux.svg';
import bootstrapIcon from '../assets/bootstrap.svg';
import ecommerceIcon from '../assets/ecommerce.png';
import portfolioIcon from '../assets/portfolio.png';
import emailIcon from '../assets/email.svg';
import linkedInIcon from '../assets/linkedin-icon.svg';
import documentIcon from '../assets/document.svg';
import nextjsIcon from '../assets/nextjs-icon.svg';
import tailwindcssIcon from '../assets/tailwindcss-icon.svg';
import expressIcon from '../assets/expressjs-icon.svg';
import wordpressIcon from '../assets/wordpress-icon.svg';
import projxonIcon from '../assets/projxonsite.png'
import phelanIcon from '../assets/phelansite.png'
import constructionIcon from '../assets/construction.webp';
import dockerIcon from '../assets/docker.svg';

import { useForm } from 'react-hook-form';

import emailjs from '@emailjs/browser';

const projects = [
  {
    id: 1,
    title: "PROJXON Website",
    image: projxonIcon, // replace with actual image path
    description: "Corporate site built with Next.js, utilizing SSR and ISR, and connected to a WordPress CMS. Incorporates both direct external API calls and an internal API for client-side components. Deployed on AWS using EC2 and an Elastic IP, with DNS routing via Route 53.",
    gitLink: "https://github.com/PROJXON/ProjxonNext",
    projectLink: "https://www.projxon.com",
    projectLinkName: "Projxon.com"
  },
  {
    id: 2,
    title: "Phelan Focus Consulting",
    image: phelanIcon, // replace with actual image path
    description: "Consulting website built with Next.js. Designed and developed a responsive layout with branding. Live preview via GitHub Pages.",
    gitLink: "https://github.com/PROJXON/phelanfocus",
    projectLink: "https://projxon.github.io/PhelanFocus/",
    projectLinkName: "Live Preview"
  },
  {
    id: 3,
    title: "Zephyr Aero Leather E-commerce",
    image: constructionIcon,
    description: "E-commerce website built using Next.js and utilizing a headless WooCommerce backend for client CMS with Guest and Logged-in User functionality.",
    gitLink: "https://github.com/PROJXON/zephyr-aero-leather",
    projectLink: "",
    projectLinkName: "Under Construction",
  },
  {
    id: 4,
    title: "E-commerce Website",
    description: "Functional e-commerce website with Guest and Logged-in user functionality, payments using Stripe, GraphQL and PostgreSQL hosted on AWS.",
    image: ecommerceIcon,
    gitLink: 'https://github.com/EvanPrograms/ecommerce',
    projectLink: 'https://www.passionchocolates.com',
    projectLinkName: "PassionChocolates.com"
  },
  {
    id: 64,
    title: "Portfolio Website",
    description: "This website was made using React and Vite, hosted on GitHub pages, with react hook form and EmailJS, with a custom domain name using AWS.",
    image: portfolioIcon,
    gitLink: 'https://github.com/EvanPrograms/EvanPrograms.github.io',
    projectLink: 'https://evanprograms.com',
    projectLinkName: 'EvanPrograms.com'
  }
]

const PUBLIC_KEY = import.meta.env.VITE_PUBLIC_KEY
const SERVICE_ID = import.meta.env.VITE_SERVICE_ID
const MESSAGE_ID = import.meta.env.VITE_MESSAGE_ID
const NOTIFICATION_ID = import.meta.env.VITE_NOTIFICATION_ID

const Body = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
    });
  }, []);
  

  const onSubmit = (data) => {
    console.log(data);
    emailjs
      .send(SERVICE_ID, MESSAGE_ID, data, PUBLIC_KEY)
      .then(
        (response) => {
          console.log('Message sent!', response.status, response.text);
        },
        (error) => {
          console.error('Message sent failed...', error);
        }
      )
    emailjs
      .send(
        SERVICE_ID, 
        NOTIFICATION_ID,
        {
          name: data.name,
          email: data.email
        },
        PUBLIC_KEY
      )
      .then(
        (response) => {
          console.log('Notification Sent!', response.status, response.text);
          alert('Your message has been sent successfully!');
          reset()
        }
      ),
      (error) => {
        console.error('Notification send failed...', error);
        alert('There was an error sending your message. Please try again');
      }
  }

  


  return(
    <div className="body">
      <section id ="about" className="about" data-aos="fade-up">
        <div className="title">
          About Me
        </div>
        <div className="introText">
         <p>I’m Evan, a Full Stack Web Developer with a passion for technology and problem-solving. I’m a commercial pilot transitioning into tech, applying the same methodical approach of reading documentation and using learning and teaching strategies from aviation in programming.</p>
         <p>Two years ago, I started with Python and then expanded to JavaScript and React, focusing on web development and mobile applications. After self learning and building several projects, I joined PROJXON as a web developer intern and was quickly promoted to <strong>Senior Web Developer</strong> - recognized for going above and beyond expectations, proactively solving problems before they surfaced, and consistently finding solutions through independent research. I now lead a team of developers and continue to expand my technical skill set.</p>
         <p>I strive to deeply understand the technologies I work with, such as React hooks, JavaScript Event Loop, and in Next.js, concepts like App Routing, dynamic versus static page generation, and internal versus external API calls, as well as professional Github contribution standards and production-grade deployment on AWS.</p>
         <p>Outside of coding, I'm a highly active competitor in the ultraweight purple belt division of Brazilian Jiu Jitsu, and a passionate West Coast Swing dancer.</p>
         <p>Thank you for taking the time to learn more about me! If you have any questions or opportunities, feel free to
            <a href="#contact"> contact me.</a>
         </p>

        </div>
      </section>
      <section id ="experience" className="experience" data-aos="fade-up">
        <div className="title">
          Experience
        </div>
        <div className="introText">
          <div>
            <h3 className="text-xl font-semibold">Senior Web Developer</h3>
            <p className="text-sm text-gray-500">PROJXON • Jan 2025 – Present</p>
          </div>
          <ul className="experience-list">
            <li>Lead a team of 6+ web developers, managing workflows, code reviews, and mentoring junior devs to ensure high-quality, maintainable code.</li>
            <li>Built a fully functional e-commerce website using Next.js and a headless WooCommerce backend.</li>
            <li>Migrated and deployed PROJXON's full-stack React/Node.js website to Next.js, implementing app routing, server-side rendering (SSR), and incremental static regeneration (ISR) to take advantage of Search Engine Optimization (SEO) and Google Analytics.</li>
            <li>Implemented a custom WordPress-based Content Management System, allowing PROJXON management to securely log in via a hidden admin route and manage client testimonials, including image uploads. Integrated JWT authentication and cookies for session handling.</li>
            <li>Deployed and managed multiple live websites using AWS, with hands-on experience in EC2, Elastic IPs, S3, CloudFront, Lightsail, and Route 53.</li>
            <li>Streamlined GitHub version control practices across the team, promoting efficient collaboration, branch management, code review, and issue tracking.</li>
            <li>Debug and resolve production-level issues proactively by identifying potential problem areas before they escalate.</li>
            <li>Research, adopt, and teach emerging technologies to keep the team current with modern development practices.</li>
          </ul>
        </div>
      </section>
      <section id="skills" className="skills" data-aos="fade-up">
        <div className="title">
          My Skills
        </div>
        <div className="skillCategory">
          <h3 className="subtitle">Programming Languages</h3>
          <div className="skillGrid">
            <div className="skillBox">
              <img src={javascriptIcon} className="skillIcon" alt="Javascript Icon"/>
              <p>JavaScript</p>
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
              <img src={nextjsIcon} className="skillIcon" alt="NextJS Icon"/>
              <p>NextJS</p>
            </div>
          </div>
        </div>
        <div className="skillCategory">
          <h3 className="subtitle">Styling & UI</h3>
          <div className="skillGrid">
            <div className="skillBox">
                <img src={tailwindcssIcon} className="skillIcon" alt="Tailwind Icon"/>
                <p>Tailwind</p>
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
                <img src={expressIcon} className="skillIcon" alt="Express Icon"/>
                <p>Express</p>
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
            <div className="skillBox">
              <br /><br />
              <img src={stripeIcon} className="skillIcon" alt="Stripe Icon"/>
              <p>Stripe</p>
            </div>
            <div className="skillBox">
              <img src={wordpressIcon} className="skillIcon" alt="Wordpress Icon"/>
              <p>WordPress</p>
            </div>
            <div className="skillBox">
              <img src={dockerIcon} className="skillIcon" alt="Wordpress Icon"/>
              <p>Docker</p>
            </div>
          </div>
        </div>
      </section>
      <section id="projects" className="projects" data-aos="fade-up">
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
                <div className="projectLinks">
                  <a href={project.gitLink} className="projectLink" target="_blank" rel="noopener noreferrer">
                    Github
                  </a>
                  <a href={project.projectLink} className="projectLink" target="_blank" rel="noopener noreferrer">
                    {project.projectLinkName}
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
      <section id="contact" className="contactForm" data-aos="fade-up">
        <h2 className="title">Contact me</h2>
        <div className="contactContainer">
          <form onSubmit={handleSubmit(onSubmit)} className="form">
            <div className="inputContainer">
              <label htmlFor="name">Name</label>
              <input 
                {...register("name", { required: true })} 
                placeholder="Name"
                className="formInput"
                />
              {errors.name && <span>Name is required</span>}
            </div>
            <div className="inputContainer">
              <label htmlFor="email">Email</label>
              <input 
                {...register("email", { required: true, pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/})} 
                placeholder="Email"
                className="formInput"
                />
              {errors.email && <span>Please provide a valid email</span>}
            </div>
            <div className="inputContainer">
              <label htmlFor="message">Your Message</label>
              <textarea 
                {...register("message", { required: true })} 
                placeholder="Message"
                className="formTextarea"
                />
                {errors.message && <span>Message is required</span>}
            </div>
            <input type="submit" className="formButton" value="Submit"/>
          </form>
          <div className="contactInfo">
            <div className="contact">
              <div className="contactImgContainer">
                <img src={emailIcon} />
              </div>
              <a href="https://mail.google.com/mail/u/0/?fs=1&tf=cm&to=eperry2688@gmail.com" >Eperry2688@gmail.com</a>
            </div>
            <div className="contact">
              <div className="contactImgContainer">
                <img src={githubIcon} className="contactGithubIcon"/>
              </div>
              <a href="https://github.com/EvanPrograms">Github.com/EvanPrograms</a>
            </div>
            <div className="contact">
              <div className="contactImgContainer">
                <img src={linkedInIcon} />
              </div>
              <a href="https://www.linkedin.com/in/evanprograms/" >Linkedin.com/in/EvanPrograms/</a>
            </div>
            <div className="contact">
              <div className="contactImgContainer">
                <img src={documentIcon} />
              </div>
              <a href="/Evan_Perry_Resume.pdf" >Resume</a>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Body;