import styled from "styled-components";
import { theme } from "../../../assets/css/theme";
import { FaCircleArrowUp } from "react-icons/fa6";

import Image from "../../../components/Image";
//import images
// import merise_niveaux from "../../../assets/img/merise_niveaux.png";
// import merise_decoupage_niveaux from "../../../assets/img/merise_decoupage_niveaux.png";

const Merise2 = () => {
	const scrollToTop = () => {
		window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
	};

	return (
		<MeriseStyled>
			<div className="outlet">
				<h1>
					Vers une modélisation des Données (niveau Conceptuel) + cardinalités
				</h1>
				{/* <div className="container_img">
					<Image
						src={cardinalites_Multiplicites}
						alt="cardinalites_Multiplicites"
					/>
				</div> */}
				<p>
					Il s'agit de l'élaboration du Modèle Conceptuel des Données (MCD) qui
					est une représentation graphique et structurée des informations
					mémorisées par un SI. Le MCD est basé sur deux notions principales :
					les entités et les associations, d'où sa seconde appellation : le
					schéma Entité/Association.
				</p>
				<h2>L'élaboration du MCD passe par les étapes suivantes :</h2>{" "}
				<p>
					<ul>
						<li>
							La mise en place de règles de gestion (si celles-ci ne vous sont
							pas données),
						</li>
						<li>L'élaboration du dictionnaire des données,</li>
						<li>
							La recherche des dépendances fonctionnelles entre ces données,
							dépendances fonctionnelles sont représentées sous la forme du GDF
							(Graphe de Dépendances Fonctionnelles).
						</li>
						<li>
							dépendances fonctionnelles
							http://www.colar.net/as/cours/analyse/ddf.html#dfdc
						</li>
						<li>
							formes normales http://www.colar.net/as/cours/analyse/ddf1.html
						</li>
						<li>
							L'élaboration du MCD (création des entités puis des associations
							puis ajout des cardinalités).
						</li>
					</ul>
				</p>
				<h1>Résumé des étapes : </h1>
				<div>
					<ul>
						<li>règles de gestion</li>
						<li>dictionnaire des données</li>
						<li>dépendances fonctionnelles, GLI, GDF</li>
						<li>cardinalités</li>
					</ul>
				</div>
				<div className="iconScroll">
					<FaCircleArrowUp onClick={scrollToTop} />
				</div>
				<h1>Les cardinalités</h1>
				<div>
					<p>
						Les cardinalités permettent de caractériser le lien qui existe entre
						une entité et la relation à laquelle elle est reliée. Les
						cardinalités minimales et maximales expriment respectivement le
						nombre minimum et maximum de fois qu'une occurrence d'une entité
						participe aux occurrences de l'association.
					</p>
					<p>
						<em>
							la borne minimale (généralement 0 ou 1) décrit le nombre minimum
							de fois qu'une entité peut participer à une relation
						</em>
					</p>
					<p>
						<em>
							la borne maximale (généralement 1 ou n) décrit le nombre maximum
							de fois qu'une entité peut participer à une relation
						</em>
					</p>
				</div>
				<div>
					{" "}
					<p>
						Une cardinalité 1.N signifie que chaque entité appartenant à une
						classe d'entité participe au moins une fois à la relation.
					</p>
					<p>
						Une cardinalité 0.N signifie que chaque entité appartenant à une
						classe d'entité ne participe pas forcément à la relation.
					</p>
				</div>
			</div>
			<div>
				<div className="iconScroll">
					<FaCircleArrowUp onClick={scrollToTop} />
				</div>
			</div>
		</MeriseStyled>
	);
};

const MeriseStyled = styled.div``;
export default Merise2;
