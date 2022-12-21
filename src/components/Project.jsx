import React from 'react';


const Project = ({img, alt, h4, href}) => {
  return (
    <div>
      <a href={href} target="blanket">
                    <div className="box-pro">
                        <h4>{h4}</h4>
                        <img src={img} alt={alt} />
                    </div>
                </a>
    </div>
  )
}

export default Project
