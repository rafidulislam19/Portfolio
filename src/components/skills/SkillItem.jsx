// import React from 'react'

// const SkillItem = ({ skill }) => {
//   return (
//     <div className="skills__card">
//       <div className="skills__icon">
//         <i className={skill.icon}></i>
//       </div>

//       <h3 className="skills__name">{skill.name}</h3>
//       {/* <span className="skills__level">{skill.level}</span> */}
//     </div>
//   )
// }

// export default SkillItem

import React from 'react'
import { motion } from "framer-motion";

const SkillItem = ({ skill }) => {
  return (
    <motion.div
      className="skills__card"
      initial={{ opacity: 0, scale: 0.85, y: 20 }}
      whileInView={{ opacity: 1, scale: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      <div className="skills__icon">
        <i className={skill.icon}></i>
      </div>

      <h3 className="skills__name">{skill.name}</h3>
    </motion.div>
  )
}

export default SkillItem