import { Link, Outlet } from "react-router-dom";
import styled from "styled-components";
import { theme } from "../assets/css/theme";
import { FaCircleArrowUp } from "react-icons/fa6";

import Image from "../components/Image";
//import images
import diagrammes_uml from "../assets/img/uml/diagrammes_uml.svg";

const Uml = () => {
	const scrollToTop = () => {
		window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
	};

	return (
		<MenuStyled>
			<section className="row_section">
				<ul className="left_column">
					<li>
						<Link to="/uml/uml1">Concepts importants de l'approche objet</Link>
					</li>
					<li>
						<Link to="/uml/uml2">14 diagrammes</Link>
					</li>
					<li>
						<Link to="/uml/uml3">Diagramme de cas d'utilisation</Link>
					</li>
					<li>
						<Link to="/uml/uml4">Diagramme de classes</Link>
					</li>
					<li>
						<Link to="/uml/uml5">Diagramme de séquence</Link>
					</li>
				</ul>

				<div className="right_column">
					<h1>UML - Unified Modeling Language</h1>
					<h2>
						Langage visuel dédié à la spécification, la construction et la
						documentation des artefacts d’un système logiciel
					</h2>
					<p>Langages de modélisation basés sur les graphes</p>
					<div className="container_img">
						<Image src={diagrammes_uml} alt="diagrammes_uml" />
					</div>

					<em>Attention : UML est un langage... pas une méthode </em>
					<p>Version 1.0 d’UML (Unified Modeling Language) en janvier 1997</p>
					<p>Version 2.5.1 en 2017</p>


					<h3>Décrire la structure du système en termes de : </h3>
					<p>
						Composants du système ; Objets, Classes, Paquetages, Composants, ...{" "}
					</p>
					<p>
						Relations entre ces composants ; Spécialisation, Association,
						Dépendance, ... ;
					</p>
					<p>Pas de facteur temps</p>
					<h3>Pourquoi une structuration orientée objet ?</h3>

					<p>Unicité et universalité du paradigme </p>
					<p>Réduire le décalage entre monde réel et logiciel ; </p>
					<p>Objets réels ⇒ Objets conceptuels ⇒ Objets logiciels </p>
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
		width: 20vw;
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
		/* align-items: center; */
		gap: 5px;
		width: 90vw;
		height: auto;
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
	}
`;
export default Uml;
