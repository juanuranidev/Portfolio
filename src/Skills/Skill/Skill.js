import React from 'react'

const Skill = ({className, text}) => {
  return (
    <div>
        <span className={className}/>
        <h3>{text}</h3>
    </div>
  )
}

export default Skill