import { Link } from "react-router-dom";
import { FaCircleArrowUp } from "react-icons/fa6";

const Uml1 = () => {
	const scrollToTop = () => {
		window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
	};
	return (
		<div>
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
		</div>
	);
};

export default Uml1;
