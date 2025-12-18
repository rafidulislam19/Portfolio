import React from 'react';
import "./skills.css";
import Frontend from './Frontend';
import Backend from './Backend';

const Skills = () => {
  return (
    <section className="skills section" id="skills">
        <h2 className="section__title">Skills</h2>
        <span className="section__subtitle">My technical level</span>

        <div className="skills__container app-container app-grid">
            <Frontend />
            <Backend />
        </div>
    </section>

    // <section className="skills section" id="skills">
    //     <h2 className="section__title">Skills</h2>
    //     <span className="section__subtitle">My technical level</span>

    //     <div className="skills__container container">
    //         <div className='w-full h-screen relative flex items-center justify-center rounded-full radial-gradient'>
              
    //         </div>
    //     </div>
    // </section>
  )
}

export default Skills