import React from "react";
import "../styles/About.css";

import { FaReact, FaLinux, FaSass, FaHtml5, FaGitAlt, FaNodeJs } from "react-icons/fa";
import { TbBrandNextjs, TbBrandRedux } from "react-icons/tb";
import { IoLogoJavascript } from "react-icons/io";
import { SiTailwindcss, SiMui, SiExpress, SiMongodb, SiPostman } from "react-icons/si";
import { DiMysql } from "react-icons/di";


const About = () => {
  return (
    <div className="about container pt-12">
      <div className="about__wrapper">
        <img
          src="https://imgs.search.brave.com/LoS897kg-h8IH5bKNd1QJDsQxDAtIkQ8538gOHZUQEQ/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMtcGxhdGZvcm0u/OTlzdGF0aWMuY29t/Ly84V2Z3WWhOQVdr/bW9XRFhld2hHbnBC/Qnd0Rzg9LzM5NHgx/NDoxMjA5eDgyOS9m/aXQtaW4vNTAweDUw/MC85OWRlc2lnbnMt/Y29udGVzdHMtYXR0/YWNobWVudHMvMTEw/LzExMDU4My9hdHRh/Y2htZW50XzExMDU4/MzI3Ng"
          alt=""
        />
        <p>
          I am a passionate web developer with expertise in creating dynamic and
          visually appealing websites. Proficient in HTML, CSS, and JavaScript,
          I design and implement responsive and user-friendly interfaces.
          Dedicated to staying updated with the latest web technologies, I enjoy
          collaborating with teams to deliver innovative digital solutions that
          enhance the user experience.
        </p>
      </div>
      <p className="mt-10 text-lg font-bold">Skills</p>
      <div className="card">
      <div className="skill__card">
                <FaReact className='skill__icon'/>
                <h1>React</h1>
              </div>
              <div className="skill__card">
                <TbBrandNextjs className='skill__icon'/>
                <h1>Next</h1>
              </div>
              <div className="skill__card">
                <FaNodeJs  className='skill__icon'/>
                <h1>NodeJS</h1>
              </div>
              <div className="skill__card">
                <SiExpress className='skill__icon'/>
                <h1>ExpressJS</h1>
              </div>
              <div className="skill__card">
                <SiMongodb className='skill__icon'/>
                <h1>MongoDB</h1>
              </div>
              <div className="skill__card">
                <DiMysql className='skill__icon'/>
                <h1>SQL</h1>
              </div>
              <div className="skill__card">
                <TbBrandRedux className='skill__icon' />
                <h1>Redux</h1>
              </div>
              <div className="skill__card">
                <IoLogoJavascript className='skill__icon'/>
                <h1>JavaScript</h1>
              </div>
              <div className="skill__card">
              <FaGitAlt className='skill__icon'/>
                <h1>Git</h1>
              </div>
              <div className="skill__card">
                <SiPostman className='skill__icon'/>
                <h1>Postman</h1>
              </div>
              <div className="skill__card">
              <FaLinux className='skill__icon'/>
                <h1>Linux</h1>
              </div>
              <div className="skill__card">
              <SiTailwindcss className='skill__icon'/>
                <h1>Tailwind CSS</h1>
              </div>
              <div className="skill__card">
              <SiMui className='skill__icon'/>
                <h1>Material UI</h1>
              </div>
              <div className="skill__card">
              <FaSass  className='skill__icon'/>
                <h1>Sass</h1>
              </div>
              <div className="skill__card">
              <FaHtml5 className='skill__icon'/>
                <h1>HTML</h1>
              </div>
      </div>
    </div>
  );
};

export default About;
