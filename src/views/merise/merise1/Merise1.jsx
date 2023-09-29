import styled from "styled-components";
import { theme } from "../../../assets/css/theme";
import { FaCircleArrowUp } from "react-icons/fa6";


import Image from "../../../components/Image";
//import images
import merise_niveaux from "../../../assets/img/merise_niveaux.png";
import merise_decoupage_niveaux from "../../../assets/img/merise_decoupage_niveaux.png";

const Merise1 = () => {

	const scrollToTop = () => {
		window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
	};

	return (
		<MeriseStyled>
			<div className="outlet">
				<h1>Concepts de bases</h1>
				<div className="container_img">
					<Image
						src={merise_decoupage_niveaux}
						alt="merise_decoupage_niveaux"
					/>
				</div>
				<h2>3 découpages...</h2>
				<p>
					<ul>
						<li>communication</li>
						<li>traitement</li>
						<li>données</li>
					</ul>
					<h2>...sur 4 niveaux</h2>
					<ul>
						<li>
							<em>niveaux conceptuel :</em> QUE FAIT L’ENTREPRISE ? (étude des
							fonctions et objectifs de l’e) - niveau le plus stable.
						</li>
						<li>
							<em>organisationnel :</em> QUI FAIT QUOI ? (les postes de travail
							de l'e, étude de l’organisation)
						</li>
						<li>
							<em>logique (ou externe) :</em> AVEC L’AIR DE QUOI ? (informatique
							non spécifique/universelle : sans choix de langage de
							programmation ni de SGBD : maquette des enchaînements d'écran)
						</li>
						<li>
							<em>physique (ou interne) :</em> AVEC QUOI OU COMMENT ? (choix de
							l’outil informatique, SGBD et système d’exploitation) - moins
							stable, est soumis à de fréquents changements.
						</li>
					</ul>
				</p>
				<div>
					<div className="container_img">
						<Image src={merise_niveaux} alt="merise_niveaux" />
					</div>
				</div>
				<p>
					Le nom du modèle reprend la 1ère lettre de Modèle + la 1ère lettre du
					niveau et du découpage
				</p>
				<p>
					<em>modèles les plus importants :</em> MCD puis, MLD, MCC et MCT
				</p>
				<div className="iconScroll">
					<FaCircleArrowUp onClick={scrollToTop} />
				</div>
			</div>
		</MeriseStyled>
	);
};

const MeriseStyled = styled.div`
	width: 100vw;
	display: flex;
	flex-wrap: wrap;
	align-items: flex-start;
	justify-content: space-between;

	.outlet {
		background-color: ${theme.colors.kumquat};
		padding: ${theme.spacing.md};
		padding-bottom: 15vh;
		flex-wrap: wrap;
		margin: 10px auto;
		margin-right: 10vh;
		min-width: 100vw;
	}

	.outlet h1 {
		padding: ${theme.spacing.sm};
		margin-bottom: ${theme.spacing.md};
		font-weight: ${theme.weights.bold};
		font-size: ${theme.fonts.P2};
		box-shadow: 5px 5px 10px ${theme.colors.semiDarkAmber};
		color: ${theme.colors.white_peach};
	}

	.outlet h2 {
		padding: ${theme.spacing.xs};
		font-weight: ${theme.weights.bold};
		font-size: ${theme.fonts.P1};
		color: ${theme.colors.white_peach};
	}

	.outlet ul {
		padding: ${theme.spacing.xs};
		list-style-type: decimal;
		list-style-position: inside;
		margin-left: 20px;
	}

	.outlet li {
		padding: ${theme.spacing.xs};
	}

	.outlet li em {
		font-weight: ${theme.weights.bold};
	}

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

	/* :–☆–:*:–☆–:*:–☆–:*:–☆–:*:–☆–:*:–☆–: */
	/*//! -- MEDIA QUERIES --★゜・。。・゜゜・。。・゜☆゜・。。・゜゜・。。・゜★゜・。。・゜゜・。。・゜☆ */
	/* -▼･ェ･▼･ェ･▼･ェ･▼･ェ･▼･ェ･▼･ェ･▼･ェ･▼- */

	@media (min-width: 1024px) {
		.img_catalog {
			max-width: 80vw;
		}
	}

	@media (max-width: 1023px) {
		.img_catalog {
			max-width: 70vw;
		}
	}

	@media (max-width: 780px) {
		.img_catalog {
			max-width: 60vw;
		}
	}

	@media (max-width: 300px) {
		.img_catalog {
			max-width: 30vw;
		}

		.iconScroll {
			font-size: 2rem;
			bottom: 13vh;
			right: 25vw;
		}
	}
`;
export default Merise1;
