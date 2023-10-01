import { Link } from "react-router-dom";
import styled from "styled-components";
import { theme } from "../../../assets/css/theme";
import { FaCircleArrowUp } from "react-icons/fa6";

import Image from "../../../components/Image";
//import images
import classes_objets from "../../../assets/img/uml/classes_objets.png";
import classe_example from "../../../assets/img/uml/classe_example.png";

const Uml4 = () => {
	const scrollToTop = () => {
		window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
	};
	return (
		<MenuStyled>
			<div className="outlet">
				<h1>Diagramme de classes</h1>
				{/*   >   &gt; */}
				<p>
					- ne tient pas compte du facteur temporel dans le comportement du
					système
				</p>
				<p>
					- permet de modéliser les classes du système et leurs relations
					indépendamment d’un langage de programmation
				</p>
				<em>
					&gt; Le diagramme de classes modélise les règles et le diagramme
					d'objets modélise des faits.
				</em>
				<h3>notions de classe et d’instance de classe</h3>
				<p>
					une instance est un concrétisation d’un concept abstrait (ex: la
					Ferrati qui se trouve dans votre garage est une instance du concept
					abstrait Automobile)
				</p>{" "}
				<ul>
					<p>
						une classe est un concept abstrait représentant des éléments variés
						comme :
					</p>
					<li>des éléments concrets (ex. : des avions),</li>
					<li>
						des éléments abstraits (ex. : des commandes de marchandises ou
						services),
					</li>
					<li>
						des composants d'une application (ex. : les boutons des boîtes de
						dialogue),
					</li>
					<li>des structures informatiques (ex. : des tables de hachage),</li>
					<li>des éléments comportementaux (ex. : des tâches), etc.</li>
				</ul>
				<p>Tout système orienté objet est organisé autour des classes.</p>
				<p>
					Une classe est la description formelle d'un ensemble d'objets ayant
					une sémantique et des caractéristiques communes.
				</p>
				<p>
					Un objet est une instance d'une classe. C'est une entité discrète
					dotée d'une identité, d'un état et d'un comportement que l'on peut
					invoquer. Les objets sont des éléments individuels d'un système en
					cours d'exécution.
				</p>
				<p>
					Par exemple, si l'on considère que Homme (au sens être humain) est un
					concept abstrait, on peut dire que la personne Marie-Cécile est une
					instance de Homme. Si Homme était une classe, Marie-Cécile en serait
					une instance : un objet.
				</p>
				<h2>Représentation graphique</h2>
				<div>
					<div className="container_img">{/* <Image src={} alt="" /> */}</div>
				</div>
				<div className="container_img_mini">
					{<Image src={classe_example} alt="classe_example" />}
				</div>
				<p>
					Une classe est représentée par un rectangle séparé en trois parties à
					cinq compartiments :
				</p>
				<ul>
					<li>
						la première partie contient le nom de la classe. commence par une
						majuscule. Pour indiquer qu'une classe est abstraite, il faut
						ajouter le mot-clef abstract.
					</li>
					<li>la seconde contient les attributs de la classe</li>
					<li>la 3ème contient les méthodes de la classe / ses opérations</li>
				</ul>
				<p>
					La seconde et la 3ème représentent le <em>comportement</em> de la
					classe.
				</p>
				<p>
					Un compartiment des responsabilités peut être ajouté pour énumérer
					l'ensemble de tâches devant être assurées par la classe, mais pour
					lesquelles on ne dispose pas encore assez d'informations. Un
					compartiment des exceptions peut également être ajouté pour énumérer
					les situations exceptionnelles devant être gérées par la classe.
				</p>
				<h2>Élaboration d'un diagramme de classes</h2>
				<p>
					Une démarche couramment utilisée pour bâtir un diagramme de classes
					consiste à :
				</p>
				<h3>Trouver les classes du domaine étudié.</h3>
				<p>
					Cette étape empirique se fait généralement en collaboration avec un
					expert du domaine. Les classes correspondent généralement à des
					concepts ou des substantifs du domaine ;
				</p>
				<h3>Trouver les associations entre classes.</h3>
				<p>
					Les associations correspondent souvent à des verbes, ou des
					constructions verbales, mettant en relation plusieurs classes, comme
					&lt;&lt; est composé de &gt;&gt;, &lt;&lt; pilote &gt;&gt;, &lt;&lt;
					travaille pour &gt;&gt;.
				</p>
				<h4>
					Attention, méfiez-vous de certains attributs qui sont en réalité des
					relations entre classes.
				</h4>
				<h3>Trouver les attributs des classes.</h3>
				<p>
					Les attributs correspondent souvent à des substantifs, ou des groupes
					nominaux, tels que &lt;&lt; la masse d'une voiture &gt;&gt; ou
					&lt;&lt; le montant d'une transaction &gt;&gt;.{" "}
				</p>
				<p>
					{" "}
					Les adjectifs et les valeurs correspondent souvent à des valeurs
					d'attributs. Vous pouvez ajouter des attributs à toutes les étapes du
					cycle de vie d'un projet (implémentation comprise).
				</p>
				<p>
					{" "}
					N'espérez pas trouver tous les attributs dès la construction du
					diagramme de classes ;
				</p>
				<p></p>
				<h3>Organiser et simplifier le modèle.</h3>
				<p>En éliminant les classes redondantes et en utilisant l'héritage ;</p>
				<h3>Itérer et raffiner le modèle.</h3>
				<p>
					Un modèle est rarement correct dès sa première construction. La
					modélisation objet est un processus non pas linéaire, mais itératif.
				</p>
				<div className="container_img">
					{<Image src={classes_objets} alt="classes_objets" />}
				</div>
				<p>
					ce diagramme de classes à gauche montre qu'une entreprise emploie au
					moins deux personnes et qu'une personne travaille dans au plus deux
					entreprises. Le diagramme d'objets modélise lui une entreprise
					particulière (PERTNE) qui emploie trois personnes.
				</p>
				<p></p>
				<div className="iconScroll">
					<FaCircleArrowUp onClick={scrollToTop} />
				</div>
			</div>
		</MenuStyled>
	);
};

const MenuStyled = styled.div`



`;
export default Uml4;
