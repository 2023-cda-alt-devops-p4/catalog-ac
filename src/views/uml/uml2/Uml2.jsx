import { Link } from "react-router-dom";
import styled from "styled-components";
import { theme } from "../../../assets/css/theme";
import { FaCircleArrowUp } from "react-icons/fa6";

import Image from "../../../components/Image";
//import images
// import classes_objets from "../../../assets/img/uml/classes_objets.png";

// import merise_niveaux from "../../../assets/img/merise_niveaux.png";
// import merise_decoupage_niveaux from "../../../assets/img/merise_decoupage_niveaux.png";

const Uml2 = () => {
	const scrollToTop = () => {
		window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
	};
	return (
		<MenuStyled>
			<div className="outlet">
				<h1>14 diagrammes</h1>
				<h3>
					En UML 2.5, les diagrammes sont représentés sous deux types de vue :
				</h3>{" "}
				<ol>
					<li>
						- d'un point de vue statique ou structurelle du domaine avec les
						diagramme de structure (Structure Diagrams).
					</li>
					<li>
						- d'un point de vue dynamique avec les diagrammes de comportement
						(Behavior Diagrams) et les diagrammes d’interactions (Interaction
						Diagrams).
					</li>
				</ol>
				<h4>
					Les diagrammes sont dépendants hiérarchiquement et se complètent, de
					façon à permettre la modélisation d'un projet tout au long de son
					cycle de vie. Il en existe quatorze depuis UML 2.3.
				</h4>
				<h2>Diagrammes de structure ou diagrammes statiques</h2>
				<ul>
					<li>Diagrammes d’objets (object diagram) </li>
					<li> Diagrammes de classes (class diagram) </li>
					<li> Diagramme de paquetage/des paquets (package diagram) </li>
					<li> Diagrammes de composants (component diagram) </li>
					<li> Diagrammes de déploiement (deployment diagram)</li>
					<li>
						{" "}
						Diagramme de structure composite (composite structure diagram)
					</li>
					<li> Diagramme de profils (profile diagram)</li>
				</ul>
				<h2>Diagrammes de comportement</h2>
				<h3>
					Les diagrammes de comportement (behavior diagrams) rassemblent :
				</h3>
				<ul>
					<li>Diagramme des cas d'utilisation (use-case diagram)</li>
					<li>Diagramme états-transitions (state machine diagram)</li>
					<li>Diagramme d'activité (activity diagram)</li>
				</ul>
				<h2>Diagrammes d'interaction ou diagrammes dynamiques</h2>
				<h3>
					Les diagrammes d'interaction (interaction diagrams) ou diagrammes
					dynamiques (dynamic diagrams) rassemblent :
				</h3>
				<ul>
					<li>Diagramme de séquence (sequence diagram) </li>
					<li>Diagramme de communication (communication diagram)</li>
					<li>
						Diagramme global d'interaction (interaction overview diagram){" "}
					</li>
					<li>Diagramme de temps (timing diagram)</li>
				</ul>
				<p>
					Ces diagrammes, d'une utilité variable selon les cas, ne sont pas
					nécessairement tous produits à l'occasion d'une modélisation. Les plus
					utiles pour la maîtrise d'ouvrage sont les diagrammes d'activités, de
					cas d'utilisation, de classes, d'objets, de séquence et
					d'états-transitions. Les diagrammes de composants, de déploiement et
					de communication sont surtout utiles pour la maîtrise d'œuvre à qui
					ils permettent de formaliser les contraintes de la réalisation et la
					solution technique.
				</p>
				<p></p>
				<p></p>
				{/* <div className="container_img">
					<Image
						src={}
						alt=""
					/>
				</div> */}
				<div>
					<div className="container_img">{/* <Image src={} alt="" /> */}</div>
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

const MenuStyled = styled.div``;
export default Uml2;
