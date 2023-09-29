import styled from "styled-components";
import Cheatsheet from "./Cheatsheet";

// imsc snippet

const Home = () => {
	return (
		<HomePageStyled>
			<div>
				<h1>Titre 1 Home</h1>
				<p>Lolor sit amet consectetur adipisicing elit. Quo veritatis ea earum
				nihil culpa quos quibusdam error vitae dolorum sint impedit non
				necessitatibus expedita distinctio fugit, suscipit consectetur tempora
				laboriosam?</p>
				{<Cheatsheet />}
				</div>
							
			<div>
				<h1>Titre 2 Home</h1>
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

const HomePageStyled = styled.div``;

export default Home;
