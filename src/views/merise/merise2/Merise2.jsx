import { Link } from "react-router-dom";
import { useState } from "react";
import styled from "styled-components";
import { theme } from "../../../assets/css/theme";
import { FaCircleArrowUp } from "react-icons/fa6";
import { BsFillDiagram3Fill } from "react-icons/bs";

import Image from "../../../components/Image";

//import images
import merise_niveaux from "../../../assets/img/merise_niveaux.png";
import merise_decoupage_niveaux from "../../../assets/img/merise_decoupage_niveaux.png";

const Merise2 = () => {
	const scrollToTop = () => {
		window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
	};

	return (
		<div>
			<div className="outlet">
				<h1>Concepts de bases</h1>
				<div className="container_img">
					<Image
						src={merise_decoupage_niveaux}
						alt="merise_decoupage_niveaux"
					/>
				</div>
				<h2>3 découpages...</h2>
				<p>
					Il s'agit de l'élaboration du Modèle Conceptuel des Données (MCD) qui
					est une représentation graphique et structurée des informations
					mémorisées par un SI. Le MCD est basé sur deux notions principales :
					les entités et les associations, d'où sa seconde appellation : le
					schéma Entité/Association.
				</p>
				<p>L'élaboration du MCD passe par les étapes suivantes :</p>
				<ul>
					<li>
						La mise en place de règles de gestion (si celles-ci ne vous sont pas
						données),
					</li>
					<li>L'élaboration du dictionnaire des données,</li>
					<li>
						La recherche des dépendances fonctionnelles entre ces données,
						(dépendances fonctionnelles sont représentées sous la forme du GDF
						Graphe de Dépendances Fonctionnelles)
					</li>
					<li>
						L'élaboration du MCD (création des entités puis des associations
						puis ajout des cardinalités).
					</li>
				</ul>
				<div>
					<div className="container_img">
						<Image src={merise_niveaux} alt="merise_niveaux" />
					</div>
				</div>
				<p>
					Le nom du modèle reprend la 1ère lettre de Modèle + la 1ère lettre du
					niveau et du découpage
				</p>
				<p>
					<em>modèles les plus importants :</em> MCD puis, MLD, MCC et MCT
				</p>
				<div className="iconScroll">
					<FaCircleArrowUp onClick={scrollToTop} />
				</div>
			</div>
		</div>
	);
};

export default Merise2;
