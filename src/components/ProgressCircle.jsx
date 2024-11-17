import PropTypes from 'prop-types'
import { useState, useEffect } from 'react'

// CircleProgress Component
const CircleProgress = ({ degree, color, title }) => {
  const [currentDegree, setCurrentDegree] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentDegree((prev) => {
        const newDegree = Math.min(prev + 1, degree) // prevent overshoot
        if (newDegree === degree) clearInterval(interval)
        return newDegree
      })
    }, 30) // Smooth animation with 30ms interval

    return () => clearInterval(interval) // Cleanup interval
  }, [degree])

  return (
    <div className="circle">
      <div
        className="circle-inner"
        style={{
          background: `conic-gradient(${color} ${currentDegree}%, #222 0%)`,
        }}
      >
        <h2 className="number" style={{ color }}>
          {currentDegree}<span>%</span>
        </h2>
        <h4>{title}</h4>
      </div>
    </div>
  )
}

// PropTypes validation
CircleProgress.propTypes = {
  degree: PropTypes.number.isRequired,
  color: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
}

// ProgressCircles Component
const ProgressCircles = () => {
  const progressData = [
    { degree: 75, color: 'blue', title: 'HTML' },
    { degree: 80, color: 'green', title: 'CSS' },
    { degree: 72, color: 'purple', title: 'JS' },
    { degree: 87, color: 'teal', title: 'Python' },
    { degree: 89, color: 'blue', title: 'React' },
    { degree: 89, color: 'green', title: 'SQL' },
    { degree: 70, color: 'purple', title: 'Figma' },
  ]

  return (
    <div className="skillsContainer">
      {progressData.map((data, index) => (
        <CircleProgress
          key={index}
          degree={data.degree}
          color={data.color}
          title={data.title}
        />
      ))}
    </div>
  )
}

export default ProgressCircles
