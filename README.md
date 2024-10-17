# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh


	<!-- {projects.map((project) => {
				const { id, image, url, github, info, title, topic } = project
				return (
					<div key={id} className="carousel">
						<div className="list">
							<div className="item">
								<div key={id}>
									<img src={image} alt={title} className="" />
									<div className="introduce">
										<div className="topic">{topic}</div>
										<div className="title">{title}</div>
										<div className="des">{info}</div>
										<div className="specifications">
											<div className="sourceButtons">
												<a href={url}>
													<button type="button" className="demo">
														Demo
													</button>
												</a>
												<a href={github}>
													<button type="button" className="demo">
														Source
													</button>
												</a>
												{/* <button type="button" className="github"></button> */}
											</div>
										</div>
										{/* <button className="seeMore">See More </button> */}
									</div>
								</div>
							</div>
						</div>
					</div>
				)
			})} -->