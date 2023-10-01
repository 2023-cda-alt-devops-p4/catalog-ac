import { Link } from "react-router-dom";
import styled from "styled-components";
import { theme } from "../../../assets/css/theme";
import { FaCircleArrowUp } from "react-icons/fa6";

import Image from "../../../components/Image";
//import images
// import merise_niveaux from "../../../assets/img/merise_niveaux.png";
// import merise_decoupage_niveaux from "../../../assets/img/merise_decoupage_niveaux.png";

const Merise5 = () => {
	const scrollToTop = () => {
		window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
	};
	return (
		<MenuStyled>
			<div className="outlet">
				<h1>LE MLD - MODELE LOGIQUE DES DONNEES</h1>
				<h3>
					Le M.L.D. constitue une étape intermédiaire entre le M.C.D. et le
					M.P.D. (modèle physique) directement implémenté sur la machine cible.
				</h3>
				<p>
					Le niveau logique représente le dernier niveau validé par
					l'utilisateur final (sauf si celui-ci réalise la programmation). Il
					comprend une vue de l’utilisateur de l'informatique (vue externe de
					l'informatique) et une vue plus spécifique (vue interne).{" "}
				</p>
				<p>
					Le M.C.D. est indépendant de l'organisation informatique de
					l'entreprise. Il ne prend pas en compte, par exemple, les systèmes
					d'exploitation utilisés (MS-Dos, Windows, Linux, ...), les langages de
					programmation ou même les logiciels disponibles sur ces systèmes.{" "}
				</p>

				<h4>
					Il s'agit donc pour le M.L.D. de déterminer la structure générale des
					informations à stocker dans le système informatique.
				</h4>

				<p>
					Il s'agit de faire correspondre les entités et les relations porteuses
					du M.C.D. avec des fichiers (ou tables logiques).{" "}
				</p>
				<p>
					Un premier MLD se déduit d'un MOD (Modèle Organisationnel de Données).
				</p>

				<div className="iconScroll">
					<FaCircleArrowUp onClick={scrollToTop} />
				</div>
			</div>
		</MenuStyled>
	);
};

const MenuStyled = styled.div``;
export default Merise5;
