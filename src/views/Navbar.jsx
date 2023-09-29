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
				<Link to="/cheatsheet">Cheatsheet</Link>
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
	font-family: ${theme.fontFamily.fontTitle};

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

	/* a {
		color: ${theme.colors.darkOrange};
		background-color: ${theme.colors.white_peach};
	} */

	/* :–☆–:*:–☆–:*:–☆–:*:–☆–:*:–☆–:*:–☆–: */
	/*//! -- MEDIA QUERIES --★゜・。。・゜゜・。。・゜☆゜・。。・゜゜・。。・゜★゜・。。・゜゜・。。・゜☆ */
	/* -▼･ェ･▼･ェ･▼･ェ･▼･ェ･▼･ェ･▼･ェ･▼･ェ･▼- */

	@media (min-width: 1024px) {
		/* visibility: visible; */
		max-width: 100%;
		margin-left: 20px;
		height: 14vh;
		display: flex;
		justify-content: space-evenly;
		border-radius: ${theme.borderRadius.extraRound};
		background-color: ${theme.colors.white_peach};
		box-shadow: 5px 5px 10px ${theme.colors.greySemiDark};
		/* font-family: ${theme.fontFamily.fontTitle}; */
		font-weight: ${theme.weights.bold};
		font-size: ${theme.fonts.P3};
	}

	@media (max-width: 1023px) {
		/* visibility: visible; */
		background-color: ${theme.colors.white_peach};
		color: ${theme.colors.darkOrange};
		margin-left: 20px;
		height: 10vh;
		font-weight: ${theme.weights.bold};
		font-size: ${theme.fonts.P3};
		display: flex;
		justify-content: space-evenly;
	}

	@media (max-width: 780px) {
		/* visibility: visible; */
		flex-wrap: wrap;
		height: 8vh;
		width: 95vw;
		display: flex;
		justify-content: space-evenly;
		font-size: ${theme.fonts.P0};
		border-radius: ${theme.borderRadius.extraRound};
		background-color: ${theme.colors.white_peach};
		box-shadow: -5px -5px 10px 1px ${theme.colors.greySemiDark}; /* offset-x | offset-y | blur-radius | spread-radius | color */
		position: fixed;
		bottom: 1vh;
	}

	@media (max-width: 300px) {
		height: 6vh;
		font-size: ${theme.fonts.XXS};
		bottom: 2vh;

		.icon {
			margin: 2px 0;
			height: 10px;
			width: 10px;
			display: inline;
		}
	}
`;
export default Navbar;
