import styled from "styled-components";
import { theme } from "../assets/css/theme";
import { Link, Outlet } from "react-router-dom";

const Uml = () => {
	return (
		<>
			<MenuUML_Styled>
				<h1>UML</h1>
				<Link to="/uml/uml1">Service uml1</Link>
				<Link to="/uml/uml2">Service uml2</Link>
			</MenuUML_Styled>
			<div>
				<Outlet /> {/*  affiche le contenu d'une navigation imbriquée */}
				<div>
					<h1>Infos UML</h1>
					Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quo
					veritatis ea earum nihil culpa quos quibusdam error vitae dolorum sint
					impedit non necessitatibus expedita distinctio fugit, suscipit
					consectetur tempora laboriosam? Debitis tempore, nulla a repudiandae
					dignissimos necessitatibus esse quaerat voluptatibus blanditiis, fugit
					aspernatur culpa ratione harum autem quo, sequi aperiam corrupti neque
					pariatur. Et, vel blanditiis? Dolorem at excepturi tempore. Sequi,
					odit numquam itaque ipsam dolores magni quas tempora impedit atque
					fuga explicabo, nam facere nesciunt quae, officiis placeat molestias.
					Distinctio nulla pariatur et dignissimos tempora commodi labore
					cupiditate ut?
				</div>
			</div>
		</>
	);
};
const MenuUML_Styled = styled.div`
	border: 1px solid green;
	width: 90vw;
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	justify-content: space-between;
`;
export default Uml;
