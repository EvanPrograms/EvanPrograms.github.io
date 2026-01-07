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
// import awsIcon from '../assets/aws.svg';
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
import zephyrIcon from '../assets/zephyrsplash.png';
import dockerIcon from '../assets/docker.svg';
import awsdevIcon from '../assets/awsdev.svg';
import mipIcon from '../assets/MIPpic.png';
import typeScriptIcon from '../assets/typescript.svg';
import orkaChatIcon from '../assets/orkachat.png';

import { useForm } from 'react-hook-form';

import emailjs from '@emailjs/browser';

const projects = [
  {
    id: 1,
    title: "OrkaChat",
    image: orkaChatIcon,
    description: "Serverless real-time messaging application (web + mobile) with end-to-end encrypted direct messaging (including group DMs), passphrase-based cross-device key recovery, and AI helper and summarization features via serverless APIs.",
    gitLink: "https://github.com/PROJXON/OrkaChat",
    projectLink: "https://app.orkachat.com/",
    projectLinkName: "OrkaChat"
  },
  {
    id: 2,
    title: "Zephyr Aero Leather E-commerce",
    image: zephyrIcon,
    description: "Professional E-Commerce site for a client using Next.js ISR, Headless Woocommerce backend on Lightsail, images on AWS S3 with Cloudfront, EC2 Instance, Elastic IP, Mobile Friendly",
    gitLink: "https://github.com/PROJXON/zephyr-aero-leather",
    projectLink: "https://zephyraeroleather.com/",
    projectLinkName: "ZephyrAeroLeather.com",
  },
  {
    id: 3,
    title: "PROJXON Website",
    image: projxonIcon,
    description: "Corporate site built with Next.js, utilizing SSR and ISR, and connected to a WordPress CMS. Incorporates both direct external API calls and an internal API for client-side components. Deployed on AWS.",
    gitLink: "https://github.com/PROJXON/ProjxonNext",
    projectLink: "https://www.projxon.com",
    projectLinkName: "Projxon.com"
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
    id: 5,
    title: "MIP Training Website",
    description: "Corporate site built using React and Node.js, hosted on AWS, implementing a backend API with Express.",
    image: mipIcon,
    gitLink: 'https://github.com/PROJXON/MIP-site',
    projectLink: 'https://momentuminternshipprogram.com/',
    projectLinkName: "MomentumInternshipProgram.com"
  },
  {
    id: 6,
    title: "Portfolio Website",
    description: "This website was made using React and Vite, hosted on GitHub pages, with react hook form and EmailJS, Google Analytics for traffic insights, with a custom domain name using AWS.",
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
        <p>Former commercial pilot with 1+ years of professional experience as a <strong>Full‑Stack Developer</strong> and <strong>AWS Certified Developer Associate</strong>. Hands‑on building, testing, deploying, and operating scalable applications using TypeScript, Next.js, React, Node.js, PostgreSQL, DynamoDB, Docker, and AWS, focused on performance, maintainability, and reliability in production.</p>
<p>At PROJXON, I lead a growing dev team, mentor juniors, and collaborate closely with stakeholders to ship high‑quality features and resolve issues proactively. I’m people‑oriented and love pairing, code reviews, and clear communication.</p>
<p>Outside of coding, I'm a highly active competitor in the ultraweight purple belt division of Brazilian Jiu Jitsu and a passionate West Coast Swing dancer.</p>
<p>Thank you for visiting! If you have any questions or opportunities, feel free to <a href="#contact">contact me</a>.</p>

        </div>
      </section>
      <section id ="experience" className="experience" data-aos="fade-up">
        <div className="title">
          Experience
        </div>
        <div className="introText">
          <div>
            <h2 className="roleTitle">Web Developer</h2>
            <p className="text-sm">PROJXON • Jan 2025 – Present</p>
          </div>
          <ul className="experience-list">
            <li>Built OrkaChat, a serverless real-time messaging application (web + mobile) with end-to-end encrypted direct messaging (including group DMs), passphrase-based cross-device key recovery, and AI helper and summarization features via serverless APIs.</li>
            <li>Led a team of 6+ developers through Agile sprints (planning, grooming, reviews), code reviews, and mentoring junior devs to ensure high-quality, maintainable code.</li>
            <li>Built a fully functional e-commerce website using Next.js and a headless WooCommerce backend.</li>
            <li>Migrated and deployed PROJXON's React/Node.js website to Next.js, implementing app routing, server-side rendering (SSR), and incremental static regeneration (ISR) to take advantage of Search Engine Optimization (SEO) and Google Analytics.</li>
            <li>Designed and deployed containerized applications using Docker with Nginx reverse proxying and production hardening; built serverless routing patterns with API Gateway.</li>
            <li>Automated infrastructure and deployments with Terraform, CloudFormation/Amplify IaC, and AWS CodePipeline, integrating automated testing with Jest and Playwright.</li>
            <li>Delivered multiple client web builds as needed, supporting rapid iteration and deployments.</li>
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
              <img 
                src={typeScriptIcon} 
                className="skillIcon" 
                alt="TypeScript Icon"
                loading="lazy"
                decoding="async"
              />
              <p>TypeScript</p>
            </div>
            <div className="skillBox">
              <img 
                src={javascriptIcon} 
                className="skillIcon" 
                alt="JavaScript Icon"
                loading="lazy"
                decoding="async"
              />
              <p>JavaScript</p>
            </div>
            <div className="skillBox">
              <img 
                src={pythonIcon} 
                className="skillIcon" 
                alt="Python Icon"
                loading="lazy"
                decoding="async"  
              />
              <p>Python</p>
            </div>
          </div>
        </div>
        <div className="skillCategory">
          <h3 className="subtitle">Front-End</h3>
          <div className="skillGrid">
            <div className="skillBox">
                <img 
                  src={reactIcon} 
                  className="skillIcon" 
                  alt="React Icon"
                  loading="lazy"
                  decoding="async"
                />
                <p>React</p>
            </div>
            <div className="skillBox">
              <img 
                src={nextjsIcon} 
                className="skillIcon" 
                alt="NextJS Icon"
                loading="lazy"
                decoding="async"
              />
              <p>Next.js</p>
            </div>
          </div>
        </div>
        <div className="skillCategory">
          <h3 className="subtitle">Styling & UI</h3>
          <div className="skillGrid">
            <div className="skillBox">
                <img src={tailwindcssIcon} className="skillIcon" alt="Tailwind Icon" loading="lazy" decoding="async"/>
                <p>Tailwind</p>
            </div>
            <div className="skillBox">
              <img src={cssIcon} className="skillIcon" alt="CSS Icon" loading="lazy" decoding="async"/>
              <p>CSS</p>
            </div>
            <div className="skillBox">
              <img src={htmlIcon} className="skillIcon" alt="HTML Icon" loading="lazy" decoding="async"/>
              <p>HTML</p>
            </div>
            <div className="skillBox">
              <img src={bootstrapIcon} className="skillIcon" alt="Bootstrap Icon" loading="lazy" decoding="async"/>
              <p>Bootstrap</p>
            </div>
          </div>
        </div>
        <div className="skillCategory">
          <h3 className="subtitle">Back-End and Databases</h3>
          <div className="skillGrid">
            <div className="skillBox">
                <img src={nodeIcon} 
                  className="skillIcon" 
                  alt="Node Icon" 
                  loading="lazy" 
                  decoding="async"
                />
                <p>Node.js</p>
            </div>
            <div className="skillBox">
                <img 
                  src={expressIcon} 
                  className="skillIcon" 
                  alt="Express Icon" 
                  loading="lazy" 
                  decoding="async"/>
                <p>Express</p>
            </div>
            <div className="skillBox">
              <img 
                src={postgresqlIcon} 
                className="skillIcon" 
                alt="PostgreSQL Icon" 
                loading="lazy" 
                decoding="async"
              />
              <p>PostgreSQL</p>
            </div>
            <div className="skillBox">
              <img 
                src={graphqlIcon} 
                className="skillIcon" 
                alt="GraphQL Icon" 
                loading="lazy" 
                decoding="async"
              />
              <p>GraphQL</p>
            </div>
            <div className="skillBox">
              <img 
                src={mongodbIcon} 
                className="skillIcon" 
                alt="MongoDB Icon" 
                loading="lazy" 
                decoding="async"
              />
              <p>MongoDB</p>
            </div>
            <div className="skillBox">
              <img 
                src={reduxIcon} 
                className="skillIcon" 
                alt="Redux Icon" 
                loading="lazy" 
                decoding="async"
              />
              <p>Redux</p>
            </div>
          </div>
        </div>
        <div className="skillCategory">
          <h3 className="subtitle">Other Tech Skills</h3>
          <div className="skillGrid">
            <div className="skillBox">
                <img 
                  src={awsdevIcon} 
                  className="skillIcon" 
                  alt="AWS Icon" 
                  loading="lazy" 
                  decoding="async"
                />
                <p>AWS</p>
            </div>
            <div className="skillBox">
              <img 
                src={githubIcon} 
                className="skillIcon" 
                alt="Github Icon" 
                loading="lazy" 
                decoding="async"
              />
              <p>Github</p>
            </div>
            <div className="skillBox">
              <br /><br />
              <img 
                src={stripeIcon} 
                className="skillIcon" 
                alt="Stripe Icon" 
                loading="lazy" 
                decoding="async"
              />
              <p>Stripe</p>
            </div>
            <div className="skillBox">
              <img 
                src={wordpressIcon} 
                className="skillIcon" 
                alt="Wordpress Icon" 
                loading="lazy" 
                decoding="async"
              />
              <p>WordPress</p>
            </div>
            <div className="skillBox">
              <img 
                src={dockerIcon} 
                className="skillIcon" 
                alt="Wordpress Icon" 
                loading="lazy" 
                decoding="async"
              />
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
              <img 
                src={project.image} 
                alt={project.title} 
                className="projectImage" 
                loading="lazy"
                decoding="async"
              />
              <div className="projectContent">
                <h3 className="projectTitle">{project.title}</h3>
                <p className="projectDescription">{project.description}</p>
                <div className="projectLinks">
                  <a href={project.gitLink} className="projectLink" target="_blank" rel="noopener noreferrer" title={project.gitLink}>
                    Github
                  </a>
                  <a href={project.projectLink} className="projectLink" target="_blank" rel="noopener noreferrer" title={project.projectLinkName}>
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
                <img src={emailIcon} alt="Email Icon" loading="lazy" decoding="async"/>
              </div>
              <a href="https://mail.google.com/mail/u/0/?fs=1&tf=cm&to=eperry2688@gmail.com" >Eperry2688@gmail.com</a>
            </div>
            <div className="contact">
              <div className="contactImgContainer">
                <img src={githubIcon} className="contactGithubIcon" alt="GitHub Icon"  loading="lazy" decoding="async"/>
              </div>
              <a href="https://github.com/EvanPrograms">GitHub</a>
            </div>
            <div className="contact">
              <div className="contactImgContainer">
                <img src={linkedInIcon} alt="LinkedIn Icon" loading="lazy" decoding="async"/>
              </div>
              <a href="https://www.linkedin.com/in/evanprograms/" >LinkedIn</a>
            </div>
            <div className="contact">
              <div className="contactImgContainer">
                <img src={documentIcon} alt="Resume Icon" loading="lazy" decoding="async"/>
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