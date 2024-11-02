import { useRef, useState } from 'react'
import emailjs from '@emailjs/browser'

const Contact = () => {
	const form = useRef()

	const [selectedWebsite, setSelectedWebsite] = useState('')

	const sendEmail = (e) => {
		e.preventDefault()

		emailjs
			.sendForm('service_ecjoxco', 'template_8s24eyo', form.current, {
				publicKey: 'XnLTFneXRVkwkphGD',
			})
			.then(
				() => {
					e.target.reset()
					alert('Email Sent!')
				},
				(error) => {
					console.log('FAILED...', error.text)
				}
			)
	}

	return (
		<>
			<section className=" contactPage" id="contact">
				<div className="contactSection">
					<div className="contactPageTitle">
						<h1
							style={{
								color: '#fff',
								textAlign: 'center',
								marginBottom: '2rem',
								fontSize: '3.3rem',
								paddingRight: '3rem',
							}}>
							Let&#8217;s work together on{' '}
							<span>
								{' '}
								<br />
								something great
							</span>
						</h1>
					</div>
					<span className="contactDescription">
						I&#8217;m excited to collaborate on projects that push boundaries
						and create meaningful impact. Let&#8217;s build something
						exceptional together.
					</span>
					<form ref={form} className="contactForm" onSubmit={sendEmail}>
						<input
							type="text"
							className="name"
							placeholder="Your Name"
							name="name"
						/>
						<input
							type="email"
							className="email"
							placeholder="Your Email"
							name="email"
						/>
						<input
							type="phone"
							className="phone"
							placeholder="Your Phone"
							name="phone"
						/>
						<select
							className="dropdown"
							id="dropdown"
							value={selectedWebsite}
							onChange={(e) => setSelectedWebsite(e.target.value)}
							name="dropdown">
							<option value="">Select website type</option>
							<option value="Ecommerce Website">Ecommerce Website</option>
							<option value="Business Website">Business Website</option>
							<option value="Blog Website">Blog Website</option>
							<option value="Personal Portfolio Website">
								Personal Portfolio Website
							</option>
							<option value="Event Website">Event Website</option>
							<option value="Nonprofit Website">Nonprofit Website</option>
							<option value="Consulting Website">Consulting Website</option>
							<option value="Booking Website">Booking Website</option>
							<option value="Educational Website">Educational Website</option>
						
							
						</select>
						<p
							style={{
								color: '#fff',
								textAlign: 'center',
								marginBottom: '.5rem',
								fontSize: '1.5rem',
							}}>
							Selected option: {selectedWebsite}
						</p>
						<textarea
							name="message"
							rows={5}
							placeholder="Your Message"
							className="msg"></textarea>
						<button className="submitBtn" type="submit" value="Send">
							Submit
						</button>
					</form>
				</div>
			</section>
		</>
	)
}

export default Contact
