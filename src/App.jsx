import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import styled from "styled-components";

// import des pages
import Header from "./components/Header";
import Home from "./views/Home";
import Cheatsheet from "./views/Cheatsheet";
import Ressources from "./views/Ressources";
import Page404 from "./views/Page404";

import Navbar from "./views/Navbar";

import Uml from "./views/uml";
import Uml1 from "./views/uml/uml1/Uml1";
import Uml2 from "./views/uml/uml2/uml2";

import Merise from "./views/Merise";
import Merise1 from "./views/merise/merise1/Merise1";
import Merise2 from "./views/merise/merise2/Merise2";
import Footer from "./components/Footer";

function App() {
	return (
		<>
			<h1>Catalogue de diagrammes UML + Merise ------</h1>
			<div>
				<Router>
					<Header />
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
					<Footer />
				</Router>
			</div>
		</>
	);
}
// const  = styled.`     `;

export default App;
