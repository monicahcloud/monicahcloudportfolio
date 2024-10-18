import { useState, useEffect } from 'react'


const CircleProgress = ({ degree, color, title }) => {
  const [currentDegree, setCurrentDegree] = useState(0)

  useEffect(() => {
    let interval
    if (currentDegree < degree) {
      interval = setInterval(() => {
        setCurrentDegree((prev) => {
          if (prev >= degree) {
            clearInterval(interval)
            return prev
          }
          return prev + 1
        })
      }, 50)
    }
    return () => clearInterval(interval)
  }, [currentDegree, degree])
  return (
    <div className="">
      <div
        className="circle"
        style={{
          background: `conic-gradient(${color} ${currentDegree}%, #222 0%)`,
        }}
        data-degree={degree}
        data-color={color}
      >
        <h2 className="number" style={{ color }}>
          {currentDegree}
          <span>%</span>
        </h2>
        <h4>{title}</h4>
      </div>
    </div>
  )
}

const ProgressCircles = () => {
  const progressData = [
    { degree: 75, color: '#00bfff', title: 'HTML' },
    { degree: 80, color: '#00bfff', title: 'CSS' },
    { degree: 72, color: '#00bfff', title: 'JS' },
    { degree: 87, color: '#00bfff', title: 'Python' },
    { degree: 89, color: '#00bfff', title: 'ReactJS' },
    { degree: 89, color: '#00bfff', title: 'SQL' },
    { degree: 70, color: '#00bfff', title: 'Figma' },
    { degree: 88, color: '#00bfff', title: 'Bootstrap' },
  ]

  return (
    <div>
      
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
    </div>
  )
}
export default ProgressCircles
