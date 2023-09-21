import styled from "styled-components";
import { theme } from "../assets/css/theme";

import { Link } from "react-router-dom";

const Navbar = () => {
	return (
		<NavbarStyled>
			<div className="cheatsheet">
				<Link to="/cheatsheet">Cheatsheet</Link>
			</div>
			<div className="uml">
				<Link to="/uml">UML</Link>
			</div>
			<div className="merise">
				<Link to="/merise">Merise</Link>
			</div>
			<div className="ressources">
				<Link to="/Ressources">Ressources</Link>
			</div>
		</NavbarStyled>
	);
};

const NavbarStyled = styled.div`
	border: 1px solid black;
	width: 100vw;
	height: 20vh;
	display: flex;
	align-items: center;
	justify-content: space-evenly;
	color: ${theme.colors.primary};
	border-bottom: 1px solid black;
	/* .extraMenu {
		display: flex;
		visibility: hidden;
	} */

	/* :–☆–:*:–☆–:*:–☆–:*:–☆–:*:–☆–:*:–☆–: */
	/*//! -- MEDIA QUERIES --★゜・。。・゜゜・。。・゜☆゜・。。・゜゜・。。・゜★゜・。。・゜゜・。。・゜☆ */
	/* -▼･ェ･▼･ェ･▼･ェ･▼･ェ･▼･ェ･▼･ェ･▼･ェ･▼- */

	@media (max-width: 1023px) {
		display: flex;
		visibility: visible;
		/* background-color: #5aea39; */
	}

	@media (max-width: 780px) {
		visibility: visible;
		flex-wrap: wrap;
		width: 100%;
		height: 42px;
		font-size: 16px;
		border-radius: 18px;
		/* background-color: #d3d1d1; */
		/* z-index: 10; */
		position: fixed;
		bottom: 2px;

		.merise {
			/* background-color: #e22323; */
		}
	}
`;
export default Navbar;
