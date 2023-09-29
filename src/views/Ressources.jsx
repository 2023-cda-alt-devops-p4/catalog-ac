import { Link } from "react-router-dom";
import styled from "styled-components";
import { theme } from "../assets/css/theme";

const Ressources = () => {
	return (
		<RessourcesStyled>
			<h1>Ressources</h1>
			<br />
			<a
				href="https://www.youtube.com/watch?v=sRujQXD97R4&list=PL5v61AVkUtCa7RluR5Zmi2GuGH98mmyEv&index=4&ab_channel=NacerRAMMI
				 "
				target="_blank"
			>
				vidéo sur la méthode MERISE
			</a>
			<a
				href="https://www.univ-constantine2.dz/CoursOnLine/Benelhadj-Mohamed/co/grain3_2.html"
				target="_blank"
			>
				Dictionnaire de données
			</a>
			<a
				href="http://www.colar.net/as/cours/analyse/dico3.html"
				target="_blank"
			>
				Dictionnaire épuré de données
			</a>
			<a
				href="https://drive.google.com/file/d/1pxhijfLA22G66tOAf3KmbpMWdIVqu_7b/view?usp=sharing"
				target="_blank"
			>
				Guide de la méthode MERISE (215 pages)
			</a>
			<a href="" target="_blank">
				Lien 5
			</a>
		</RessourcesStyled>
	);
};
const RessourcesStyled = styled.div`
	/* h1 {
		padding: ${theme.spacing.xs};
		font-weight: ${theme.weights.bold};
		font-size: ${theme.fonts.P2};
		box-shadow: 5px 5px 10px ${theme.colors.semiDarkAmber};
		color: ${theme.colors.white_peach};
	} */
`;
export default Ressources;
