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

	height: 10vh;
	display: flex;
	align-items: center;
	justify-content: space-evenly;
	color: ${theme.colors.primary};
	border-bottom: 1px solid black;
	font-family: ${theme.fontFamily.fontTitle};
	font-weight: ${theme.weights.bold};
	font-size: ${theme.fonts.P3};

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
	}

	/* .extraMenu {
		display: flex;
		visibility: hidden;
	} */

	/* :–☆–:*:–☆–:*:–☆–:*:–☆–:*:–☆–:*:–☆–: */
	/*//! -- MEDIA QUERIES --★゜・。。・゜゜・。。・゜☆゜・。。・゜゜・。。・゜★゜・。。・゜゜・。。・゜☆ */
	/* -▼･ェ･▼･ェ･▼･ェ･▼･ェ･▼･ェ･▼･ェ･▼･ェ･▼- */

	@media (max-width: 1400px) {
		background-color: #ecf807;
		max-width: 100vw;
		height: 14vh;
		display: flex;
		visibility: visible;
		border-radius: ${theme.borderRadius.extraRound};
		box-shadow: 5px 5px 10px #444444;
	}

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
		background-color: #fdfdfd;
		/* z-index: 10; */
		position: fixed;
		bottom: 2px;

		.merise {
			/* background-color: #e22323; */
		}
	}
`;
export default Navbar;
