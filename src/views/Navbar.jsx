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
	/* border: 1px solid black; */
	/* width: 100vw; */

	/* margin: 0px;
	height: 10vh;
	display: flex;
	align-items: center;
	justify-content: space-evenly;
	color: ${theme.colors.primary};
	border-bottom: 1px solid black;
	font-family: ${theme.fontFamily.fontTitle};
	font-weight: ${theme.weights.bold};
	font-size: ${theme.fonts.P3}; */

	.icon {
		/* border: 1px solid red; */
		margin-right: 10px;
		height: 30px;
		width: 30px;
		/* gap: 50px; */
		display: inline;
		/* flex-direction: column;
		 */
	}

	.btn_menu {
		/* border: 2px solid red; */
		display: flex;
		align-items: center;
		justify-content: center;
		color: ${theme.colors.semiDarkAmber};
	}

	a {
		color: ${theme.colors.darkOrange};
	}

	/* .extraMenu {
		display: flex;
		visibility: hidden;
	} */

	/* :–☆–:*:–☆–:*:–☆–:*:–☆–:*:–☆–:*:–☆–: */
	/*//! -- MEDIA QUERIES --★゜・。。・゜゜・。。・゜☆゜・。。・゜゜・。。・゜★゜・。。・゜゜・。。・゜☆ */
	/* -▼･ェ･▼･ェ･▼･ェ･▼･ェ･▼･ェ･▼･ェ･▼･ェ･▼- */

	@media (max-width: 2000px) {
		background-color: #76c84d;
		max-width: 100vw;
		max-width: 100%;
		margin-left: 20px;
		height: 14vh;
		display: flex;
		justify-content: space-evenly;
		visibility: visible;
		border-radius: ${theme.borderRadius.extraRound};
		box-shadow: 5px 5px 10px #444444;
		font-family: ${theme.fontFamily.fontTitle};
		font-weight: ${theme.weights.bold};
		font-size: ${theme.fonts.P3};
	}

	@media (max-width: 1023px) {
		background-color: ${theme.colors.white_peach};
		background-color: #ffba1a;
		color: ${theme.colors.darkOrange};
		visibility: visible;

		/* width: calc(100vw - (100vw-20px))-20px; */
		/* width: calc((100vw-20px))-20px; */
		/* min-width: 99vw; */
		margin-left: 20px;
		height: 10vh;
		/* display: flex;
		align-items: center;
		justify-content: space-evenly; */

		border-bottom: 1px solid black;
		font-family: ${theme.fontFamily.fontTitle};
		font-weight: ${theme.weights.bold};
		font-size: ${theme.fonts.P3};
	}

	@media (max-width: 780px) {
		visibility: visible;
		flex-wrap: wrap;
		height: 7vh;
		/* width: calc((100vw-20px))-20px;
		width: calc(100vw - (100vw-20px))-20px; */
		 width: 95vw; 
		/* box-sizing: border-box; */
		display: flex;
		justify-content: space-evenly;
		font-size: 16px;
		border-radius: 18px;
		background-color: ${theme.colors.white_peach};
		background-color: #efc60f;
		box-shadow: -5px -5px 10px 1px ${theme.colors.greySemiDark}; /* offset-x | offset-y | blur-radius | spread-radius | color */
		position: fixed;
		bottom: 20px;
		/* left: 2px; */

		/* margin: 5px 5px; */
		/* padding: 0px; */
		/* display: flex;
		justify-content: space-evenly; */
	}
`;
export default Navbar;
