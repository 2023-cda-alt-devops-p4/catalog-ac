import { Link } from "react-router-dom";
import styled from "styled-components";
import { theme } from "../../../assets/css/theme";
import { FaCircleArrowUp } from "react-icons/fa6";

import Image from "../../../components/Image";
//import images
// import merise_niveaux from "../../../assets/img/merise_niveaux.png";
// import merise_decoupage_niveaux from "../../../assets/img/merise_decoupage_niveaux.png";

const Merise5 = () => {
	const scrollToTop = () => {
		window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
	};
	return (
		<MenuStyled>
			<div className="outlet">
				<h1>LE MLD - MODELE LOGIQUE DES DONNEES</h1>
				<h2>sous titre h2</h2>
				<h3>sous titre h3</h3>
				<h4>sous titre h4</h4>
				<p></p>
				<p></p>
				<p></p>
				<p></p>
				<p></p>

				<ul>
					<li></li>
					<li></li>
					<li></li>
					<li></li>
				</ul>

				<div>
					<div className="container_img">{/* <Image src={} alt="" /> */}</div>
				</div>
				<p></p>
				<em></em>
				<div className="iconScroll">
					<FaCircleArrowUp onClick={scrollToTop} />
				</div>
			</div>
		</MenuStyled>
	);
};

const MenuStyled = styled.div``;
export default Merise5;
