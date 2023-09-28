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
			<h1>La méthode MERISE 1111111111111111111</h1>
			<h2>Concepts de bases</h2>
			<p>
				3 découpages sur 4 niveaux communication traitement données niveaux
				conceptuel : QUE FAIT L’ENTREPRISE ? (étude des fonctions et objectifs
				de l’e) - niveau le plus stable. organisationnel : QUI FAIT QUOI ? (les
				postes de travail de l'e, étude de l’organisation) logique (ou externe)
				: AVEC L’AIR DE QUOI ? (informatique non spécifique/universelle : sans
				choix de langage de programmation ni de SGBD : maquette des
				enchaînements d'écran) physique (ou interne) : AVEC QUOI OU COMMENT ?
				(choix de l’outil informatique, SGBD et système d’exploitation) - moins
				stable, est soumis à de fréquents changements. vidéo : (pour screen
				éventuellement)
				https://www.youtube.com/watch?v=sRujQXD97R4&list=PL5v61AVkUtCa7RluR5Zmi2GuGH98mmyEv&index=4&ab_channel=NacerRAMMI
			</p>
			<Link to="/">
				<img src="https://picsum.photos/320/240" alt="diagramme1" />
			</Link>
			<h2>sous-titre</h2>
			Quas suscipit deleniti error, tempora dicta minus ex magni dolores debitis
			temporibus sunt veritatis fugiat amet voluptatibus rem cum maxime beatae
			voluptatum ducimus, voluptate, non excepturi? Officiis neque ad inventore!
			<Link to="/">
				<img src="https://picsum.photos/320/240" alt="diagramme2" />
			</Link>
			<div className="iconScroll">
				<FaCircleArrowUp onClick={scrollToTop} />
			</div>
		</MeriseStyled>
	);
};
const MeriseStyled = styled.div`
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
`;
export default Merise1;
