import React, { useEffect, useState } from 'react'
import { skillsData, skillsNav } from './Data'
import SkillItem from './SkillItem'

const SkillTabs = () => {

  const [item, setItem] = useState({ name: 'all' });
  const [skills, setSkills] = useState([]);
  const [active, setActive] = useState(0);

  useEffect(() => {
    if (item.name === 'all') {
      setSkills(skillsData);
    } else {
      const filtered = skillsData.filter(
        (skill) => skill.category === item.name
      );
      setSkills(filtered);
    }
  }, [item]);

  const handleClick = (e, index) => {
    setItem({ name: e.target.textContent.toLowerCase() });
    setActive(index);
  };

  return (
    <>
      <div className="skills__filters">
        {skillsNav.map((item, index) => (
          <span
            key={index}
            onClick={(e) => handleClick(e, index)}
            className={`skills__item ${
              active === index ? 'active-skill' : ''
            }`}
          >
            {item.name}
          </span>
        ))}
      </div>

      <div className="skills__container app-container app-grid">
        {skills.map((skill) => (
          <SkillItem key={skill.id} skill={skill} />
        ))}
      </div>
    </>
  )
}

export default SkillTabs