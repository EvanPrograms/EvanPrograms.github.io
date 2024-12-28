import React, { useState } from 'react';
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
import emailIcon from '../assets/email.svg';
import {
  TextField,
  Button
} from '@mui/material'

import { useForm } from 'react-hook-form';

import { HashLink as Link } from 'react-router-hash-link';

import emailjs from '@emailjs/browser';

const projects = [
  {
    id: 1,
    title: "E-commerce Website",
    description: "Functional e-commerce website with Guest and Logged-in user functionality, payments using Stripe, GraphQL and PostgreSQL hosted on AWS.",
    image: ecommerceIcon,
    gitLink: 'https://github.com/EvanPrograms/ecommerce',
    projectLink: 'https://www.passionchocolates.com',
    projectLinkName: "PassionChocolates.com"
  },
  {
    id: 2,
    title: "Portfolio Website",
    description: "This portfolio website made using React and Vite, hosted on GitHub pages, with react hook form and EmailJS, with a custom domain name using AWS.",
    image: portfolioIcon,
    gitLink: 'https://github.com/EvanPrograms/EvanPrograms.github.io',
    projectLink: 'evanprograms.com',
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
      <section id ="about" className="about">
        <div className="title">
          About Me
        </div>
        <div className="introText">
         <p>I’m Evan, a web developer with a passion for technology and problem-solving. My interest in tech began at a young age when I built computers and explored hardware, which naturally sparked my curiosity about programming.</p>
         <p>Two years ago, I decided to dive deeper into coding to better understand how things work under the hood. I started with Python and then expanded to JavaScript and React, focusing on web development and mobile applications — tools people rely on every day.</p>
         <p>I’m also a commercial pilot transitioning into tech to pursue my love for programming and to achieve a better work-life balance. Outside of coding, I’m a purple belt in jiu jitsu and a passionate swing dancer.</p>
         <p>Thank you for taking the time to learn more about me! If you have any questions or opportunities, feel free to
            <a href="#contact"> contact me.</a>
         </p>

        </div>
      </section>
      <section id="skills" className="skills">
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
      <section id="project" className="projects">
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
      <section id="contact" className="contactForm">
        <h2 className="title">Contact me</h2>
        <div className="contactContainer">
          <form onSubmit={handleSubmit(onSubmit)} className="form">
            {/* register your input into the hook by invoking the "register" function */}
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
              <a href="https://mail.google.com/mail/u/0/?fs=1&tf=cm&to=eperry2688@gmail.com" >eperry2688@gmail.com</a>
            </div>
            <div className="contact">
              <div className="contactImgContainer">
                <img src={githubIcon} className="contactGithubIcon"/>
              </div>
              <a href="https://github.com/EvanPrograms">github.com/EvanPrograms</a>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Body;