import React from 'react'
import{Link, NavLink} from 'react-router-dom'
const Navbar = () => {
	return (
		<header>
			<nav>
				<	Link to="/">LOGO</Link>
			</nav>
			{/*  */}
			<ul>
				<li>
					<NavLink to="/home">Home</NavLink>
				</li>

				<li>
					<NavLink to="/cart">Cart</NavLink>
				</li>
				</ul>
		</header>
	)
}

export default Navbar
