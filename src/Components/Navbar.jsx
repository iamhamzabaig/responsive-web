import { Link, NavLink } from "react-router-dom";
import "./navbar.css";
import Logo from "../images/logo.png";
import { links } from "../data";

const Navbar = () => {
	return (
		<nav>
			<div className="container nav__container">
				<Link to="/" className="logo">
					<img src={Logo} alt="logoimage" />
				</Link>
				<ul>
					{links.map(({ name, path }, index) => {
						return <NavLink to={path}>{name}</NavLink>;
					})}
				</ul>
			</div>
		</nav>
	);
};

export default Navbar;
