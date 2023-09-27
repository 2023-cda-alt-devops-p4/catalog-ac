import styled from "styled-components";
import { Link, Outlet } from "react-router-dom";
// import { theme } from "../assets/css/theme";

// imsc snippet

const Home = () => {
	return (
		<HomePageStyled>
			<div>
				<h1>Titre 1 Home</h1>
				Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quo veritatis
				ea earum nihil culpa quos quibusdam error vitae dolorum sint impedit non
				necessitatibus expedita distinctio fugit, suscipit consectetur tempora
				laboriosam? Debitis tempore, nulla a repudiandae dignissimos
				necessitatibus esse quaerat voluptatibus blanditiis, fugit aspernatur
				culpa ratione harum autem quo, sequi aperiam corrupti neque pariatur.
				Et, vel blanditiis? Dolorem at excepturi tempore. Sequi, odit numquam
				itaque ipsam dolores magni quas tempora impedit atque fuga explicabo,
				nam facere nesciunt quae, officiis placeat molestias. Distinctio nulla
				pariatur et dignissimos tempora commodi labore cupiditate ut?
			</div>
		</HomePageStyled>
	);
};

const HomePageStyled = styled.div`
 background-color: #f48ce7; 
	display: flex;
	max-width: 100vw;

	/* :–☆–:*:–☆–:*:–☆–:*:–☆–:*:–☆–:*:–☆–: */
	/*//! -- MEDIA QUERIES --★゜・。。・゜゜・。。・゜☆゜・。。・゜゜・。。・゜★゜・。。・゜゜・。。・゜☆ */
	/* -▼･ェ･▼･ェ･▼･ェ･▼･ェ･▼･ェ･▼･ェ･▼･ェ･▼- */

	@media (max-width: 1023px) {
		/* background-color: #bfcbbc; */
	}

	@media (max-width: 780px) {
		/* background-color: #befbb0; */
	}
`;

export default Home;
