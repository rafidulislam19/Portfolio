// import React, { useEffect, useState } from 'react'
// import { projectsData } from './Data'
// import { projectsNav } from './Data'
// import WorkItems from './WorkItems'

// const Works = () => {

// const [item, setItem] = useState({name: 'all'});
// const [projects, setProjects] = useState([]);
// const [active, setActive] = useState(0);

// useEffect(() => {
//     if(item.name === 'all') {
//         setProjects(projectsData);
//     }

//     else {
//         const newProjects = projectsData.filter((project) => {
//             return project.category.toLowerCase() === item.name;
//         });

//         setProjects(newProjects);
//     }
// }, [item]);

//   const handleClick = (e, index) => {
//     setItem({name: e.target.textContent.toLowerCase() });
//     setActive(index);
//   };
    
//   return (

//     <div >
//         <div className="work__filters">
        
//             {
//                 projectsNav.map((item, index) => {
//                     return (
//                     <span onClick={(e) => {
//                         handleClick(e, index);
//                     }} 
//                     className={`${active === index ? 'active-work' : ""}
//                     work__item`} key= {index}>
//                         {item.name}
//                     </span>
//                     )
//                 })
//             }
//             </div>
//         <div className="work__container app-container app-grid">
//             {projects.map((item) => {
//                 return <WorkItems item={item} key={item.id}/>
//             })}
//         </div>
//     </div>

//   )
// }

// export default Works

import React, { useEffect, useState } from "react";
import { projectsData, projectsNav } from "./Data";
import WorkItems from "./WorkItems";

const ITEMS_PER_PAGE = 4;

const Works = ({ scrollRef }) => {
  const [item, setItem] = useState({ name: "all" });
  const [projects, setProjects] = useState([]);
  const [active, setActive] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);

  /* FILTER PROJECTS */
  useEffect(() => {
    if (item.name === "all") {
      setProjects(projectsData);
    } else {
      setProjects(
        projectsData.filter(
          (project) =>
            project.category.toLowerCase() === item.name
        )
      );
    }
    setCurrentPage(1);
  }, [item]);

  /* PAGINATION */
  const totalPages = Math.ceil(projects.length / ITEMS_PER_PAGE);
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const currentItems = projects.slice(
    startIndex,
    startIndex + ITEMS_PER_PAGE
  );

  /* 🎯 SCROLL AFTER PAGE CHANGE */
  useEffect(() => {
    if (scrollRef?.current) {
      scrollRef.current.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  }, [currentPage, scrollRef]);

  const handleClick = (e, index) => {
    setItem({ name: e.target.textContent.toLowerCase() });
    setActive(index);
  };

  return (
    <div>
      {/* FILTERS */}
      <div className="work__filters">
        {projectsNav.map((item, index) => (
          <span
            key={index}
            onClick={(e) => handleClick(e, index)}
            className={`work__item ${
              active === index ? "active-work" : ""
            }`}
          >
            {item.name}
          </span>
        ))}
      </div>

      {/* PROJECTS */}
      <div className="work__container app-container app-grid">
        {currentItems.map((item) => (
          <WorkItems item={item} key={item.id} />
        ))}
      </div>

      {/* PAGINATION */}
      {totalPages > 1 && (
        <div className="work__pagination">
          <button
            className="work__page-btn"
            disabled={currentPage === 1}
            onClick={() =>
              setCurrentPage((prev) => Math.max(prev - 1, 1))
            }
          >
            ⏮ Prev
          </button>

          {[...Array(totalPages)].map((_, index) => (
            <button
              key={index}
              className={`work__page-number ${
                currentPage === index + 1 ? "active-page" : ""
              }`}
              onClick={() => setCurrentPage(index + 1)}
            >
              {index + 1}
            </button>
          ))}

          <button
            className="work__page-btn"
            disabled={currentPage === totalPages}
            onClick={() =>
              setCurrentPage((prev) =>
                Math.min(prev + 1, totalPages)
              )
            }
          >
            Next ⏭
          </button>
        </div>
      )}
    </div>
  );
};

export default Works;