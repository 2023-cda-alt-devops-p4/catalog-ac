import React from "react";
import { Link, Outlet } from "react-router-dom";
const Merise = () => {
	return (
		<div>
			<Link to="/merise/merise1">Service Merise1</Link>
			<Link to="/merise/merise2">Service Merise2</Link>
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
