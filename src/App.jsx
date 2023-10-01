import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import styled from "styled-components";
import { theme } from "../src/assets/css/theme";

// import des pages
import Header from "./components/Header";
import Home from "./views/Home";
import Cheatsheet from "./views/Cheatsheet";
import Ressources from "./views/Ressources";
import Page404 from "./views/Page404";
import Footer from "./components/Footer";

import Uml from "./views/Uml.jsx";
import Uml1 from "./views/uml/uml1/Uml1";
import Uml2 from "./views/uml/uml2/Uml2";
import Uml3 from "./views/uml/uml3/Uml3";
import Uml4 from "./views/uml/uml4/Uml4";
import Uml5 from "./views/uml/uml5/Uml5";

import Merise from "./views/Merise";
import Merise1 from "./views/merise/merise1/Merise1";
import Merise2 from "./views/merise/merise2/Merise2";
import Merise3 from "./views/merise/merise3/Merise3";
import Merise4 from "./views/merise/merise4/Merise4";
import Merise5 from "./views/merise/merise5/Merise5";
import Merise6 from "./views/merise/merise6/Merise6";
import Merise7 from "./views/merise/merise7/Merise7";
import Merise8 from "./views/merise/merise8/Merise8";


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
							<Route path="/uml/uml3" element={<Uml3 />} />
							<Route path="/uml/uml4" element={<Uml4 />} />
							<Route path="/uml/uml5" element={<Uml5 />} />
						</Route>
						<Route path="/merise" element={<Merise />}>
							<Route path="/merise/merise1" element={<Merise1 />} />
							<Route path="/merise/merise2" element={<Merise2 />} />
							<Route path="/merise/merise3" element={<Merise3 />} />
							<Route path="/merise/merise4" element={<Merise4 />} />
							<Route path="/merise/merise5" element={<Merise5 />} />
							<Route path="/merise/merise6" element={<Merise6 />} />
							<Route path="/merise/merise7" element={<Merise7 />} />
							<Route path="/merise/merise8" element={<Merise8 />} />
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
		/* font-family: ${theme.fontFamily.fontTitle}, arial; */
		font-weight: ${theme.weights.bold};
		font-size: ${theme.fonts.P2};
		box-shadow: 5px 5px 10px ${theme.colors.semiDarkAmber};
		color: ${theme.colors.white_peach};
		background-color: ${theme.colors.darkMint};
	}

	h2 {
		padding: ${theme.spacing.xs};
		margin-bottom: ${theme.spacing.sm};
		/* font-family: ${theme.fontFamily.fontTitle}, arial; */
		font-weight: ${theme.weights.bold};
		font-size: ${theme.fonts.P1};
		color: ${theme.colors.darkOrange};
	}

	h3 {
		margin-top: ${theme.spacing.md};
		font-weight: ${theme.weights.bold};
		font-size: ${theme.fonts.P1};
		color: ${theme.colors.darkMint};
	}

	h4 {
		margin-top: ${theme.spacing.sm};
		padding: ${theme.spacing.xs};
		font-weight: ${theme.weights.bold};
		font-family: ${theme.fontFamily.fontTitle}, arial;
		font-size: ${theme.fonts.P0};
		color: ${theme.colors.semiDarkOrange};
	}

	.outlet {
		background-color: ${theme.colors.vanilla};
		padding: ${theme.spacing.md};
		padding-bottom: 15vh;
		flex-wrap: wrap;
		margin: 10px auto;
		margin-right: 10vh;
		min-width: 100vw;
	}

	.outlet h1 {
		padding: ${theme.spacing.sm};
		margin-bottom: ${theme.spacing.md};
		font-weight: ${theme.weights.bold};
		font-size: ${theme.fonts.P2};
		box-shadow: 5px 5px 10px ${theme.colors.semiDarkAmber};
		color: ${theme.colors.white_peach};
	}

	.outlet h2 {
		/* padding: ${theme.spacing.xs}; */
		font-family: ${theme.fontFamily.fontTitle}, arial;
		font-weight: ${theme.weights.bold};
		font-size: ${theme.fonts.P1};
		background-color: ${theme.colors.amber};
		box-shadow: 5px 5px 10px ${theme.colors.semiDarkAmber};
		color: ${theme.colors.darkOrange};
		margin-top: ${theme.spacing.md};
	}

	.outlet ul {
		padding: ${theme.spacing.xs};
		list-style-type: decimal;
		list-style-position: inside;
		margin-left: 20px;
	}

	.outlet li {
		padding: ${theme.spacing.xs};
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
		/* width: 30vw; */
	}

	img {
		width: 40vw;
		box-shadow: 5px 5px 10px ${theme.colors.darkMint};
		border-radius: ${theme.borderRadius.round};
		object-fit: cover;
		margin-bottom: 1vh;
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

	em {
		padding: ${theme.spacing.xs};
		font-weight: ${theme.weights.bold};
	}

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
		}
	}
`;

export default App;
