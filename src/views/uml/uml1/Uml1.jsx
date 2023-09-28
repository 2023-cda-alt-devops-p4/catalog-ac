import { Link } from "react-router-dom";
import styled from "styled-components";
import { theme } from "../../../assets/css/theme";
import { FaCircleArrowUp } from "react-icons/fa6";

const Uml1 = () => {
	const scrollToTop = () => {
		window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
	};

	return (
		<UmlStyled>
			<h1>Diagramme UML 1</h1>
			<h2>sous-titre</h2>
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
			<h1>Diagramme UML 1</h1>
			<h2>sous-titre</h2>
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
		</UmlStyled>
	);
};

const UmlStyled = styled.div`
	.iconScroll {
		color: ${theme.colors.kumquat};
		font-size: 3rem;
		position: fixed;
		bottom: 13vh;
		right: 5vw;
	}

	.iconScroll:hover {
		color: ${theme.colors.mint};
		cursor: pointer;
	}
`;
export default Uml1;
