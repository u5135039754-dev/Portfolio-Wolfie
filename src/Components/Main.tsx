import me from '../images/photo_2026-04-14_08-31-52.jpg';
import animationGit from '../Animations/Github/github.svg';
import animationInsta from '../Animations/Instagram/instagram.svg';
import animationLinked from '../Animations/Linkedin/linkedin.svg';
import landingPage from '../images/Projects/Screenshot 2026-04-15 081443.png';
import landingPage1260 from '../images/Projects/MyBike (1260).png';
import CrazyBaby from '../images/Projects/Screenshot 2026-04-15 081112.png';
import CrazyBaby1260 from '../images/Projects/CrazyBaby.png';
import js from '../images/IT lang/js.png'
import css from '../images/IT lang/css-3.png'
import sass from '../images/IT lang/sass.png'
import html from '../images/IT lang/html-5.png'
import vue from '../images/IT lang/vuejs.png'
import typescript from '../images/IT lang/typescript.png'
import git from '../images/IT lang/git.png'
import npm from '../images/IT lang/npm.png'
import figma from '../images/IT lang/figma.png'
import github from '../images/IT lang/github2.png'
import node from '../images/IT lang/node.png'
import react from '../images/IT lang/react.png'
import { useState } from 'react';

type Skill = {
  name: string;
  image: string;
  text: string;
}


const skills1 = [
  {
    image: html,
    "Name": 'HTML5',
    "Text": 'HTML is the most basic building block of the Web. It defines the meaning and structure of web content.'
  },
  {
    image: css,
    "Name": 'CSS3',
    "Text": 'CSS (Cascading Style Sheets) is used to style and format web pages, controlling layout, colors, fonts, and spacing.'
  },
  {
    image: sass,
    "Name": 'SASS',
    "Text": 'Sass is a CSS preprocessor that adds features like variables, nesting, and mixins to make writing and managing styles easier.'
  },
  { 
    image: vue,
    "Name": 'Vue.js',
    "Text": 'An approachable, performant and versatile framework for building web user interfaces.'
  },
]
const skills2 = [
  {
    image: npm,
    "Name": 'NPM',
    "Text": 'NPM (Node Package Manager) is a tool used to install, manage, and share JavaScript packages and libraries in Node.js projects.'
  },
  {
    image: figma,
    "Name": 'Figma',
    "Text": 'Figma is a web-based design tool used to create UI/UX designs, wireframes, and prototypes collaboratively in real time.'
  },
  {
    image: react,
    "Name": 'React.js',
    "Text": 'React is a JavaScript library for building user interfaces using reusable components and state management.'
  },
  {
    image: js,
    "Name": 'JavaScript',
    "Text": 'JavaScript is used to make web pages interactive, like handling clicks, animations, form validation & dynamic content updates.'
  }
]
const skills3 = [
  {
    image: typescript,
    "Name": 'TypeScript',
    "Text": 'TypeScript is a superset of JavaScript that adds static typing, helping catch errors early and making code easier to maintain.'
  },
  {
    image: git,
    "Name": 'Git',
    "Text": 'Git is a version control system used to track changes in code, collaborate with others, and manage project history.'
  },
  {
    image: github,
    "Name": 'GitHub',
    "Text": 'GitHub is a cloud platform that hosts Git repositories, making it easier to store, share, and collaborate on code projects.'
  },
  {
    image: node,
    "Name": 'Node.js',
    "Text": 'Node.js is a runtime environment that lets you run JavaScript on the server side, outside the browser.'
  },
]

export const Main = () => {
  const [skill, setSkill] = useState<string | Skill>('Skills');
  const [skillText, setSkillText] = useState<string | Skill>('Hint: click on an icon');
  
  return (
    <main className="main section">
      <div className="">
        <div className="main__container section">
          <div className="main__content">
            <h1 className="main__title">Front-End <br /> Developer</h1>
              <p className="main__text">
                I’m a 16-year-old Front-End Developer
                at the <br /> start of my journey.
                I’ve completed a <br /> development course and built personal <br />
                projects to grow my skills. <br />
              </p>
              <span className="main__subtext">
                I’m passionate about creating clean, <br />
                responsive websites and always <br />
                looking to improve and learn more. <br />
              </span>
          </div>
          <div className="main__about">
            <img className='main__about-photo' src={me} alt="" />
            <div className="main__about-title">
              Borys Torzhanskyi
            </div>
            <div className="main__about-text">
              That's me, I started as a teen interested in programming and began learning from youtube, after a few months I knew i wanted more and I bought a Mate Academy course and made sure I study every bit of it and that this is the job I want
            </div>
            <div className="main__about-socials">
              <a className="main__about-social" href={'https://github.com/u5135039754-dev'}>
                <img src={animationGit} alt="" />
              </a>
              <a className="main__about-social" href={'https://www.linkedin.com/in/borys-torzhanskyi-5a032838b/'}>
                <img src={animationLinked} alt="" />
              </a>
              <a className="main__about-social" href={'https://www.instagram.com/totenwilk/'}>
                <img src={animationInsta} alt="" />
              </a>
            </div>
          </div>
        </div>
        <div id='projects' className="main__pro">
          <h1 className="section__title">Projects</h1>

          <div className="main__projects section">
            <a href='https://u5135039754-dev.github.io/layout_landing-page/' className="main__project main__mybike">
              <div className="main__project-image">
                <img className='main__project-img' src={landingPage} alt="MyBike" />
                <img className='main__project-secondary main__project-mybike' src={landingPage1260} alt="" />
                <div className="main__project-lang">
                    <img src={html} alt="" className="main__project-lang__image" />
                    <img src={css} alt="" className="main__project-lang__image" />
                </div>
              </div>
              <div className="main__project-content">
                <div className="main__project-title">MyBike</div>
                <div className="main__project-description">
                  MyBike is a simple and modern <br /> website
                  dedicated to bikes only. <br />
                  It offers a clean design and easy navigation.
                </div>
              </div>
            </a>
            <a href='https://u5135039754-dev.github.io/Kickstarter/' className="main__project main__crazybaby">
              <div className="main__project-image">
                <img className='main__project-img' src={CrazyBaby} alt="MyBike" />
                <img className='main__project-secondary main__project-crazybaby' src={CrazyBaby1260} alt="" />
                <div className="main__project-lang">
                    <img src={html} alt="" className="main__project-lang__image" />
                    <img src={sass} alt="" className="main__project-lang__image" />
                    <img src={js} alt="" className="main__project-lang__image" />
                </div>
              </div>
              <div className="main__project-content">
                <div className="main__project-title">CrazyBaby</div>
                <div className="main__project-description">
                  CrazyBaby is dedicated to a high-quality
                  <br /> speaker. It allows you to easily explore the
                  <br /> speaker’s features, design, and specifications.
                </div>
              </div>
            </a>
          </div>
        </div>
        <div id='skills' className="main__skills">
          <div className="main__skills-text">
            <h1 className="main__skills-title section__title">{skill}</h1>
            <p className="section__subtitle">{skillText}</p>
          </div>
          <div className="main__skills-board">
            <div className="main__skills-column">
              {skills1.map((item, index) => (
                <div key={index} className="main__skills-key">
                  <img src={item.image} alt="" onClick={() => {
                    setSkill(item.Name);
                    setSkillText(item.Text);
                  }} className="main__skills-img" />
                </div>
              ))}
            </div> 
            <div className="main__skills-column">
              {skills2.map((item, index) => (
                <div key={index} className="main__skills-key">
                  <img src={item.image} alt="" onClick={() => {
                    setSkill(item.Name);
                    setSkillText(item.Text);
                  }} className="main__skills-img" />
                </div>
              ))}
            </div> 
            <div className="main__skills-column">
              {skills3.map((item, index) => (
                <div key={index} className="main__skills-key">
                  <img src={item.image} alt="" onClick={() => {
                    setSkill(item.Name);
                    setSkillText(item.Text);
                  }} className="main__skills-img" />
                </div>
              ))}
            </div> 
          </div>
        </div>
      </div>
    </main>
  )
}

