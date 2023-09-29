import { Link, Outlet } from "react-router-dom";
import styled from "styled-components";
import { theme } from "../assets/css/theme";
import { FaCircleArrowUp } from "react-icons/fa6";

import Image from "../components/Image";
//import images
import mcdcomplet from "../assets/img/mcdcomplet.gif";

const Uml = () => {
	const scrollToTop = () => {
		window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
	};

	return (
		<MenuStyled>
			{/* use case, diag de classe, séquence */}
			<section className="row_section">
				<ul className="left_column">
					<li>
						<Link to="/uml/uml1">use case, diag de classe, séquence</Link>
					</li>
					<li>
						<Link to="/uml/uml2">use case, diag de classe, séquence</Link>
					</li>
					<li>
						<Link to="/merise/merise2">use case, diag de classe, séquence</Link>
					</li>
				</ul>

				<div className="right_column">
					<h1>La méthode </h1>
					<p></p>

					<div className="container_img">
						<Image src={mcdcomplet} alt="mcd_complet" />
					</div>
				</div>
				<div className="iconScroll">
					<FaCircleArrowUp onClick={scrollToTop} />
				</div>
			</section>
			<div className="outlet_style">
				<Outlet id="content" />{" "}
			</div>
		</MenuStyled>
	);
};
const MenuStyled = styled.div`
	.row_section {
		display: flex;
		flex-direction: row;
		align-items: flex-start;
		justify-content: flex-end;
	}

	.left_column {
		width: 35vw;
		display: flex;
		flex-direction: column;
		justify-content: space-evenly;
		font-weight: ${theme.weights.semiBold};
		font-size: ${theme.fonts.P1};
		font-family: ${theme.fontFamily.fontTitle};
	}

	.row_section ul {
		color: ${theme.colors.white_peach};
		list-style-type: decimal;
		list-style-position: inside;
		margin-left: 20px;
		gap: 1vh;
	}

	.row_section li {
		border-radius: ${theme.borderRadius.extraRound};
		background-color: ${theme.colors.semiDarkOrange};
		color: ${theme.colors.white_peach};
		box-shadow: 5px 5px 10px ${theme.colors.semiDarkAmber};
		padding: ${theme.spacing.xxs};
	}

	/* :–☆–:*:–☆–:*:–☆–:*:–☆–:*:–☆–:*:–☆–: */
	/*//! -- MEDIA QUERIES --★゜・。。・゜゜・。。・゜☆゜・。。・゜゜・。。・゜★゜・。。・゜゜・。。・゜☆ */
	/* -▼･ェ･▼･ェ･▼･ェ･▼･ェ･▼･ェ･▼･ェ･▼･ェ･▼- */

	@media (min-width: 1024px) {
	}

	@media (max-width: 1023px) {
	}

	@media (max-width: 780px) {
	}

	@media (max-width: 300px) {
		.iconScroll {
			font-size: 2rem;
			bottom: 13vh;
			right: 25vw;
		}
	}
`;
export default Uml;
