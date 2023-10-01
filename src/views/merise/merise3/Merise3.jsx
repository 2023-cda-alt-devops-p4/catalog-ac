import { Link } from "react-router-dom";
import styled from "styled-components";
import { theme } from "../../../assets/css/theme";
import { FaCircleArrowUp } from "react-icons/fa6";

import Image from "../../../components/Image";
//import images
import merise_mcd from "../../../assets/img/merise_mcd.png";
import merise_entite_occurence from "../../../assets/img/merise_entite_occurence.png";

const Merise3 = () => {
	const scrollToTop = () => {
		window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
	};
	return (
		<MenuStyled>
			<div className="outlet">
				<h1>Le MCD - MODELE CONCEPTUEL DES DONNEES</h1>
				<h3>
					Le MCD permet de recenser et d’organiser les données du système
					d’information du domaine étudié.
				</h3>
				<p>
					L’idée est d’informatiser les processus métiers : il faut arriver à
					identifier les bonnes données à informatiser, comprendre le
					cheminement des flux d’informations et leurs traitements. Le MCD ne
					permet pas de tout modéliser, il se concentre sur les données et leurs
					relations. Le traitement des données est fait par le MCT, un autre
					outil de la boîte à outils de Merise.
				</p>
				<div className="container_img">
					{" "}
					<Image src={merise_mcd} alt=" merise_mcd" />
				</div>

				<p></p>
				<p></p>
				<h4>sous titre h3</h4>
				<h3>Modèle Entité-Association </h3>
				<p></p>
				<p></p>

				<ol>
					<li>
						Une<em>entité</em>= un rectangle avec une étiquette (nom commun au
						pluriel)
					</li>
					<li>
						Une<em>association</em>= un ovale avec une étiquette (verbe à
						l’infinitif)
					</li>
					<li>
						Les<em>cardinalités</em>(les petits chiffres au-dessus des « pattes
						»).
					</li>
					<li>
						Un élément appartenant à une entité est appelé<em>occurrence</em>.
						Dans une occurrence, la propriété n’accepte qu’une seule valeur.
					</li>

					<li>
						Une<em>propriété (ou attribut)</em>est une donnée élémentaire d’une
						entité.
					</li>
					<li>
						<em>L'identifiant ou la clé</em> est un attribut (ou propriété) de
						l’entité. Il permet d’identifier une occurrence d’entité unique. Un
						identifiant peut être composé de plusieurs attributs (clé composée)
						(ex: num_apart + num_immeuble). Ca peut être un identifiant non
						spécifique nommé id_nomEntité, généralement séquentiel, qui
						s’auto-incrémente.
					</li>
				</ol>
				<div className="container_img">
					<Image src={merise_entite_occurence} alt=" merise_entite_occurence" />
				</div>
				<p>
					Dans tous les cas, il faut utiliser un support qui permet de faire
					facilement des modifications car le MCD évolue. Il faut pouvoir
					l’adapter en fonction des retours des utilisateurs. Les MCD doivent
					aussi évoluer dans le temps en fonction de l’évolution du besoin à
					informatiser ;
				</p>
				<em></em>
				<div className="iconScroll">
					<FaCircleArrowUp onClick={scrollToTop} />
				</div>
			</div>
		</MenuStyled>
	);
};

const MenuStyled = styled.div``;
export default Merise3;
