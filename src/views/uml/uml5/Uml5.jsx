import { Link } from "react-router-dom";
import styled from "styled-components";
import { theme } from "../../../assets/css/theme";
import { FaCircleArrowUp } from "react-icons/fa6";

import Image from "../../../components/Image";
//import images
import sequence_diagram from "../../../assets/img/uml/sequence_diagram.png";

const Uml5 = () => {
	const scrollToTop = () => {
		window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
	};
	return (
		<MenuStyled>
			<div className="outlet">
				<h1>Diagramme de séquence</h1>
				<h2>
					Un diagramme de séquence, parfois appelé diagramme d’événements ou
					scénario d’événements, montre l’ordre dans lequel les objets
					interagissent.
				</h2>
				<h>
					Ils vous permettent ainsi de représenter visuellement des scénarios
					d’exécution simples. Il indique les objets que l'acteur va manipuler
					et les opérations qui font passer d'un objet à l'autre.
				</h>
				<p>
					Le diagramme de séquence représente la succession chronologique des
					opérations réalisées par un acteur. Il décrit la collaboration entre
					les éléments (lignes de vie) d’un système.
				</p>
				<p>
					La collaboration est représentée par des
					<em>
						échanges de messages entre les lignes de vie en mettant en évidence
						la chronologie de ces échanges.
					</em>
				</p>
				<p>
					On peut représenter les mêmes opérations par un diagramme de
					communication, graphe dont les nœuds sont des objets et les arcs
					(numérotés selon la chronologie) les échanges entre objets.{" "}
				</p>
				<p>
					En fait,
					<em>
						diagramme de séquence et diagramme de communication sont deux vues
						différentes, mais logiquement équivalentes
					</em>{" "}
					(on peut construire l'une à partir de l'autre) d'une même chronologie.
					Ce sont des diagrammes d'interaction.
				</p>
				<div className="container_img">
					<Image src={sequence_diagram} alt="sequence_diagram" />
				</div>
				<p>
					Les messages sont échangés entre les lignes de vie et présentés dans
					un ordre chronologique. Ainsi, contrairement au diagramme de
					communication, le temps y est représenté explicitement par une
					dimension (la dimension verticale) et s'écoule de haut en bas.
				</p>
				<p>
					Une ligne de vie se représente par un rectangle, auquel est accroché
					une ligne verticale pointillée, contenant une étiquette dont la
					syntaxe est : [&lt;nom_du_rôle&gt;] : [&lt;Nom_du_type&gt;]
				</p>
				<div className="iconScroll">
					<FaCircleArrowUp onClick={scrollToTop} />
				</div>
			</div>
		</MenuStyled>
	);
};

const MenuStyled = styled.div``;
export default Uml5;
