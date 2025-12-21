// import React from 'react'

// const WorkItems = ({item}) => {
//   return (
//     <div className="work__card" key={item.id}>
//         <img src={item.image} alt="" className='work__img' />
//         <h3 className="work__title">{item.title}</h3>
//         <div className='work__buttons'>
//             <a href={item.demoUrl} className="work__button">
//             Demo <i className="uil uil-arrow-up-right work__button-icon"></i>
//         </a>
//         <a href={item.githubUrl} className="work__button">
//             GitHub <i className="uil uil-github-alt work__button-icon"></i>
//         </a>
//         </div>
//     </div>
//   )
// }

// export default WorkItems

import React from "react";

const WorkItems = ({ item }) => {
  return (
    <div className="work__card">
      <img src={item.image} alt={item.title} className="work__img" />

      <h3 className="work__title">{item.title}</h3>

      {/* Tags */}
      <div className="work__tags">
        {item.tags.map((tag, index) => (
          <span className="work__tag" key={index}>
            {tag}
          </span>
        ))}
      </div>

      {/* Description */}
      <p className="work__description">{item.description}</p>

      <div className="work__buttons">
        <a
          href={item.demoUrl}
          className="work__button"
          target="_blank"
          rel="noreferrer"
        >
          <i className="uil uil-arrow-up-right work__button-icon"></i>
        </a>

        <a
          href={item.githubUrl}
          className="work__button"
          target="_blank"
          rel="noreferrer"
        >
          <i className="uil uil-github-alt work__button-icon"></i>
        </a>
      </div>
    </div>
  );
};

export default WorkItems;
