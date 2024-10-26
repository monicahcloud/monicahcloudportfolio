import { FaArrowRight, FaArrowLeft } from 'react-icons/fa'
import { projects } from '../data'
import { useState, useRef } from 'react'

const Portfolio = () => {
  const nextButton = useRef(null)
  const prevButton = useRef(null)
  const carousel = useRef(null)
  const listHTML = useRef(null)
  const [unAcceptClick, setUnAcceptClick] = useState(0)

  const showSlider = (type) => {
    // Disable buttons temporarily
    nextButton.current.style.pointerEvents = 'none'
    prevButton.current.style.pointerEvents = 'none'
    const items = listHTML.current.querySelectorAll('.item')
    carousel.current.classList.remove('next', 'prev')

    if (type === 'next') {
      listHTML.current.appendChild(items[0])
      carousel.current.classList.add('next')
    } else {
      listHTML.current.prepend(items[items.length - 1])
      carousel.current.classList.add('prev')
    }

    // Enable buttons after 2 seconds
    clearTimeout(unAcceptClick)
    const Timeout = setTimeout(() => {
      nextButton.current.style.pointerEvents = 'auto'
      prevButton.current.style.pointerEvents = 'auto'
    }, 2000)

    setUnAcceptClick(Timeout)
  }

  return (
    <>
      <div className="portfolioHeading" id="portfolio">
        <h1>
          Featured <span>Projects</span>
        </h1>
      </div>

      <div className="carousel" ref={carousel}>
        <div className="list" ref={listHTML}>
          {projects.map((project) => {
            const { id, url, title, topic, image, info, git } = project

            return (
              <div className="item" key={id}>
                <img src={image} alt={title} />
                <div className="introduce">
                  <div className="title">{title}</div>
                  <div className="sourceButtons">
                    <a href={url} rel="noopener noreferrer" target="_blank">
                      <button type="button" className="demo">
                        Demo
                      </button>
                    </a>
                    <a href={git} rel="noopener noreferrer" target="_blank">
                      <button type="button" className="github">
                        Source
                      </button>
                    </a>
                  </div>
                </div>
              </div>
            )
          })}

          <div className="arrows">
            <button
              id="prev"
              ref={prevButton}
              onClick={() => showSlider('next')}
            >
              <FaArrowLeft />
            </button>

            <button
              id="next"
              ref={nextButton}
              onClick={() => showSlider('prev')}
            >
              <FaArrowRight />
            </button>
          </div>
        </div>
      </div>
    </>
  )
}

export default Portfolio
