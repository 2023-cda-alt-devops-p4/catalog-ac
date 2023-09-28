import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import styled from "styled-components";
import { theme } from "../src/assets/css/theme";

// import des pages
import Header from "./components/Header";
import Home from "./views/Home";
import Cheatsheet from "./views/Cheatsheet";
import Ressources from "./views/Ressources";
import Page404 from "./views/Page404";

import Uml from "./views/Uml.jsx";
import Uml1 from "./views/uml/uml1/Uml1.jsx";
import Uml2 from "./views/uml/uml2/Uml2.jsx";

import Merise from "./views/Merise";
import Merise1 from "./views/merise/merise1/Merise1";
import Merise2 from "./views/merise/merise2/Merise2";
import Footer from "./components/Footer";

function App() {
	return (
		<AppStyled>
			<Router>
				<Header />
				<main className="main">
					<Routes>
						<Route path="/" element={<Home />} />
						<Route path="/cheatsheet" element={<Cheatsheet />} />

						<Route path="/uml" element={<Uml />}>
							<Route path="/uml/uml1" element={<Uml1 />} />
							<Route path="/uml/uml2" element={<Uml2 />} />
						</Route>
						<Route path="/merise" element={<Merise />}>
							<Route path="/merise/merise1" element={<Merise1 />} />
							<Route path="/merise/merise2" element={<Merise2 />} />
						</Route>
						<Route path="/ressources" element={<Ressources />} />
						<Route path="*" element={<Page404 />} />
					</Routes>
				</main>
				<Footer />
			</Router>
		</AppStyled>
	);
}

const AppStyled = styled.div`
	/* display: flex;
	flex-direction: column;
	justify-content: center; */
	/* gap: 5px; */
	border: none;
	/* height: 50%;  */
	font-family: ${theme.fontFamily.fontDefault}, arial;
	/* background-color: #f6a818; */

	.main {
		/* max-width: 100vw; */
		
		min-height: calc((100vh - 30vh)-30vh); 
		/* height: auto; */
		min-height: 90vh;
		background-color: #cabbde;
	}

	/* :–☆–:*:–☆–:*:–☆–:*:–☆–:*:–☆–:*:–☆–: */
	/*//! -- MEDIA QUERIES --★゜・。。・゜゜・。。・゜☆゜・。。・゜゜・。。・゜★゜・。。・゜゜・。。・゜☆ */
	/* -▼･ェ･▼･ェ･▼･ェ･▼･ェ･▼･ェ･▼･ェ･▼･ェ･▼- */

	 @media (max-width: 2000px) {
		.main {
	 min-height: 65vh;
		background-color: #9c5af3;
	}
	} 

	@media (max-width: 1023px) {
		/* background-color: #a302b2; */
		
		 .main {
	 min-height: 70vh;
		background-color: #7d30e2;
	}
	} 

	@media (max-width: 780px) {
		width: 100vw;
		background-color: #55e004;
		/* min-height: calc((100vh - 25vh)-25vh);
		max-height: 100vh;	 */

		/* ::-webkit-scrollbar {
			display: none;	
		} */

		/* min-height: 100vh; */
		/* height: auto; */
		/* background-color: #cca8fc; */

		.main {
		min-height: 100vh;
		background-color: #7d30e2;
	}
	}
`;

export default App;
