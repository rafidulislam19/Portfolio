import React from "react";

const SkillCard = ({ skill }) => {
  return (
    <div className={`skills__card ${skill.category}`}>
      <div className="skills__card-header">
        <img src={skill.icon} alt={skill.name} className="skills__icon" />
        <h3 className="skills__name">{skill.name}</h3>
      </div>

      <div className="skills__bar">
        <span
          className="skills__progress"
          style={{width: `${skill.level}%` }}
        /> 
      </div>

      <span className="skills__percentage">{skill.level}%</span>
    </div>

  );
};

export default SkillCard;