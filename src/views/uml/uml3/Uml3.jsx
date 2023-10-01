import { Link } from "react-router-dom";
import styled from "styled-components";
import { theme } from "../../../assets/css/theme";
import { FaCircleArrowUp } from "react-icons/fa6";

import Image from "../../../components/Image";
//import images
import usecase_diagram from "../../../assets/img/uml/usecase_diagram.png";
import usecase_diagram_simple from "../../../assets/img/uml/usecase_diagram_simple.png";

const Uml3 = () => {
	const scrollToTop = () => {
		window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
	};
	return (
		<MenuStyled>
			<div className="outlet">
				<h1>Diagramme de cas d'utilisation (DCU)</h1>

				<h4>
					= représentation du comportement fonctionnel d'un système logiciel
				</h4>
				<p>
					Les diagrammes de cas d'utilisation permettent de recueillir,
					d'analyser et d'organiser les besoins, et de recenser les grandes
					fonctionnalités d'un système. Il s'agit donc de la première étape UML
					d'analyse d'un système.
				</p>
				<div className="container_img">
						{<Image src={usecase_diagram_simple} alt="usecase_diagram_simple" />}
					</div>
				<h2>Trois types de relations : </h2>
				<ol>
					<li>
						- Généralisation : ————&gt; ou spécialisation.
						<p>
							Le cas d'utilisation A est une généralisation de B, si B est un
							cas particulier de A c'est-à-dire lorsque A peut être substitué
							par B pour un cas précis.
						</p>
					</li>
					<li>
						- Inclusion : - - - - - «include» - - - - -&gt; i
						<p>
							inclut le second et son issue dépend souvent de la résolution du
							second.
						</p>
					</li>
					<li>
						- Extension : - - - - - «extend» - - - - -&gt;
						<p>
													(préciser la condition) prolongements logiques de la tâche A pdt B
						</p>
					</li>
					<li>&gt; A utiliser avec modération </li>
								</ol>

				<p>
					Le cas d'utilisation est une description des interactions qui vont
					permettre à l'acteur d'atteindre son objectif en utilisant le système.{" "}
				</p>
				<p>
					Les use case (cas d'utilisation) sont représentés par une ellipse
					sous-titrée par le nom du cas d'utilisation (éventuellement le nom est
					placé dans l'ellipse).
				</p>
				<p>
					Un acteur et un cas d'utilisation sont mis en relation par une
					association représentée par une ligne.
				</p>

		
					<div className="container_img">
						{<Image src={usecase_diagram} alt="usecase_diagram" />}
					</div>
			

				<div className="iconScroll">
					<FaCircleArrowUp onClick={scrollToTop} />
				</div>
			</div>
		</MenuStyled>
	);
};

const MenuStyled = styled.div``;
export default Uml3;
