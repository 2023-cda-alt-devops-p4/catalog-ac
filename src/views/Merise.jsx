import React from "react";
import { Link, Outlet } from "react-router-dom";
const Merise = () => {
	return (
		<div>
			<Link to="/merise/merise1">La méthode MERISE</Link>
			<Link to="/merise/merise2">Concepts de bases</Link>
			<Link to="/merise/merise1">
				Vers une modélisation des Données (niveau Conceptuel)
			</Link>
			<Link to="/merise/merise2">Le MCD - MODELE CONCEPTUEL DES DONNEES</Link>
			<Link to="/merise/merise2">Règles de Passage du MCD au MLD </Link>
			<Link to="/merise/merise2">LE MLD - MODELE LOGIQUE DES DONNEES</Link>
			<Link to="/merise/merise2">Règles de Passage du MLD au MPD </Link>
			<Link to="/merise/merise2">LE MPD - MODELE PHYSIQUE DES DONNEES</Link>
			<Link to="/merise/merise1">Normalisation & lexique</Link>
			<div>
				<Outlet /> {/*  affiche le contenu d'une navigation imbriquée */}
				<div>
					<h1>Infos Merise</h1>
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
		</div>
	);
};

export default Merise;
