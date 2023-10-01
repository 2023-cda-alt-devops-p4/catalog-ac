import React from "react";
import styled from "styled-components";
import { theme } from "../assets/css/theme";
import { FaCircleArrowUp } from "react-icons/fa6";
import Image from "../components/Image";
//import images
// import sheldon from "../assets/img/sheldon.gif";


const Cheatsheet = () => {
	const scrollToTop = () => {
		window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
	};

	return (
		<MeriseStyled>
			<div className="outlet">
				<h1>Cheatsheet</h1>
				<ol>
					<li>entités Merise = pluriel vs UML : singulier</li>
					<li>attention différence cardinalités Merise vs multiplicités UML</li>
				</ol>
				{/* <div className="container_img_mini">
				{<Image src={} alt="" />}
			</div> */}

				<h2>MERISE</h2>

				<ul className="ul_cheatsheet">
					<li>
						le MCD ne tient pas compte du SGBD et du langage de programmation à
						suivre
					</li>
					<li>on fait ds l'ordre un MCD puis MLD puis un MPD</li>
					<li>
						le dictionnaire des données est un document qui regroupe toutes les
						données que vous aurez à conserver dans votre base (et qui
						figureront donc dans le MCD).
					</li>
					<li>
						logiciels MERISE : AnalyseSI-0.80 (gratuit) et SAP PowerDesigner
						(payant)
						<a
							className="a_cheatsheet"
							href="https://www.youtube.com/watch?v=J1ix6C493B0&list=PL5v61AVkUtCa7RluR5Zmi2GuGH98mmyEv&index=6&ab_channel=NacerRAMMI"
							target="_blank"
						>
							(vidéo)
						</a>
					</li>
					<p>
						<em>Dépendance Fonctionnelle :</em>
					</p>
					<li>
						une information B dépend fonctionnellement d'une information A si et
						seulement si à une seule valeur de A, il n'est possible d'associer
						qu'une et une seule valeur de B.
					</li>
					<li>
						si l'information dépend fonctionnellement de plusieurs autres
						informations, on dira alors que la dépendance fonctionnelle est{" "}
						<em>composée</em>.
					</li>
				</ul>
				<h2>UML</h2>

				<ul>
					<li></li>
					<li></li>
				</ul>
				<div className="iconScroll">
					<FaCircleArrowUp onClick={scrollToTop} />
				</div>
			</div>
		</MeriseStyled>
	);
};
const MeriseStyled = styled.div`
	.ul_cheatsheet a {
		font-weight: ${theme.weights.semiBold};
		font-size: ${theme.fonts.P1};
		color: ${theme.colors.darkMint};
	}

	.ul_cheatsheet a:hover {
		color: ${theme.colors.mint};
	}

	.ul_cheatsheet a:focus {
		color: ${theme.colors.orange};
	}
	/* :–☆–:*:–☆–:*:–☆–:*:–☆–:*:–☆–:*:–☆–: */
	/*//! -- MEDIA QUERIES --★゜・。。・゜゜・。。・゜☆゜・。。・゜゜・。。・゜★゜・。。・゜゜・。。・゜☆ */
	/* -▼･ェ･▼･ェ･▼･ェ･▼･ェ･▼･ェ･▼･ェ･▼･ェ･▼- */

	@media (min-width: 1024px) {
	}

	@media (max-width: 1023px) {
	}

	@media (max-width: 780px) {
	}

	@media (max-width: 300px) {
	}
`;
export default Cheatsheet;
