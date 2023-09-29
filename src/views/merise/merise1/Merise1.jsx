import { Link } from "react-router-dom";
import styled from "styled-components";
import { theme } from "../../../assets/css/theme";
import { FaCircleArrowUp } from "react-icons/fa6";
import { BsFillDiagram3Fill } from "react-icons/bs";

const Merise1 = () => {
	const scrollToTop = () => {
		window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
	};

	return (
		<MeriseStyled>
			<div className="outlet">
				<h1>Concepts de bases</h1>
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
							niveaux conceptuel : QUE FAIT L’ENTREPRISE ? (étude des fonctions
							et objectifs de l’e) - niveau le plus stable.
						</li>
						<li>
							organisationnel : QUI FAIT QUOI ? (les postes de travail de l'e,
							étude de l’organisation)
						</li>
						<li>
							logique (ou externe) : AVEC L’AIR DE QUOI ? (informatique non
							spécifique/universelle : sans choix de langage de programmation ni
							de SGBD : maquette des enchaînements d'écran)
						</li>
						<li>
							physique (ou interne) : AVEC QUOI OU COMMENT ? (choix de l’outil
							informatique, SGBD et système d’exploitation) - moins stable, est
							soumis à de fréquents changements.
						</li>
					</ul>
					vidéo : (pour screen éventuellement)
					https://www.youtube.com/watch?v=sRujQXD97R4&list=PL5v61AVkUtCa7RluR5Zmi2GuGH98mmyEv&index=4&ab_channel=NacerRAMMI
				</p>
				<p>
					Le nom du modèle reprend la 1ère lettre de Modèle + la 1ère lettre du
					niveau et du découpage
				</p>
				<p>modèles les plus importants : MCD puis, MLD, MCC et MCT</p>
				<img
					className="img_catalog"
					src="https://picsum.photos/320/240"
					alt="diagramme1"
				/>
				<h2>sous-titre</h2>
				Quas suscipit deleniti error, tempora dicta minus ex magni dolores
				debitis temporibus sunt veritatis fugiat amet voluptatibus rem cum
				maxime beatae voluptatum ducimus, voluptate, non excepturi? Officiis
				neque ad inventore!
				<Link to="/">
					<img
						className="img_catalog"
						src="https://picsum.photos/320/240"
						alt="diagramme2"
					/>
				</Link>
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
		background-color: ${theme.colors.orange};
		padding: ${theme.spacing.md};
		padding-bottom: 15vh;

		/* display: flex;
		flex-direction: column;
		align-items: flex-start;
		justify-content: space-between; */
		/* width: 80%;
		width: 130vw; */
		flex-wrap: wrap;
		margin: 10px auto;
		margin-right: 10vh;
		min-width: 100vw;
	}
	.outlet h1 {
		padding: ${theme.spacing.xs};
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
		/* gap: 3vh; */
	}
	.outlet li {
		padding: ${theme.spacing.xs};
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
