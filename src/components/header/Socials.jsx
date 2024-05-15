import React from 'react'
import { BsLinkedin } from 'react-icons/bs'
import { FaGithub } from 'react-icons/fa'
import { BsTwitter } from 'react-icons/bs'
import { BsInstagram } from 'react-icons/bs'

const Socials = () => {

  // rel="noreferrer"

  return (
    <div className='socials' data-aos="zoom-out-left">
        <a href="https://www.instagram.com/afnanksalal/" target='_blank' rel="noreferrer" className='social__icon' aria-label="Get to know me more on instagram"><BsInstagram /></a>
        <a href="https://www.linkedin.com/in/afnanksalal/" target='_blank'  rel="noreferrer" className='social__icon' aria-label="Get to know me more on linkedin"><BsLinkedin /></a>
        <a href="https://github.com/afnanksalal" target='_blank' rel="noreferrer" className='social__icon' aria-label="Get to know me more on github"><FaGithub /></a>
        <a href="https://twitter.com/afnanksalal" target='_blank' rel="noreferrer" className='social__icon' aria-label="Get to know me more on twitter"><BsTwitter /></a>
    </div>
  )
}

export default Socials
