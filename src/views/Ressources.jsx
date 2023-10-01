import { Link } from "react-router-dom";
import styled from "styled-components";
import { theme } from "../assets/css/theme";

const Ressources = () => {
	return (
		<RessourcesStyled>
			<div className="container_ressources">
				<h1>Ressources</h1>
				<br />

				<ul>
					<li>
						{" "}
						<a
							href="https://www.youtube.com/watch?v=sRujQXD97R4&list=PL5v61AVkUtCa7RluR5Zmi2GuGH98mmyEv&index=4&ab_channel=NacerRAMMI
				 "
							target="_blank"
						>
							[Vidéo - chaîne NacerRAMMI] <em>la méthode MERISE</em>
						</a>
					</li>
					<li>
						<a
							href="https://www.univ-constantine2.dz/CoursOnLine/Benelhadj-Mohamed/co/grain3_2.html"
							target="_blank"
						>
							[Site - univ-constantine2.dz] <em>Dictionnaire de données</em>
						</a>
					</li>
					<li>
						{" "}
						<a
							href="http://www.colar.net/as/cours/analyse/dico3.html"
							target="_blank"
						>
							[Site - colar.net] <em>Dictionnaire épuré de données</em>
						</a>
					</li>
					<li>
						<a
							href="https://drive.google.com/file/d/1pxhijfLA22G66tOAf3KmbpMWdIVqu_7b/view?usp=sharing"
							target="_blank"
						>
							[PDF] <em>Guide de la méthode MERISE (215 pages)</em>
						</a>
					</li>
					<li>
						<a href="https://www.omg.org/spec/UML/2.5.1/PDF" target="_blank">
							[PDF]{" "}
							<em>
								Spécification de l'UML - décembre 2017 par l'OMG (796 pages -
								english)
							</em>
						</a>
					</li>
					{/* <li>
						<a href="" target="_blank">
							[PDF] <em></em>
						</a>
					</li> */}
					{/* <li>
						<a href="" target="_blank">
							[PDF] <em></em>
						</a>
					</li> */}
				</ul>
			</div>
		</RessourcesStyled>
	);
};
const RessourcesStyled = styled.div`
	.container_ressources {
		padding: ${theme.spacing.xs};
		margin-left: 20px;
	}

	.container_ressources ul {
		padding: ${theme.spacing.md};
		list-style-type: decimal;
		list-style-position: inside;
	}

	.container_ressources li {
		padding: ${theme.spacing.sm};
		font-weight: ${theme.weights.semiBold};
	}

	.container_ressources a {
		font-weight: ${theme.weights.regular};
		font-size: ${theme.fonts.P1};
		color: ${theme.colors.darkMint};
	}

	.container_ressources a:hover {
		color: ${theme.colors.mint};
	}

	a:focus {
		color: ${theme.colors.mint};
	}
`;
export default Ressources;
