import React from 'react'
import { Link } from 'react-router-dom'
import {HiOutlineArrowNarrowRight} from 'react-icons/hi'

const About = () => {
  return (
    <section className='about' id='about'>
      <div className="container">
        <div className="banner">
            <div className="top">
                <h1 className="heading">ABOUT US</h1>
                <p>The only thing we're serious about is food</p>
            </div>
            <p className="mid">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed possimus nesciunt totam magnam id aut earum cupiditate neque in hic omnis harum optio at libero debitis, beatae cum facere laborum repudiandae enim praesentium autem eos? Hic dolorem animi iste quis nulla illo suscipit nihil, sapiente officia distinctio, cumque blanditiis quos.</p>
            <Link to={"/"}>Explore Menu{""} 
            <span>
             <HiOutlineArrowNarrowRight/>
            </span>
            </Link>
        </div>
        <div className="banner">
            <img src="/about.png" alt="about" />
        </div>
      </div>
    </section>
  )
}

export default About
