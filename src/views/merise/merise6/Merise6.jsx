import { Link } from "react-router-dom";
import styled from "styled-components";
import { theme } from "../../../assets/css/theme";
import { FaCircleArrowUp } from "react-icons/fa6";

import Image from "../../../components/Image";
//import images
// import merise_niveaux from "../../../assets/img/merise_niveaux.png";
// import merise_decoupage_niveaux from "../../../assets/img/merise_decoupage_niveaux.png";

const Merise6 = () => {
	const scrollToTop = () => {
		window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
	};
	return (
		<MenuStyled>
			<div className="outlet">
				<h1>Règles de Passage du MLD au MPD</h1>
			
				<ul>
					<li>Tout enregistrement logique devient une table. </li>
					<li>
						2 chemins à N arrivées entre 2 enregistrements logiques deviennent
						trois tables. Deux chemins logiques provenant d'une relation binaire
						X,N, X,N non porteuse d'informations se transforment donc en une
						table. N N Enregistrement logique 1 Enregistrement logique 2 clé1
						clé2 Table 1 Table 3 Table 2 clé1 clé2 clé1, clé2
					</li>
					<li>
						1 chemin à 1 arrivée entre 2 enregistrements logiques redonde une
						clé, à indexer le plus souvent, dans la table de départ
					</li>
					
				</ul>
				<div className="iconScroll">
					<FaCircleArrowUp onClick={scrollToTop} />
				</div>
			</div>
		</MenuStyled>
	);
};

const MenuStyled = styled.div``;
export default Merise6;
