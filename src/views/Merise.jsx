import { Link, Outlet } from "react-router-dom";
import styled from "styled-components";
import { theme } from "../assets/css/theme";
import { FaCircleArrowUp } from "react-icons/fa6";

import Image from "../components/Image";

//import images
import mcdcomplet from "../assets/img/mcdcomplet.gif";

const Merise = () => {
	const scrollToTop = () => {
		window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
	};

	return (
		<MenuStyled>
			<section className="row_section">
				<ul className="left_column">
					<li>
						<Link to="/merise/merise1">Concepts de bases</Link>
					</li>
					<li>
						<Link to="/merise/merise2">
							Vers une modélisation des Données (niveau Conceptuel)
						</Link>
					</li>
					<li>
						<Link to="/merise/merise3">
							Le MCD - MODELE CONCEPTUEL DES DONNEES
						</Link>
					</li>
					<li>
						<Link to="/merise/merise4">Règles de Passage du MCD au MLD</Link>
					</li>
					<li>
						<Link to="/merise/merise5">
							LE MLD - MODELE LOGIQUE DES DONNEES
						</Link>
					</li>
					<li>
						<Link to="/merise/merise6">Règles de Passage du MLD au MPD</Link>
					</li>
					<li>
						<Link to="/merise/merise7">
							LE MPD - MODELE PHYSIQUE DES DONNEES
						</Link>
					</li>
					<li>
						<Link to="/merise/merise8">Normalisation & lexique</Link>
					</li>
				</ul>

				<div className="right_column">
					<h1>La méthode MERISE</h1>
					<p>
						Méthode d’Etude et de Réalisation Informatique des Systèmes
						d’Entreprise née dans les années 70, à la demande du ministère de
						l’industrie française, pour les administrations.
					</p>

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
				{/*  affiche le contenu d'une navigation imbriquée */}
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

	.right_column {
		padding: ${theme.spacing.sm};
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: 20px;
		width: 70vw;
		height: auto;
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
			align-items: flex-start;
			justify-content: flex-start;
			width: 100vw;
			/* justify-content: center; */
			border: 2px solid blue;
		}
		.left_column {
			width: 50vw;
			display: flex;
			flex-direction: column;
			align-items: flex-start;
			justify-content: flex-start;
			font-size: ${theme.fonts.XS};
			border: 2px solid red;
		}

		.outlet_style {
			/* padding: ${theme.spacing.sm};  */
			border: 3px solid green;
			width: 100%;
			/* overflow: scroll; */
			/* flex-wrap: wrap;  */
		}
	}

	@media (max-width: 300px) {
	}
`;

export default Merise;
