import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import './nav.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import "bootstrap/dist/css/bootstrap.min.css";

//_______________________________//

const Navbar = () => {
	return (
		<hea der>
			<nav className='navbar'>
				<section className="logo-section">
					<Link to="/">
						<img src="/photos/Logo.png" alt="logo" className='logo' />
					</Link>
				</section>
				{/*  */}
				<section className='nav-links'>
					<ul>
						<li>
							<NavLink to="/home">Home</NavLink>
						</li>
						<li>
							<NavLink to="/cart">Cart</NavLink>
						</li>
						<li>
							<NavLink to="/cart">Cart</NavLink>
						</li>
						<li>
							<NavLink to="/cart">Cart</NavLink>
						</li>
					</ul>
				</section>
				<section className='search-section'>

				</section>
				<section className='cart-section'>

				</section>
			</nav>
		</hea>
	)
}

export default Navbar
