import styled from "styled-components";
import { theme } from "../assets/css/theme";

import Image from "../components/Image";
//import images
import sheldon from "../assets/img/sheldon.gif";

// imsc snippet

const Home = () => {
	return (
		<HomePageStyled>
			<h1>Vue d'ensemble du langage UML et de la méthode MERISE</h1>
			<div>
				<h2>Cheatsheet</h2>
				<p>
					la page des penses-bêtes et autre infos importantes à avoir sous la
					main
				</p>
			</div>

			<div>
				<h2>UML</h2>
				<p>un ensemble de pages qui résument des infos sur le langage UML</p>
			</div>

			<div>
				<h2>MERISE</h2>
				<p>
					un ensemble de pages qui résument toutes les principales infos sur la
					méthode MERISE
				</p>
			</div>

			<div>
				<h2>Ressources</h2>
				<p>liste des sites et vidéos indispensables sur ces sujets</p>
			</div>

			<div className="container_img">
				{<Image src={sheldon} alt="sheldon" />}
			</div>
		</HomePageStyled>
	);
};

const HomePageStyled = styled.div``;

export default Home;
