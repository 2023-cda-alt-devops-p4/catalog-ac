import styled from "styled-components";
import { theme } from "../assets/css/theme";

import { Link, Outlet } from "react-router-dom";
import Navbar from "../views/Navbar";

const Header = () => {
	return (
		<HeaderStyled>
			<h3>Header</h3>
			<div className="mobile-Navbar">
				<Navbar />
			</div>
			<div className="extra-icon-home">
				<Link to="/">Retourner vers la page d'accueil</Link>
			</div>
		</HeaderStyled>
	);
};

const HeaderStyled = styled.div`
	border: 2px solid red;
	width: 100vw;
	margin: 30px auto;
	.extra-icon-home {
		display: flex;
		/* visibility: hidden; */
	}
	/* :–☆–:*:–☆–:*:–☆–:*:–☆–:*:–☆–:*:–☆–: */
	/*! -- MEDIA QUERIES --★゜・。。・゜゜・。。・゜☆゜・。。・゜゜・。。・゜★゜・。。・゜゜・。。・゜☆ */
	/* -▼･ェ･▼･ェ･▼･ェ･▼･ェ･▼･ェ･▼･ェ･▼･ェ･▼- */
	@media (max-width: 1023px) {
	}

	@media (max-width: 780px) {
		visibility: hidden;

		.mobile-Navbar {
			display: flex;
			visibility: visible;
			background-color: #85f06d;
		}

		.extra-icon-home {
			display: flex;
			visibility: visible;
			background-color: #e22323;
			position: absolute;
			right: 20px;
			top: 20px;
		}
	}
`;
export default Header;
