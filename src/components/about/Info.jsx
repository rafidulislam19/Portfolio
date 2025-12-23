import React from 'react'

const Info = () => {
  return (
    <div className="about__info app-grid">

        <div className="about__box">
        <i class='uil uil-arrow about__icon'></i>
        <div>
          <h3 className="about__title">Web Developer</h3>
        <span className="about__subtitle">Creating responsive websites and web applications with modern frameworks.</span>
        </div>
        </div>
        <div className="about__box">
            <i className="uil uil-web-grid about__icon"></i>
            <div>
              <h3 className="about__title">Web Designer</h3>
            <span className="about__subtitle">Transforming complex ideas into visually compelling digital stories.</span>
            </div>
        </div>
        <div className="about__box">
            <i class='uil uil-edit about__icon'></i>
            <div>
              <h3 className="about__title">Visual Designer</h3>
            <span className="about__subtitle">Designing unique logos, banners and illustrations to communicate brand stories effectively.</span>
            </div>
        </div>
                <div className="about__box">
            <i class='bx bx-award about__icon'></i>
            <div>
              <h3 className="about__title">Experience</h3>
            <span className="about__subtitle">2 Years Working</span>
            </div>
        </div>

    </div>
  )
}

export default Info