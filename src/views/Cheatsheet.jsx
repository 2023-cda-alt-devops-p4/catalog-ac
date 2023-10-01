import React from "react";
import styled from "styled-components";
import { theme } from "../assets/css/theme";

import Image from "../components/Image";
//import images


const Cheatsheet = () => {
	return (
		<CheatsheetStyled>
			<h1>Cheatsheet</h1>
			<p>
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
			</p>
			{/* <div className="container_img">
				<Image
					src={}
					alt=""
				/>
			</div> */}

		</CheatsheetStyled>
	);
};

const CheatsheetStyled = styled.div``;
export default Cheatsheet;
