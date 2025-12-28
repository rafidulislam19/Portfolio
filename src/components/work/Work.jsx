// import React from 'react'
// import "./work.css"
// import Works from './Works'

// const Work = () => {
//   return (
//     <section className="work section" id="projects">
//         <h2 className="section__title">Featured Projects</h2>
//         <span className="section__subtitle">Some of my recent works</span>

//         <Works />
//     </section>
//   )
// }

// export default Work

import React, { useRef } from 'react'
import "./work.css"
import Works from './Works'

const Work = () => {
  const workRef = useRef(null);

  return (
    <section ref={workRef} className="work section" id="projects">
      <h2 className="section__title">Featured Projects</h2>
      <span className="section__subtitle">Some of my recent works</span>

      <Works scrollRef={workRef} />
    </section>
  )
}

export default Work