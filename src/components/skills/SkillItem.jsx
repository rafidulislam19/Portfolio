import React from 'react'

const SkillItem = ({ skill }) => {
  return (
    <div className="skills__card">
      <div className="skills__icon">
        <i className={skill.icon}></i>
      </div>

      <h3 className="skills__name">{skill.name}</h3>
      <span className="skills__level">{skill.level}</span>
    </div>
  )
}

export default SkillItem