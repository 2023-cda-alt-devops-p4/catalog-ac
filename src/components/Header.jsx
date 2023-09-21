import styled from "styled-components";
import { theme } from "../assets/css/theme";

import { Link, Outlet } from "react-router-dom";
import Navbar from "../views/Navbar";

const Header = () => {
	return (
		<HeaderStyled>
			<h1>Catalogue de diagrammes UML + Merise </h1>
			<Navbar className="mobile-Navbar" />

			<Link className="extra-icon-home" to="/">
				Retourner vers la page d'accueil
			</Link>
		</HeaderStyled>
	);
};

const HeaderStyled = styled.div`
	/* margin: 30px auto; */

	.extra-icon-home {
		display: flex;
		/* visibility: hidden; 
		display: none;  */
	}
	/* :–☆–:*:–☆–:*:–☆–:*:–☆–:*:–☆–:*:–☆–: */
	/*! -- MEDIA QUERIES --★゜・。。・゜゜・。。・゜☆゜・。。・゜゜・。。・゜★゜・。。・゜゜・。。・゜☆ */
	/* -▼･ェ･▼･ェ･▼･ェ･▼･ェ･▼･ェ･▼･ェ･▼･ェ･▼- */

	@media (max-width: 1023px) {
		border: 2px solid red;
		width: 100vw;
		height: 30vh;
		background-color: #24f4ea;
	}

	@media (max-width: 780px) {
		/* visibility: visible;
		background-color: #395233;
	 */
		height: 20vh;
		h1 {
			border: 1px solid black;
			margin: 0px auto;
			background-color: #efaf6a;
		}

		.mobile-Navbar {
			display: flex;
			visibility: visible;
			background-color: #d0f832;
			height: 100vh;
		}

		.extra-icon-home {
			display: flex;
			visibility: visible;
			background-color: #e22323;
			position: fixed;
			z-index: 10;
			right: 20px;
			top: 20px;
		}
	}
`;
export default Header;
