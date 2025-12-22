// import React from 'react';
// import './home.css';
// import Social from './Social';
// import Data from './Data';
// import ScrollDown from './ScrollDown';


// const Home = () => {
//   return (
//     <section className="home section" id="home">
//         <div className="home__container app-container app-grid">
//             <div className="home__content app-grid">
              
//                 <Social />

//                 <div className="home__img"></div>

//                 <Data />
//             </div>

//             <ScrollDown />
//         </div>
//     </section>
//   )
// }

// export default Home

import React from "react";
import { motion } from "framer-motion";
import "./home.css";
import Social from "./Social";
import Data from "./Data";
import ScrollDown from "./ScrollDown";

const Home = () => {
  return (
    <section className="home section" id="home">
      <motion.div
        className="home__container app-container app-grid"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        <div className="home__content app-grid">
          <Social />

          <motion.div
            className="home__img"
            initial={{ scale: 0.85, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          ></motion.div>

          <Data />
        </div>

        <ScrollDown />
      </motion.div>
    </section>
  );
};

export default Home;