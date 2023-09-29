import styled from "styled-components";
import { theme } from "../assets/css/theme";
import { FaCircleArrowUp } from "react-icons/fa6";
import { Link, Outlet } from "react-router-dom";

const Uml = () => {
	const scrollToTop = () => {
		window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
	};

	return (
		<MenuUML_Styled>
			<section className="row_section">
				<ul className="left_column">
					<li>
						<Link to="/uml/uml1">Service uml1</Link>{" "}
					</li>
					<li>
						<Link to="/uml/uml2">Service uml2</Link>{" "}
					</li>

					<li>
						<Link to="/uml/uml1">{/* use case, diag de classe, séquence */}</Link>
					</li>
					<li>
						<Link to="/uml/uml1"></Link>
					</li>
					<li>
						<Link to="/merise/merise2"></Link>
					</li>
					<li>
						<Link to="/merise/merise2"></Link>
					</li>
					<li>
						<Link to="/merise/merise2"></Link>
					</li>
					<li>
						<Link to="/merise/merise2"></Link>
					</li>
					<li>
						{" "}
						<Link to="/merise/merise1"></Link>
					</li>
				</ul>
				<div className="right_column">
					<h1>Infos uml</h1>
					<p>
						Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quo
						veritatis ea earum nihil culpa quos quibusdam error vitae dolorum
						sint impedit non necessitatibus expedita distinctio fugit, suscipit
						consectetur tempora laboriosam? Debitis tempore, nulla a repudiandae
						dignissimos necessitatibus esse quaerat voluptatibus blanditiis,
						fugit aspernatur culpa ratione harum autem quo, sequi aperiam
						corrupti neque pariatur. Et, vel blanditiis? Dolorem at excepturi
						tempore. Sequi, odit numquam itaque ipsam dolores magni quas tempora
						impedit atque fuga explicabo, nam facere nesciunt quae, officiis
						placeat molestias. Distinctio nulla pariatur et dignissimos tempora
						commodi labore cupiditate ut?
					</p>
				</div>

				<div className="iconScroll">
					<FaCircleArrowUp onClick={scrollToTop} />
				</div>
			</section>
			<div className="outlet_style">
				<Outlet /> {/*  affiche le contenu d'une navigation imbriquée */}
			</div>
		</MenuUML_Styled>
	);
};
const MenuUML_Styled = styled.div`
	/* color: ${theme.colors.darkMint};
	font-weight: ${theme.weights.regular};
	font-size: ${theme.fonts.P0}; */

	.iconScroll {
		color: ${theme.colors.kumquat};
		font-size: 3rem;
		position: fixed;
		bottom: 13vh;
		right: 5vw;
	}

	.iconScroll:hover {
		color: ${theme.colors.mint};
		cursor: pointer;
	}

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

	ul {
		list-style-type: decimal;
		list-style-position: inside;
		margin-left: 20px;
		gap: 1vh;
	}

	li {
		border-radius: ${theme.borderRadius.extraRound};
		background-color: ${theme.colors.semiDarkOrange};
		color: ${theme.colors.white_peach};
		box-shadow: 5px 5px 10px ${theme.colors.semiDarkAmber};
		padding: ${theme.spacing.xxs};
	}

	a {
		font-weight: ${theme.weights.regular};
		font-size: ${theme.fonts.P0};
		color: ${theme.colors.white_peach};
	}

	a:hover {
		color: ${theme.colors.amber};
	}

	.right_column {
		padding: ${theme.spacing.sm};
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: 20px;
		width: 70vw;
		height: auto;
	}
	/* .right_column p {
		border: 2px solid red;
		text-justify: auto;
		display: flex;

		width: 65vw;
	} */

	.outlet_style {
		padding: ${theme.spacing.md};
		display: flex;
		flex-direction: column;
		align-items: flex-start;
		justify-content: flex-start;
		/* width: 100vw; */
	}

	/* :–☆–:*:–☆–:*:–☆–:*:–☆–:*:–☆–:*:–☆–: */
	/*//! -- MEDIA QUERIES --★゜・。。・゜゜・。。・゜☆゜・。。・゜゜・。。・゜★゜・。。・゜゜・。。・゜☆ */
	/* -▼･ェ･▼･ェ･▼･ェ･▼･ェ･▼･ェ･▼･ェ･▼･ェ･▼- */

	@media (max-width: 2000px) {
	}

	@media (max-width: 1023px) {
	}

	@media (max-width: 780px) {
		.row_section {
			display: flex;
			flex-direction: column;
			align-items: center;
			/* justify-content: center; */
		}
		.left_column {
			width: 80vw;
			display: flex;
			/* flex-direction: column;
		justify-content: space-evenly; */
			font-size: ${theme.fonts.XS};
		}

		@media (max-width: 300px) {
			.iconScroll {
				font-size: 2rem;
				bottom: 13vh;
				right: 25vw;
			}
		}
	}
`;
export default Uml;
