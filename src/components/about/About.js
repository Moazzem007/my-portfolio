import React from 'react'
import './about.css'
import ME from '../../asset/me-about.jpg'
import {TbAward } from 'react-icons/tb'
import { FiUserCheck } from "react-icons/fi";
import { BsFolder } from "react-icons/bs";

export const About = () => {
  return (
    <section id="about">
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__me">
          <img src={ME} alt="about image" className="about__me-image" />
        </div>
        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <TbAward className="about__icon" />
              <h5>Experience</h5>
              <small>3+ Years Working</small>
            </article>
            <article className="about__card">
              <FiUserCheck className="about__icon" />
              <h5>Clients</h5>
              <small>300+ Clients</small>
            </article>
            <article className="about__card">
              <BsFolder className="about__icon" />
              <h5>Projects</h5>
              <small>80+ Completed</small>
            </article>
          </div>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui dicta
            minus molestiae vel beatae natus eveniet ratione temporibus aperiam
            harum alias officiis assumenda officia quibusdam deleniti eos
            cupiditate dolore doloribus! Ad dolore dignissimos asperiores dicta
            facere optio quod commodi nam tempore recusandae. Rerum sed nulla
            eum vero expedita ex delectus voluptates rem at neque quos facere
            sequi unde optio aliquam!
          </p>
          <a href="#contact" className="btn btn-primary">
            Let's Talk
          </a>
        </div>
      </div>
    </section>
  );
  
}
