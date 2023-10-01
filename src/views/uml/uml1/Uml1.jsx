import { Link } from "react-router-dom";
import styled from "styled-components";
import { theme } from "../../../assets/css/theme";
import { FaCircleArrowUp } from "react-icons/fa6";

import Image from "../../../components/Image";
//import images
import classes_objets from "../../../assets/img/uml/classes_objets.png";
// import merise_decoupage_niveaux from "../../../assets/img/merise_decoupage_niveaux.png";

const Uml1 = () => {
	const scrollToTop = () => {
		window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
	};

	return (
		<MenuStyled>
			<div className="outlet">
				<h1>Concepts importants de l’approche objet</h1>
				<h2>3 façons d’utiliser UML selon Fowler (2003)</h2>
				<h4>- Mode esquisse (méthodes Agile) :</h4>
				<div>
					<p>Diagrammes tracés à la main, informels et incomplets ; </p>
					<p>Support de communication pour concevoir les parties critiques</p>
				</div>
				<h4>- Mode plan :</h4>
				<div>
					<p>Diagrammes formels relativement détaillés</p>
					<p>Annotations en langue naturelle ; </p>
					<p>Génération d’un squelette de code à partir des diagrammes ;</p>
					<p> Nécessité de compléter le code pour obtenir un exécutable </p>
				</div>
				<h4>- Mode programmation (Model Driven Architecture / MDA) : </h4>
				<div>
					<p>Spécification complète et formelle en UML ;</p>
					<p>
						Génération automatique d’un exécutable à partir des diagrammes ;{" "}
					</p>
					<p>Limité à des applications bien particulières ;</p>
				</div>{" "}
				<h2>Relations entre les classes</h2>
				<p>
					Tout d'abord, introduisons la notion de classe. Une classe est un type
					de données abstrait qui précise des caractéristiques (attributs et
					méthodes) communes à toute une famille d'objets et qui permet de créer
					(instancier) des objets possédant ces caractéristiques. Les autres
					concepts importants qu'il nous faut maintenant introduire sont
					l'encapsulation, l'héritage et l'agrégation.
				</p>
				<p>
					Ces relations ne sont pas propres aux diagrammes de classes, elles
					peuvent également s'appliquer à l'ensemble des diagrammes statiques.
				</p>
				<h3>L'encapsulation</h3>
				<p>
					L'encapsulation est un mécanisme consistant à rassembler les données
					et les méthodes au sein d'une structure en cachant l'implémentation de
					l'objet, c'est-à-dire en empêchant l'accès aux données par un autre
					moyen que les services proposés. L'encapsulation permet donc de
					garantir l'intégrité des données contenues dans l'objet.
				</p>
				<h3>L'agrégation </h3>{" "}
				<p>
					L'agrégation est une association avec relation de subordination,
					représentée par un trait reliant les deux classes et dont l'origine se
					distingue de l'autre extrémité (la classe subordonnée) par un losange
					vide. Une des classes regroupe d'autres classes. L'objet T utilise une
					instance de la classe T'.
				</p>
				<h3>La composition</h3>{" "}
				<p>
					La composition est une agrégation avec cycle de vie dépendant : la
					classe composante est détruite lorsque la classe composée (ou classe
					composite) disparaît. L'origine de cette association est représentée
					par un losange plein. L'objet T' est composé de T.
				</p>
				<h3>L'héritage</h3>
				<p>
					L'héritage est un mécanisme de transmission des caractéristiques d'une
					classe (ses attributs et méthodes) vers une sous-classe. Une classe
					peut être spécialisée en d'autres classes, afin d'y ajouter des
					caractéristiques spécifiques ou d'en adapter certaines. Plusieurs
					classes peuvent être généralisées en une classe qui les factorise,
					afin de regrouper les caractéristiques communes d'un ensemble de
					classes. Ainsi, la spécialisation et la généralisation permettent de
					construire des hiérarchies de classes. L'héritage peut être simple ou
					multiple. L'héritage évite la duplication et encourage la
					réutilisation. Le polymorphisme représente la faculté d'une méthode à
					pouvoir s'appliquer à des objets de classes différentes. Le
					polymorphisme augmente la généricité, et donc la qualité, du code.
					L'héritage est un principe de division par généralisation et
					spécialisation, représenté par un trait reliant les deux classes et
					dont l'extrémité du côté de la classe mère comporte un triangle. La
					classe fille hérite de tous les attributs et méthodes, qu'ils soient
					publics, protégés ou privés. Cependant, elle ne peut pas utiliser
					directement les attributs et méthodes privés (que ce soit en lecture
					ou en écriture), sauf par l'intermédiaire d'une méthode héritée
					(publique ou protégée).
				</p>
				<h2>Multiplicité</h2>
				{/* <em></em> */}
				<p>
					La multiplicité associée à une terminaison d'association, d'agrégation
					ou de composition déclare le nombre d'objets susceptibles d'occuper la
					position définie par la terminaison d'association. Voici quelques
					exemples de multiplicité :
				</p>
				<ul>
					<li>exactement un : 1 ou 1..1 ;</li>
					<li>plusieurs : * ou 0..* ;</li>
					<li>au moins un : 1..* ;</li>
					<li>de un à six : 1..6.</li>
				</ul>
				<p>
					Pour une association n-aire, la multiplicité minimale doit en
					principe, mais pas nécessairement, être 0. En effet, une multiplicité
					minimale de 1 (ou plus) sur une extrémité implique qu'il doit exister
					un lien (ou plus) pour TOUTES les combinaisons possibles des instances
					des classes situées aux autres extrémités de l'association n-aire ! Il
					faut noter que, pour les habitués du modèle entité/relation, les
					multiplicités sont en UML « à l'envers » (par référence à Merise) pour
					les associations binaires et « à l'endroit » pour les n-aires avec
					n-2.
				</p>
				<p>
					La multiplicité représente le nombre de fois où la variable peut
					intervenir. Elle est représentée entre crochets. Par exemple, si une
					personne possède deux numéros de téléphone, on préfèrera
					noTelephones[2] à noTelephone1 et noTelephone2.
				</p>
				<div>
					<div className="container_img">
						{<Image src={classes_objets} alt="classes_objets" />}
					</div>
				</div>
				<p></p>
				<em></em>
				<div className="iconScroll">
					<FaCircleArrowUp onClick={scrollToTop} />
				</div>
			</div>
		</MenuStyled>
	);
};

const MenuStyled = styled.div`
	.outlet h4 + div {
		font-size: ${theme.fonts.XS};
		margin: 0.5vh 2vw;
	}

	/* .iconScroll {
	
		font-size: 3rem;
		position: fixed;
		bottom: 13vh;
		right: 5vw;
	}

	.iconScroll:hover {
		color: ${theme.colors.mint};
		cursor: pointer;
	} */
`;
export default Uml1;
