import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import './Left.css'
// import { Link } from 'react-router-dom';


function Left1() {
	return (
		<>
			<div className="courses-container">
				<div className="course">
					<div className="course-preview">
						<h6>course</h6>
						<h2>  Java</h2>

					</div>
					<div className="course-info">
						<div className="progress-container">
						</div>
						Java is a general-purpose programming language that is class-based and object-oriented. The programming language is structured in such a way that developers can write code anywhere and run it anywhere without worrying about the underlying computer architecture. It is also referred to as write once, run anywhere (WORA).</div>
				</div>
			</div>
			{/* <Link to='/left'>h1</Link> */}
		</>
	)
}

export default Left1