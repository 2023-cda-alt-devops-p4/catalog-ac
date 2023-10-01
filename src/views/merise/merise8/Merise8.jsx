import { Link } from "react-router-dom";
import styled from "styled-components";
import { theme } from "../../../assets/css/theme";
import { FaCircleArrowUp } from "react-icons/fa6";

import Image from "../../../components/Image";
//import images
import mcdclient from "../../../assets/img/mcdclient.png";

const Merise8 = () => {
	const scrollToTop = () => {
		window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
	};
	return (
		<MenuStyled>
			<div className="outlet">
				<h1>Normalisation & lexique</h1>
				<h2>normalisation des entités</h2>
				<ol>
					<li>
						les entités remplaçables par une association doivent être remplacées
						(ex: cas d’une entité entourée de 1.1 = unicité)
					</li>
					<li>association et attributs doivent être uniques :</li>
					<li>entités : nom commun au pluriel</li>
					<li>
						association : verbe à l’infinitif (ou passive + adverbe, ex: être
						enseigné par)
					</li>
					<li>
						attributs (ou propriétés) : nom commun singulier ( si besoin
						accompagné du nom de l’entité ou association dans laquelle il se
						trouve, ex: nom_ens ; nom_etab)
					</li>
					<li>les entités homogènes doivent être fusionnées</li>
				</ol>
				<div className="container_img_mini"><Image src={mcdclient} alt="mcdclient" /> </div>

				<h2>normalisation des identifiants (id)</h2>
				<ol>
					<li>ne doit pas changer au cours du temps (tél, numéro plaque..)</li>
					<li>
						ne doit pas être composés de plusieurs attributs (performance)
					</li>
					<li>préférer un id court (performance)</li>
					<li>
						éviter un index qui s’incrémente automatique (risque d’avoir 2
						enregistrements avec un numéro différent)
					</li>
					
				</ol>
				<h2>normalisation des attributs</h2>
				<ol>
					<li>
						les attributs d’une association doivent dépendre des identifiants de
						toutes les entités en association
					</li>
					<li>
						l’entité avec une cardinalité maximale à 1 (1.1 ou 0.1) aspire
						toujours les attributs de l’association
					</li>
				</ol>
				<h2>normalisation des associations</h2>
				<ol>
					<li>
						éliminer les associations fantômes (ex: cas d’une association
						entourée de 1.1 = impliquée une et une seule fois)
					</li>
					<li>éliminer les association redondantes</li>
				</ol>
				<h2>normalisation des cardinalités</h2>
				<p>
					même si on connaît le nombre exacte de cardinalités minimales ou max,
					ce nombre pourrait évoluer, donc on considère que :
				</p>
				<ol>
					<li>
						une cardinalité minimale est toujours 0 ou 1 (= 0 ou au moins 1)
					</li>
					<li>
						une cardinalité maximale est toujours 1 ou n ( = max 1 ou plusieurs)
					</li>
					<li>
						la gestion de ces exigences min et max est géré au niveau du SGBD à
						l’aide des déclencheurs (triggers)
					</li>
				</ol>
				<h2>Lexique</h2>{" "}
				<ol>
					<li>
						<em>Occurrence :</em>mot barbare désignant un élément d'un ensemble
					</li>
					<li>
						<em>Patte :</em> rôle d'un individu dans une relation.
					</li>
					<li>
						<em>Relation :</em>association d'individus.
					</li>
					<li>
						<em>SGBD : Système de Gestion de Base de Données</em>Logiciel
						permettant de créer, modifier ou consulter des informations dans une
						base (de données). 3 types de SGBD sont normalisés, hiérarchique,
						navigationnel ou réseau et relationnel.
					</li>
					<li>
						<em>Spécification externe :</em>partie du niveau logique à valider
						par l'utilisateur final. Elle comprend les enchaînements d'états par
						outil (MLT) et la description des informations affichées et à saisir
						par état.{" "}
					</li>
					<li>
						<em>Spécification interne :</em>partie du niveau logique pouvant
						être ignorée par l'utilisateur final. Elle comprend les actions de
						création d'information ou d'enregistrement à partir des états et la
						description de l'obtention des informations affichées ou créées par
						état.
					</li>
					<li>
						<em>Règles de gestion :</em>Une règle de gestion est une contrainte écrite qui s'applique à une action, à une activité ou encore à un processus de l'entreprise. Elle spécifie ce qu'un système d'informations doit faire, ou comment il doit être structuré. Les règles peuvent être dérivées d'une disposition légale, d'une exigence d'un client ou d'un article de règlement interne. Exemples : our chaque livre, on doit connaître le titre, l'année de parution, un résumé et le type (roman, poésie, science fiction, ...). Un livre peut être rédigé par aucun (dans le cas d'une œuvre anonyme), un ou plusieurs auteurs dont on connaît le nom, le prénom, la date de naissance et le pays d'origine.

					</li>
				</ol>
						<div className="iconScroll">
					<FaCircleArrowUp onClick={scrollToTop} />
				</div>
			</div>
		</MenuStyled>
	);
};

const MenuStyled = styled.div``;
export default Merise8;
