import styled from "styled-components";
import { theme } from "../assets/css/theme";
import { Link } from "react-router-dom";

import Image from "../components/Image";
//import images
import sheldon from "../assets/img/sheldon.gif";


// imsc snippet

const Home = () => {
	return (
		<HomePageStyled>
			<h1>Vue d'ensemble du langage UML et de la méthode MERISE</h1>

			<ul className="ul_home">
				<li className="li_home">
					{" "}
					<Link className="link_home" to="/cheatsheet">
						<h2>Cheatsheet</h2>
						<p>
							la page des penses-bêtes et autre infos importantes à avoir sous
							la main
						</p>
					</Link>
				</li>

				<li className="li_home">
					{" "}
					<Link className="link_home" to="/uml">
						<h2 className="h2_even">UML</h2>
						<p>
							un ensemble de pages qui résument des infos sur le langage UML
						</p>
					</Link>
				</li>

				<li className="li_home">
					<Link className="link_home" to="/merise">
						<h2>MERISE</h2>
						<p>
							un ensemble de pages qui résument toutes les principales infos sur
							la méthode MERISE
						</p>
					</Link>
				</li>

				<li className="li_home">
					<Link className="link_home" to="/ressources">
						<h2 className="h2_even">Ressources</h2>
						<p>liste des sites et vidéos indispensables sur ces sujets</p>
					</Link>
				</li>
			</ul>

			<div className="container_img">
				{<Image src={sheldon} alt="sheldon" />}
			</div>
		</HomePageStyled>
	);
};

const HomePageStyled = styled.div`
	.ul_home {
		margin: auto;
		width: 50vw;
	}

	.li_home {
		display: flex;
		justify-content: flex-start;
		align-items: center;
		border: 1px solid ${theme.colors.white_peach};
		background-color: ${theme.colors.semiDarkAmber};
		margin-bottom: 1vh;
	}

	.li_home:nth-child(even) {
		display: flex;
		justify-content: flex-end;
		align-items: center;
		border: 1px solid ${theme.colors.white_peach};
		background-color: ${theme.colors.semiDarkAmber};
		margin-bottom: 1vh;
	}

	.ul_home h2 {
		font-weight: ${theme.weights.light};
		font-size: ${theme.fonts.P3};
		font-family: ${theme.fontFamily.fontTitle}, arial;
		color: ${theme.colors.vanilla};
		margin: 0;
	}

	.h2_even {
		display: flex;
		justify-content: flex-end;
		align-items: center;
	}

	.ul_home a {
		color: ${theme.colors.vanilla};
		font-size: ${theme.fonts.XS};
	}

	.ul_home a:hover,
	h2:hover {
		color: ${theme.colors.kumquat};
	}

	.ul_home a:focus,
	h2:focus {
		color: ${theme.colors.mint};
	}
`;

export default Home;
