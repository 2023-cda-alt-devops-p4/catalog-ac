import styled from "styled-components";
import { theme } from "../assets/css/theme";

import { Link, Outlet } from "react-router-dom";
import Navbar from "../views/Navbar";

const Header = () => {
	return (
		<HeaderStyled>
			<h1>Catalogue de diagrammes UML + Merise </h1>
			<div className="navbar-center">
				<Navbar className="mobile-Navbar" />
			</div>
			<Link className="extra-icon-home" to="/">
				Retourner vers la page d'accueil
			</Link>
		</HeaderStyled>
	);
};

const HeaderStyled = styled.header`
	/* :–☆–:*:–☆–:*:–☆–:*:–☆–:*:–☆–:*:–☆–: */
	/*! -- MEDIA QUERIES --★゜・。。・゜゜・。。・゜☆゜・。。・゜゜・。。・゜★゜・。。・゜゜・。。・゜☆ */
	/* -▼･ェ･▼･ェ･▼･ェ･▼･ェ･▼･ェ･▼･ェ･▼･ェ･▼- */

	@media (min-width: 781px) and (max-width: 1023px) {
		/* background-color: #24f4ea; */
		width: 100vw;
		height: 30vh;
	}

	@media (max-width: 780px) {
		.navbar-center {
			display: flex;
			justify-content: center;
		}

		h1 {
			/* background-color: #efaf6a; */
			border: 1px solid black;
			margin: 0px auto;
			height: 5vh;
		}

		.mobile-Navbar {
			/* background-color: #d0f832; */
			display: flex;
			visibility: visible;
			height: 15vh;
		}

		.extra-icon-home {
			/* background-color: #e22323; */
			visibility: visible;
			position: fixed;
			z-index: 10;
			right: 20px;
			top: 20px;
		}
	}
`;
export default Header;
