import React from 'react'
import NavPanel from '../components/NavPanel'
import '../styles/info.css'
import Footer from '../components/Footer'

function About() {
  return (
    <div className='main-body2'>
      
      <NavPanel></NavPanel>
      <div className='content'>
      <br></br>
      <p className='title-container'>
          About This Website
          <br></br>
      </p>

      <p className='text-container'>
        Note: This website (WiredIn) is part of a group senior project connected to California Polytechnic State University San Luis Obispo.
        <br></br>
        For our senior project, we were tasked to find a problem we could solve, a common inconvenience we could remedy, or make the world a better place. WiredIn was created with the primary purpose of tailoring cybersecurity knowledge and tips to a non-engineer audience. 
      </p>

      <p className='text-container'>
        Growing up, we had many occasions where we had to try and explain common computer security, relevant college coursework, and technical language to family and friends and found it to be surprisingly difficult. There were too many acronyms, too much vocabulary, and complex computer-specific information to be able to portray the topics effectively without a large amount of context and rewording. This website’s main goal is to assist in communicating some topics we have found to be important to anyone and everyone who uses devices with internet connections by simplifying language, using helpful infographics, and offering training quizzes. Our hope for this website is to remove the barrier for confusing technical topics, regardless of one’s familiarity with them. 
      </p>
      </div>
      <Footer></Footer>
 
    </div>
  )
}

export default About