import React, { useState } from "react";
import { Link, Outlet } from "react-router-dom";
import styled from "styled-components";
import { theme } from "../assets/css/theme";
import { FaCircleArrowUp } from "react-icons/fa6";

//import images
import mcdcomplet from "../assets/img/mcdcomplet.gif";
// import { photoMerise } from "./merise/merise1/Merise1";

const Merise = () => {
	const [imgClicked, setImgClicked] = useState(false);

	const showImage = () => {
		setImgClicked(!imgClicked);
	};

	const hideImage = () => {
		setImgClicked(false);
	};

	const scrollToTop = () => {
		window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
	};

	return (
		<MenuStyled>
			<section className="row_section">
				<ul className="left_column">
					<li>
						<Link to="/merise/merise1" href="#content">
							Concepts de bases
						</Link>
					</li>
					<li>
						<Link to="/merise/merise2">
							Vers une modélisation des Données (niveau Conceptuel)
						</Link>
					</li>
					<li>
						<Link to="/merise/merise2">
							Le MCD - MODELE CONCEPTUEL DES DONNEES
						</Link>
					</li>
					<li>
						<Link to="/merise/merise1">Règles de Passage du MCD au MLD </Link>
					</li>
					<li>
						<Link to="/merise/merise2">
							LE MLD - MODELE LOGIQUE DES DONNEES
						</Link>
					</li>
					<li>
						<Link to="/merise/merise1">Règles de Passage du MLD au MPD </Link>
					</li>
					<li>
						<Link to="/merise/merise2">
							LE MPD - MODELE PHYSIQUE DES DONNEES
						</Link>
					</li>
					<li>
						{" "}
						<Link to="/merise/merise1">Normalisation & lexique</Link>
					</li>
				</ul>

				<div className="right_column">
					<h1>La méthode MERISE</h1>
					<p>
						Méthode d’Etude et de Réalisation Informatique des Systèmes
						d’Entreprise née dans les années 70, à la demande du ministère de
						l’industrie française, pour les administrations.
					</p>
					{/* <Link className="img">
						<img src="https://picsum.photos/id/119/320/240" alt="diagramme1" />
					</Link> */}
					{/* <div>
						<img alt="mcd complet" src={mcdcomplet} />
					</div> */}
					<Link className="img">
						<img src={mcdcomplet} alt="mcdcomplet" onClick={showImage} />
						{imgClicked && (
							<img
								src={mcdcomplet}
								alt="mcdcomplet"
								className="imgZoom"
								onClick={hideImage}
							/>
						)}
					</Link>
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

	.row_section ul {
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
		
		text-justify: auto;
		display: flex;

		width: 65vw;
	} */

	/* .outlet_style {
		padding: ${theme.spacing.md};
		display: flex;
		flex-direction: column;
		align-items: flex-start;
		justify-content: flex-start;
		/* width: 100vw; */
	/* width: 70vw; */
	/* overflow: scroll;  */
	/* flex-wrap: wrap; */
	/* background-color: ${theme.colors.orange}; */
	/* } */

	img {
		width: 40vw;
		box-shadow: 5px 5px 10px ${theme.colors.darkMint};
		border-radius: ${theme.borderRadius.round};
		object-fit: cover; /* ou cover, fill, none */
	}

	.imgZoom {
		position: fixed;
		z-index: 100;
		box-shadow: 5px 5px 10px ${theme.colors.darkMint};
		background-color: ${theme.colors.white_peach};
		border-radius: ${theme.borderRadius.round};
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
		object-fit: contain;
		width: 90vw;
	}

	/* img:hover { */
	/* width: 60vw; */
	/* position: absolute; */
	/* box-shadow: 5px 5px 10px ${theme.colors.darkMint};
		border-radius: ${theme.borderRadius.round}; */
	/* right: 5vw; */
	/* bottom: 5vh;  */
	/* margin: 10px auto; */
	/* position: fixed;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
		object-fit: contain;
	}  */

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
		.iconScroll {
			font-size: 2rem;
			bottom: 13vh;
			right: 25vw;
		}
	}
`;
export default Merise;
