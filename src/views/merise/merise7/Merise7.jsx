import { Link } from "react-router-dom";
import styled from "styled-components";
import { theme } from "../../../assets/css/theme";
import { FaCircleArrowUp } from "react-icons/fa6";

import Image from "../../../components/Image";
//import images
import merise_mpd from "../../../assets/img/merise_mpd.png";

const Merise7 = () => {
	const scrollToTop = () => {
		window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
	};
	return (
		<MenuStyled>
			<div className="outlet">
				<h1>LE MPD - MODELE PHYSIQUE DES DONNEES</h1>
							<h4>
					Le dernier niveau de la méthode, le niveau physique, représente le
					résultat informatique. Il dépend des logiciels de développement
					nécessaires à la programmation et à la manipulation des données.{" "}
				</h4>
				<p>
					Le modèle physique de traitement comprend les programmes informatiques
					et leur environnement d'exploitation, moniteurs temps réel, traitement
					par lot, temps partagé...
				</p>
				<p>
					Aucune représentation n'est spécifique de MERISE et ne sera
					développée. Le modèle physique de communication comprend la
					télématique entre site informatique, les techniques de transmission de
					données entre applications. Aucune représentation n'est spécifique de
					MERISE et ne sera aussi développée.
				</p>
				<div className="container_img">
									<Image src={merise_mpd} alt="merise_mpd.png" />
				</div>

				<p>
					Il est très facile, à partir d'un M.C.D. de créer un M.P.D avec un
					logiciel.
				</p>
		
								<p>
					On remarquera que le M.P.D. contrairement au M.L.D. tient compte de la
					valeur et de la longueur des données utilisées, de même qu'il vérifie
					la cohérence des informations dupliquées dans chaque table. Il tient
					aussi, et surtout, compte de la base de données destinée à recevoir
					les tables qui seront créées.
				</p>
				<div className="iconScroll">
					<FaCircleArrowUp onClick={scrollToTop} />
				</div>
			</div>
		</MenuStyled>
	);
};

const MenuStyled = styled.div``;
export default Merise7;
