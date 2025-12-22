// import React from 'react'

// const Social = () => {
//   return (
//     <div className="home__social">
//         <a href="https://www.linkedin.com/in/rafidul--islam?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app" className="home__social-icon" target='_blank'>
//             <i class="uil uil-linkedin"></i>
//         </a>
//         <a href="https://github.com/rafidulislam19" className="home__social-icon" target='_blank'>
//             <i class="uil uil-github-alt"></i>
//         </a>
//         <a href="https://www.instagram.com/rafid131?igsh=MTNtbmQ2aW45enAydA%3D%3D&utm_source=qr" className="home__social-icon" target='_blank'>
//             <i class="uil uil-instagram"></i>
//         </a>
//         <a href="https://www.facebook.com/rafidislam.hridoy/" className="home__social-icon" target='_blank'>
//             <i class="uil uil-facebook"></i>
//         </a>
//     </div>
//   )
// }

// export default Social

import React from "react";
import { motion } from "framer-motion";

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const item = {
  hidden: { y: -20, opacity: 0 },
  show: { y: 0, opacity: 1, transition: { ease: "easeOut" } },
};

const Social = () => {
  return (
    <motion.div
      className="home__social"
      variants={container}
      initial="hidden"
      animate="show"
    >
      {[
        ["uil-linkedin", "https://www.linkedin.com"],
        ["uil-github-alt", "https://github.com/rafidulislam19"],
        ["uil-instagram", "https://instagram.com"],
        ["uil-facebook", "https://facebook.com"],
      ].map(([icon, link], i) => (
        <motion.a
          key={i}
          href={link}
          target="_blank"
          className="home__social-icon"
          variants={item}
        >
          <i className={`uil ${icon}`}></i>
        </motion.a>
      ))}
    </motion.div>
  );
};

export default Social;