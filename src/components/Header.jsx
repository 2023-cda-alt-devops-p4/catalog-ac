import styled from "styled-components";
import { theme } from "../assets/css/theme";
import { FaHome, FaLink } from "react-icons/fa";
import { Link, Outlet } from "react-router-dom";
import Navbar from "../views/Navbar";

const Header = () => {
	return (
		<HeaderStyled>
			<h1>Catalogue de diagrammes UML + Merise </h1>
			<div className="navbar-center">
				<Navbar className="mobile-Navbar" />
			</div>
			<Link
				className="extra-icon-home"
				to="/"
				aria-label="aller sur la page d'acceuil"
			>
				<FaHome className="icon" />
			</Link>
		</HeaderStyled>
	);
};

const HeaderStyled = styled.header`
	h1 {
		display: flex;
		justify-content: center;
		padding: 7px;
		background-color: ${theme.colors.semiDarkOrange};
		color: ${theme.colors.white_peach};
		font-family: ${theme.fontFamily.fontTitle};
		font-weight: ${theme.weights.bold};
		font-size: ${theme.fonts.P3};
		margin-bottom: 10px;
	}

	/* :–☆–:*:–☆–:*:–☆–:*:–☆–:*:–☆–:*:–☆–: */
	//*! -- MEDIA QUERIES --★゜・。。・゜゜・。。・゜☆゜・。。・゜゜・。。・゜★゜・。。・゜゜・。。・゜☆ */
	/* -▼･ェ･▼･ェ･▼･ェ･▼･ェ･▼･ェ･▼･ェ･▼･ェ･▼- */

	@media (min-width: 782px) {
		/* width: 100vw; */

		.extra-icon-home {
			/* visibility: visible; */
			font-weight: ${theme.weights.bold};
			border: none;
			border-radius: ${theme.borderRadius.extraRound};
			color: ${theme.colors.white_peach};
			padding: ${theme.spacing.xs};
			position: absolute;
			z-index: 10;
			left: 20px;
			top: 1vh;
		}

		.extra-icon-home:hover {
			box-shadow: 5px 5px 10px #49dfbe;
		}
	}

	@media (min-width: 781px) and (max-width: 900px) {
	}

	@media (max-width: 780px) {
		h1 {
			padding: 5px;
			font-size: ${theme.fonts.P0};
		}

		.extra-icon-home {
			background-color: ${theme.colors.semiDarkAmber};
			font-weight: ${theme.weights.bold};
			border: none;
			border-radius: ${theme.borderRadius.extraRound};
			color: ${theme.colors.white_peach};
			box-shadow: 5px 5px 10px ${theme.colors.white_peach};
			padding: ${theme.spacing.xxs};
			position: fixed;
			z-index: 10;
			right: 5vw;
			top: 5vh;
		}

		@media (max-width: 300px) {
		}
	}
`;
export default Header;
