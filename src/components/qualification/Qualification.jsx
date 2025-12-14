import React, { useState } from 'react'
import "./qualification.css"
const Qualification = () => {
const [toggleState, setToggleState] = useState(1);

    const toggleTab = (index) => {
    setToggleState(index);
    };
  return (
    <section className="qualification section">
        <h2 className="section__title">Qualification</h2>
        <span className="section__subtitle">My Personal Journey</span>

        <div className="qualification__container container">
            <div className="qualification__tabs">
                <div className={toggleState === 1 ? "qualification__button qualification__active button--flex" : "qualification__button button--flex"}
                onClick={() => toggleTab(1)}
                >
                    <i className="uil uil-graduation-cap qualification__icon"></i> Education
                </div>
                <div className={toggleState === 2 ? "qualification__button qualification__active button--flex" : "qualification__button button--flex"}
                onClick={() => toggleTab(2)}
                >
                    <i className="uil uil-briefcase-alt qualification__icon"></i> Experience
                </div>
            </div>

            <div className="qualification__sections">
                <div className={toggleState === 1 ? "qualification__content qualification__content-active" : "qualification__content"}>
                    <div className="qualification__data">
                        <div>
                            <h3 className="qualification__title">BSc</h3>
                            <span className="qualification__subtitle">CGPA: 3.6 out of 4</span>
                            <span className="qualification__subtitle">North South University</span>
                            <div className="qualification__calender">
                                <i className="uil uil-calendar-alt"></i> 2019- 2023
                            </div>
                        </div>
                        <div>
                            <span className="qualification__rounder"></span>
                            <span className="qualification__line"></span>
                        </div>
                    </div>
                    <div className="qualification__data">
                        <div></div>

                        <div>
                            <span className="qualification__rounder"></span>
                            <span className="qualification__line"></span>
                        </div>

                        <div>
                            <h3 className="qualification__title">H.S.C</h3>
                            <span className="qualification__subtitle">GPA: 5 out of 5</span>
                            <span className="qualification__subtitle">Dhaka College</span>
                            <div className="qualification__calender">
                                <i className="uil uil-calendar-alt"></i> 2016 - 2018
                            </div>
                        </div>
                        
                    </div>
                    <div className="qualification__data">
                        <div>
                            <h3 className="qualification__title">S.S.C</h3>
                            <span className="qualification__subtitle">GPA: 5 out of 5</span>
                            <span className="qualification__subtitle">Ideal School & College</span>
                            <div className="qualification__calender">
                                <i className="uil uil-calendar-alt"></i> 2006 - 2016 
                            </div>
                        </div>
                        <div>
                            <span className="qualification__rounder"></span>
                            <span className="qualification__line"></span>
                        </div>
                    </div>
                    
                </div>

                <div className={toggleState === 2 ? "qualification__content qualification__content-active" : "qualification__content"}>
                    <div className="qualification__data">
                        <div>
                            <h3 className="qualification__title">Software Developer</h3>
                            <span className="qualification__subtitle">BRAC Bank PLC</span>
                            <div className="qualification__calender">
                                <i className="uil uil-calendar-alt"></i> 2024 - Present
                            </div>
                        </div>
                        <div>
                            <span className="qualification__rounder"></span>
                            <span className="qualification__line"></span>
                        </div>
                    </div>
                    <div className="qualification__data">
                        <div></div>

                        <div>
                            <span className="qualification__rounder"></span>
                            <span className="qualification__line"></span>
                        </div>

                        <div>
                            <h3 className="qualification__title">Research Assistant</h3>
                            <span className="qualification__subtitle">North South University</span>
                            <div className="qualification__calender">
                                <i className="uil uil-calendar-alt"></i> 2023 - 2024
                            </div>
                        </div>
                        
                    </div>
                    <div className="qualification__data">
                        <div>
                            <h3 className="qualification__title">Intern</h3>
                            <span className="qualification__subtitle">BRAC Bank PLC</span>
                            <div className="qualification__calender">
                                <i className="uil uil-calendar-alt"></i> 2022- 2023
                            </div>
                        </div>
                        <div>
                            <span className="qualification__rounder"></span>
                            <span className="qualification__line"></span>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    </section>
  )
}

export default Qualification