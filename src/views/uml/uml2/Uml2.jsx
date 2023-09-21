import { Link } from "react-router-dom";
import styled from "styled-components";

const Uml2 = () => {
	return (
		<div className="container">
			<h1>Diagramme UML 2</h1>
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
				<img src="https://picsum.photos/id/119/320/240" alt="diagramme1" />
			</Link>
		</div>
	);
};

const ContainerUMLStyled = styled.div`
	height: auto;
`;
export default Uml2;
