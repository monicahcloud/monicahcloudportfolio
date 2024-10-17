import pic2 from '../images/4-removebg-preview.png'
import pic3 from '../images/2-removebg-preview.png'
import pic5 from '../images/5-removebg-preview.png'
import pic4 from '../images/4-removebg-preview.png'
import pic7 from '../images/7-removebg-preview.png'
import pic9 from '../images/9-removebg-preview.png'
import { FaArrowRight, FaArrowLeft } from 'react-icons/fa'

import { useState } from 'react'

const Portfolio = () => {
	let nextButton = document.getElementById('next')
	let prevButton = document.getElementById('prev')
	let backButton = document.getElementById('back')
	let seeMoreButtons = document.querySelectorAll('.sourceButtons')
	let carousel = document.querySelector('.carousel')
	let listHTML = document.querySelector('.carousel .list')

	const [currentProject, setCurrentProject] = useState(0)

	const prevSlide = () => {
		
	}
	prevSlide()
	const nextSlide = () => {}

	//   nextButton.onclick = function () {
	//     showSlider('next')
	//   }
	//   prevButton.onclick = function () {
	//     showSlider('prev')
	//   }
	//   let unAcceppClick
	//   const showSlider = (type) => {
	//     nextButton.style.pointerEvents = 'none'
	//     prevButton.style.pointerEvents = 'none'

	//     carousel.classList.remove('next', 'prev')
	//     let items = document.querySelectorAll('.carousel .list .item')
	//     if (type === 'next') {
	//       listHTML.appendChild(items[0])
	//       carousel.classList.add('next')
	//     } else {
	//       listHTML.prepend(items[items.length - 1])
	//       carousel.classList.add('prev')
	//     }
	//     clearTimeout(unAcceppClick)
	//     unAcceppClick = setTimeout(() => {
	//       nextButton.style.pointerEvents = 'auto'
	//       prevButton.style.pointerEvents = 'auto'
	//     }, 2000)
	//   }
	//   seeMoreButtons.forEach((button) => {
	//     button.onclick = function () {
	//       carousel.classList.remove('next', 'prev')
	//       carousel.classList.add('showDetail')
	//     }
	//   })
	//   backButton.onclick = function () {
	//     carousel.classList.remove('showDetail')
	//   }

	return (
		<>
		<div className="portfolioHeading" id="portfolio"> 
			<h1
				style={{
					color: '#fff',
					textAlign: 'right',
					marginTop: '2rem',
					fontSize: '3.3rem',
					textDecoration: 'none',
					paddingRight: '10rem',
				}}>
				Featured <span> Projects</span>
			</h1></div>

			<div className="carousel">
				<div className="list">
					<div className="item"></div>
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
						<button id="prev" onClick={prevSlide} >
							<FaArrowLeft/>
						</button>
						<button id="next" onClick={nextSlide}>
							<FaArrowRight/>
						</button>
					</div>
				</div>
			</div>
		</>
	)
}

export default Portfolio
