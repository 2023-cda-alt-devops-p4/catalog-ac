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
	/* width: 100vw; */
	background-color: ${theme.colors.amber};
	background-size: cover;
	font-family: ${theme.fontFamily.fontDefault}, arial;

	*,
	::after,
	::before {
		text-decoration: none;
		border: none;
		box-sizing: border-box;
		-ms-overflow-style: none;
	}

	::-webkit-scrollbar {
		display: none;
	}

	.main {
		min-height: 90vh;
	}

	h1 {
		padding: ${theme.spacing.sm};
		margin-bottom: ${theme.spacing.sm};
		font-weight: ${theme.weights.bold};
		font-size: ${theme.fonts.P2};
		box-shadow: 5px 5px 10px ${theme.colors.semiDarkAmber};
		color: ${theme.colors.white_peach};
		background-color: ${theme.colors.darkMint};
	}

	a {
		font-weight: ${theme.weights.regular};
		font-size: ${theme.fonts.P0};
		color: ${theme.colors.white_peach};
	}

	a:hover,
	.btn_menu a:hover {
		color: ${theme.colors.amber};
	}

	a:focus {
		color: ${theme.colors.mint};
	}

	.container_img {
		display: flex;
		justify-content: center;
	}

	img {
		width: 50vw;
		box-shadow: 5px 5px 10px ${theme.colors.darkMint};
		border-radius: ${theme.borderRadius.round};
		object-fit: cover;
	}

	.imgZoom {
		position: fixed;
		z-index: 100;
		box-shadow: 5px 5px 10px ${theme.colors.darkMint};
		background-color: ${theme.colors.white_peach};
		border-radius: ${theme.borderRadius.round};
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
		object-fit: contain;
		width: 90vw;
	}

	p {
		padding: ${theme.spacing.xs};
	}

	.iconScroll {
		color: ${theme.colors.vanilla};
		font-size: 3rem;
		position: fixed;
		bottom: 13vh;
		right: 5vw;
	}

	.iconScroll:hover {
		color: ${theme.colors.mint};
		cursor: pointer;
	}

	/* :–☆–:*:–☆–:*:–☆–:*:–☆–:*:–☆–:*:–☆–: */
	/*//! -- MEDIA QUERIES --★゜・。。・゜゜・。。・゜☆゜・。。・゜゜・。。・゜★゜・。。・゜゜・。。・゜☆ */
	/* -▼･ェ･▼･ェ･▼･ェ･▼･ェ･▼･ェ･▼･ェ･▼･ェ･▼- */

	@media (max-width: 2000px) {
		.main {
			min-height: 65vh;
		}
	}

	@media (max-width: 1023px) {
		.main {
			min-height: 70vh;
		}
	}

	@media (max-width: 780px) {
		width: 100vw;

		.main {
			min-height: 100vh;
		}
	}

	@media (max-width: 300px) {
		.iconScroll {
			font-size: 2rem;
			bottom: 13vh;
			right: 25vw;
		}
	}
`;

export default App;
