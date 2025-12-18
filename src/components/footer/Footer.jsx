import React from 'react';
import "./footer.css";

const Footer = () => {
  return (
    <footer className="footer">
        <div className="footer__container app-container">
            <h1 className="footer__title">Rafid</h1>

            <ul className="footer__list">
                <li>
                    <a href="#about" className="footer__link">About</a>
                </li>
                <li>
                    <a href="#projects" className="footer__link">Projects</a>
                </li>
                <li>
                    <a href="#skills" className="footer__link">Skills</a>
                </li>
            </ul>

            <div className="footer__social">
                <a href="https://www.facebook.com/rafidislam.hridoy/" className="footer__social-link" target='_blank'>
                    <i class="bx bxl-facebook"></i>
                </a>
                <a href="https://www.instagram.com/rafid131?igsh=MTNtbmQ2aW45enAydA%3D%3D&utm_source=qr" className="footer__social-link" target='_blank'>
                    <i class="bx bxl-instagram"></i>
                </a>
                <a href="https://github.com/rafidulislam19" className="footer__social-link" target='_blank'>
                    <i class="bx bxl-twitter"></i>
                </a>
            </div>

            <span className="footer__copy">&#169; Rafid Islam. All rigths reserved</span>
        </div>
    </footer>
  )
}

export default Footer