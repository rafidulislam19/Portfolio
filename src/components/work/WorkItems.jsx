import React, { useEffect, useRef, useState } from "react";

const WorkItems = ({ item }) => {
  const cardRef = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.2 }
    );

    if (cardRef.current) observer.observe(cardRef.current);

    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={cardRef}
      className={`work__card ${visible ? "work__card--show" : ""}`}
    >
      <img src={item.image} alt="" className="work__img" />
      <h3 className="work__title">{item.title}</h3>

      <div className="work__tags">
        {item.tags.map((tag, index) => (
          <span className="work__tag" key={index}>{tag}</span>
        ))}
      </div>

      {/* <p className="work__description">{item.description}</p> */}

      <div className="work__buttons">
        <a href={item.demoUrl} className="work__button">
           <i className="uil uil-arrow-up-right work__button-icon"></i>
        </a>
        <a href={item.githubUrl} className="work__button">
           <i className="uil uil-github-alt work__button-icon"></i>
        </a>
      </div>
    </div>
  );
};

export default WorkItems;