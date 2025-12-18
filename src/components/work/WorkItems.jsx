import React from 'react'

const WorkItems = ({item}) => {
  return (
    <div className="work__card" key={item.id}>
        <img src={item.image} alt="" className='work__img' />
        <h3 className="work__title">{item.title}</h3>
        <div className='work__buttons'>
            <a href={item.demoUrl} className="work__button">
            Demo <i className="uil uil-arrow-up-right work__button-icon"></i>
        </a>
        <a href={item.githubUrl} className="work__button">
            GitHub <i className="uil uil-github-alt work__button-icon"></i>
        </a>
        </div>
    </div>
  )
}

export default WorkItems