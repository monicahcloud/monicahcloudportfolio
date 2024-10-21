import pic2 from '../images/4-removebg-preview.png'
import pic3 from '../images/2-removebg-preview.png'
import pic5 from '../images/5-removebg-preview.png'
import pic4 from '../images/4-removebg-preview.png'
import pic7 from '../images/7-removebg-preview.png'
import pic9 from '../images/9-removebg-preview.png'
import { FaArrowRight, FaArrowLeft } from 'react-icons/fa'

import { useState, useRef } from 'react'

const Portfolio = () => {
  const nextButton = useRef(null)
  const prevButton = useRef(null)
  const carousel = useRef(null)
  const listHTML = useRef(null)
  const [unAcceptClick, setUnAcceptClick] = useState(0)

  const showSlider = (type) => {
    //Disable buttons temporarily
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
        <h1
          style={{
            color: '#fff',
            textAlign: 'right',
            fontSize: '3.3rem',
            textDecoration: 'none',
            paddingRight: '10rem',
          }}
        >
          Featured <span> Projects</span>
        </h1>
      </div>

      <div className="carousel" ref={carousel}>
        <div className="list" ref={listHTML}>


          <div className="item">
            <img src={pic2} alt="" className="" />
            <div className="introduce">
              <div className="topic">Business Website</div>
              <div className="title">Crown of Locs and Natural Hair LLC</div>
              <div className="des">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut ex
                omnis obcaecati? At rerum laudantium vitae. Perferendis, labore
                iure!
              </div>
              <div className="sourceButtons">
               <a href='www.crownoflocs.com' > <button type="button" className="demo">
                  Demo
                </button></a>
                <button type="button" className="github">
                  Source
                </button>
              </div>
            </div>
          </div>


          <div className="item">
            <img src={pic3} alt="" className="" />
            <div className="introduce">
              <div className="topic">Business Website</div>
              <div className="title">Nerahs Passion</div>
              <div className="des">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut ex
                omnis obcaecati? At rerum laudantium vitae. Perferendis, labore
                iure!
              </div>
              <div className="sourceButtons">
                <button type="button" className="demo">
                  Demo
                </button>
                <button type="button" className="github">
                  Source
                </button>
              </div>
            </div>
          </div>
          <div className="item">
            <img src={pic4} alt="" className="" />
            <div className="introduce">
              <div className="topic">Landing Page</div>{' '}
              <div className="title">DJ Sean Deezy</div>
              <div className="des">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut ex
                omnis obcaecati? At rerum laudantium vitae. Perferendis, labore
                iure!
              </div>
              <div className="sourceButtons">
                <button type="button" className="demo">
                  Demo
                </button>
                <button type="button" className="github">
                  Source
                </button>
              </div>
            </div>
          </div>
          <div className="item">
            <img src={pic5} alt="" className="" />
            <div className="introduce">
              <div className="topic">Business Website</div>
              <div className="title">Crown of Locs and Natural Hair LLC</div>
              <div className="des">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut ex
                omnis obcaecati? At rerum laudantium vitae. Perferendis, labore
                iure!
              </div>
              <div className="sourceButtons">
                <button type="button" className="demo">
                  Demo
                </button>
                <button type="button" className="github">
                  Source
                </button>
              </div>
            </div>
          </div>
          <div className="item">
            <img src={pic9} alt="" className="" />
            <div className="introduce">
              <div className="topic">Blog Website</div>{' '}
              <div className="title">Keto and PCOS: Monicahs Journey</div>
              <div className="des">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut ex
                omnis obcaecati? At rerum laudantium vitae. Perferendis, labore
                iure!
              </div>
              <div className="sourceButtons">
                <a href="www.crownoflocs.com">
                  <button type="button" className="demo">
                    Demo
                  </button>
                </a>
                <button type="button" className="github">
                  Source
                </button>
              </div>
            </div>
          </div>
          <div className="item">
            <img src={pic7} alt="" className="" />
            <div className="introduce">
              <div className="topic">Business Website</div>
              <div className="title">Crown of Locs and Natural Hair LLC</div>
              <div className="des">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut ex
                omnis obcaecati? At rerum laudantium vitae. Perferendis, labore
                iure!
              </div>
              <div className="sourceButtons">
                <button type="button" className="demo">
                  Demo
                </button>
                <button type="button" className="github">
                  Source
                </button>
              </div>
            </div>
          </div>

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
