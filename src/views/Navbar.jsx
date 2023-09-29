import styled from "styled-components";
import { theme } from "../assets/css/theme";
import { Link } from "react-router-dom";
import { FaHome, FaLink } from "react-icons/fa";
import { GoProjectSymlink } from "react-icons/go";
import { SiUml } from "react-icons/si";
// import { ImMenu } from "react-icons/im";		<ImMenu className="icon" />
import { BsFillDiagram3Fill } from "react-icons/bs";

const Navbar = () => {
	return (
		<NavbarStyled>
			<div className="btn_menu">
				<GoProjectSymlink className="icon" />
				<Link to="/cheatsheet" aria-label="aller sur la page pense-bête">Cheatsheet</Link>
			</div>
			<div className="btn_menu">
				<SiUml className="icon" />
				<Link to="/uml">UML</Link>
			</div>
			<div className="btn_menu">
				<BsFillDiagram3Fill className="icon" />
				<Link to="/merise">MERISE</Link>
			</div>
			<div className="btn_menu">
				<FaLink className="icon" />
				<Link to="/Ressources">Ressources</Link>
			</div>
		</NavbarStyled>
	);
};

const NavbarStyled = styled.div`
	margin-bottom: 20px;
	margin-left: 20px;
	bottom: 2vh;
	display: flex;
	justify-content: space-evenly;
	font-family: ${theme.fontFamily.fontTitle};
	font-size: ${theme.fonts.P3};
	background-color: ${theme.colors.white_peach};
	color: ${theme.colors.darkMint};
	border-radius: ${theme.borderRadius.extraRound};
	box-shadow: 5px 5px 10px ${theme.colors.greySemiDark};

	.icon {
		margin-right: 10px;
		height: 30px;
		width: 30px;
		display: inline;
	}

	.btn_menu {
		display: flex;
		align-items: center;
		justify-content: center;
		color: ${theme.colors.semiDarkAmber};
	}

	.btn_menu a {
		font-weight: ${theme.weights.heavy};
		font-size: ${theme.fonts.P3};
		color: ${theme.colors.darkOrange};
		background-color: ${theme.colors.white_peach};
	}

	/* :–☆–:*:–☆–:*:–☆–:*:–☆–:*:–☆–:*:–☆–: */
	/*//! -- MEDIA QUERIES --★゜・。。・゜゜・。。・゜☆゜・。。・゜゜・。。・゜★゜・。。・゜゜・。。・゜☆ */
	/* -▼･ェ･▼･ェ･▼･ェ･▼･ェ･▼･ェ･▼･ェ･▼･ェ･▼- */

	@media (min-width: 1024px) {
		max-width: 100%;
		height: 14vh;
		.icon {
			margin: 3px 5;
			height: 40px;
			width: 40px;
			display: inline;
		}
	}

	@media (max-width: 1023px) {
		height: 10vh;
	}

	@media (max-width: 780px) {
		flex-wrap: wrap;
		position: fixed;
		height: 8vh;
		width: 95vw;
		box-shadow: -5px -5px 10px 1px ${theme.colors.greySemiDark}; /* offset-x | offset-y | blur-radius | spread-radius | color */
	}

	@media (max-width: 300px) {
		height: 6vh;
		font-size: ${theme.fonts.XXS};

		.icon {
			margin: 2px 0;
			height: 10px;
			width: 10px;
			display: inline;
		}
	}
`;
export default Navbar;
