import React from 'react'

const Title = ({title, subtitle, mantra}) => {
  return (
    <>
      <div class="section-title">
                    <h2>{title} <span>{subtitle}</span></h2>
                    <p style={{lineHeight: '1rem'}}>{mantra}</p>
                </div>
    </>
  )
}

export default Title
