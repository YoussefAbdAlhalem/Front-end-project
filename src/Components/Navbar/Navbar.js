import {React} from 'react'
import { Link, NavLink } from 'react-router-dom'
import './nav.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import "bootstrap/dist/css/bootstrap.min.css";
import { GoSearch } from "react-icons/go";
import { PiShoppingCartThin } from "react-icons/pi";
import { IoIosMenu } from "react-icons/io";
import { IoCloseOutline } from "react-icons/io5";

//_______________________________//

const Navbar = () => {
	return (
		<nav className='navbar' user-select="none">
			<div className='nav-container'>
				<section className="logo-section">
					<Link to="/">
						<img src="/photos/Logo.png" alt="logo" className='logo' />
					</Link>
				</section>
				{/*  */}
				<section className="nav-right">
					<section className='side-bar'>
						<section className='nav-burger menu' onClick={() => document.querySelector('.side-bar').classList.remove('show')}>
							<i className='close'><IoCloseOutline /></i>
						</section>
						<li>
							<NavLink to="/home" className={"nav-item"}>Home</NavLink>
						</li>
						<li>
							<NavLink to="/cart" className={"nav-item"}>Pages</NavLink>
						</li>
						<li>
							<NavLink to="/cart" className={"nav-item"}>Products</NavLink>
						</li>
						<li>
							<NavLink to="/login" className={"nav-item"}>Login</NavLink>
						</li>
						<li>
							<NavLink to="/register" className={"nav-item"}>Register</NavLink>
						</li>
						<li>
							<NavLink to="/cart" className={"nav-item"}>Contact us</NavLink>
						</li>
					</section>
					<section className='nav-list'>
						<li>
							<NavLink to="/home" className={"nav-item"}>Home</NavLink>
						</li>
						<li>
							<NavLink to="/cart" className={"nav-item"}>Pages</NavLink>
						</li>
						<li>
							<NavLink to="/cart" className={"nav-item"}>Products</NavLink>
						</li>
						<li>
							<NavLink to="/login" className={"nav-item"}>Login</NavLink>
						</li>
						<li>
							<NavLink to="/register" className={"nav-item"}>Register</NavLink>
						</li>
						<li>
							<NavLink to="/cart" className={"nav-item contact"}>Contact us</NavLink>
						</li>
					</section>
					<section className='search-section'>
						<i><GoSearch /></i>
					</section>
					<section  className='cart-section'>
						<NavLink to="/cart" ><i><PiShoppingCartThin /></i></NavLink>
					</section>
					{/* _________________________________________________________________________ */}
					<section className='nav-burger' onClick={() => document.querySelector('.side-bar').classList.add('show')}>
						<i className='menu'><IoIosMenu /></i>
					</section>
				</section>
			</div>
		</nav>
	)
}

export default Navbar
