import './about.css'
import ME from '../../assets/about__me.webp'
import {RxTriangleRight} from 'react-icons/rx'

import AOS from 'aos'
import 'aos/dist/aos.css'
import { useEffect } from 'react'

const About = () => {

  useEffect(() => {
    AOS.init({duration:1000})
  }, []);

  return (
    <section id='about' >
      <h5 data-aos="fade-up">Get To Know</h5>
      <h2 data-aos="fade-up">About Me</h2>

      <div className="container about__container">

          <div className="about__me" data-aos="fade-right">
            <div className="about__me-image">
              <img src={ME} alt="Afnan K Salal" width={100} />
            </div>

          </div>

          <article className="about__content" >
            <p data-aos="fade-left" data-aos-delay='100'>
              Hello! My name is Afnan K Salal, and I am a highly motivated Full-Stack Developer, AI/ML Enthusiast, Digital Artist from India. 
            </p>
            <p data-aos="fade-left" data-aos-delay='200'>
             Before transitioning into web development, I spent two years working as a digital artist, specializing in creating game assets and designing game environments. Alongside my digital art endeavors, I delved into game server development, honing my skills in crafting engaging multiplayer experiences. While this experience provided valuable skills, I realized that my true passion lay in the world of web development and AI integration. Determined to shift my career and pursue my dreams, I gained necessary knowledge and skills in full-stack web development and AI technologies. 
            </p>
            <p data-aos="fade-left" data-aos-delay='300'>
              I am a passionate web developer constantly seeking growth, embracing new technologies, and delivering high-quality solutions. Enthusiastic about the ever-evolving field and excited for future possibilities.
            </p>
            <p data-aos="fade-left" data-aos-delay='400'>
              Some of the technologies I have been working with recently include:
            </p>
            <ul className='about__me-tech text-light' data-aos="zoom-in-up">
              <li><RxTriangleRight className='about__me-tech-icon'/> NextJS </li>
              <li><RxTriangleRight className='about__me-tech-icon'/> Vue </li>
              <li><RxTriangleRight className='about__me-tech-icon'/> Django </li>
              <li><RxTriangleRight className='about__me-tech-icon'/> Tauri </li>
              <li><RxTriangleRight className='about__me-tech-icon'/> Sanic </li>
              <li><RxTriangleRight className='about__me-tech-icon'/> HTMX </li>
            </ul>
          </article>

      </div>
    </section>
  )
}

export default About
