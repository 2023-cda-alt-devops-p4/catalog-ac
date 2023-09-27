import { Link } from "react-router-dom";
import styled from "styled-components";
import { FaCircleArrowUp } from "react-icons/fa6";
import { BsFillDiagram3Fill } from "react-icons/bs";
const Merise1 = () => {
	const scrollToTop = () => {
		window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
	};

	return (
		<MeriseStyled>
			<h1>La méthode MERISE</h1>
			<h2>Concepts de bases</h2>
			Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quis perferendis
			officia ratione debitis velit. Dolores quis eos ex consequatur
			perspiciatis. Dolorum doloribus error deserunt alias in itaque autem
			maxime asperiores. Quas suscipit deleniti error, tempora dicta minus ex
			magni dolores debitis temporibus sunt veritatis fugiat amet voluptatibus
			rem cum maxime beatae voluptatum ducimus, voluptate, non excepturi?
			Officiis neque ad inventore!
			<Link to="/">
				<img src="https://picsum.photos/320/240" alt="diagramme1" />
			</Link>
			<h2>sous-titre</h2>
			Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quis perferendis
			officia ratione debitis velit. Dolores quis eos ex consequatur
			perspiciatis. Dolorum doloribus error deserunt alias in itaque autem
			maxime asperiores. Quas suscipit deleniti error, tempora dicta minus ex
			magni dolores debitis temporibus sunt veritatis fugiat amet voluptatibus
			rem cum maxime beatae voluptatum ducimus, voluptate, non excepturi?
			Officiis neque ad inventore!
			<Link to="/">
				<img src="https://picsum.photos/320/240" alt="diagramme2" />
			</Link>
			<div className="iconScroll">
				<FaCircleArrowUp onClick={scrollToTop} />
			</div>
		</MeriseStyled>
	);
};
const MeriseStyled = styled.div`
	.iconScroll {
		color: #e09a0469;
		cursor: pointer;
		font-size: 3rem;
		position: fixed;
		bottom: 50px;
		right: 30px;
	}
`;
export default Merise1;
