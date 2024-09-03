import { Link } from "react-router-dom";
import styled from "styled-components";
import { theme } from "../../../assets/css/theme";
import { FaCircleArrowUp } from "react-icons/fa6";

import Image from "../../../components/Image";
//import images
// import merise_niveaux from "../../../assets/img/merise_niveaux.png";
// import merise_decoupage_niveaux from "../../../assets/img/merise_decoupage_niveaux.png";

const Merise4 = () => {
	const scrollToTop = () => {
		window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
	};
	return (
		<MenuStyled>
			<div className="outlet">
				<h1>Règles de Passage du MCD au MLD</h1>

				<h3>Une association binaire de plusieurs à plusieurs devient :</h3>

				<ul>
					<li>Une nouvelle table</li>
					<li>
						La clé primaire est constituée des clés primaires des deux entités{" "}
					</li>
					<li>
						Chacun des attributs de la clé primaire est lui même clé étrangère{" "}
					</li>
					<li>
						Les propriétés de l’association deviennent des attributs de la
						nouvelle table{" "}
					</li>
				</ul>
				<h4>
					Pour réaliser un M.L.D, il faut tenir compte des cardinalités des
					associations :
				</h4>
				<ul>
					<li>Toute entité se transforme en fichier (ou table logique).</li>
					<li>
						Pour les associations non porteuses d'information, on distingue
						trois cas en fonction des cardinalités
					</li>

					<ol>
						<li>
							<em>0,1 ou 1,1 ---association --- 0,n ou 1,n :</em>
							Une commande est passée par un seul client. un client peut avoir
							passé 0 ou n commandes. Il est donc nécessaire de dupliquer dans
							la table COMMANDE l'identifiant de l'entité CLIENT.
						</li>
						<li>
							<em>0,n ou 1,n --- association --- 0,n ou 1,n :</em>
							Une commande se compose d'au moins un produit, un produit fait
							partie d'un nombre quelconque de commandes. Il faut pouvoir
							déterminer, pour chaque commande, les produits associés.
							L'association se transforme en fichier logique où sont dupliqués
							les identifiants des deux entités.
						</li>
						<li>
							<em>0,1 ou 1,1 --- association --- 0,1 ou 1,1 :</em>Il est
							nécessaire de dupliquer dans chaque fichier logique, l'identifiant
							de l'entité en association.
						</li>
						<li>
							la table qui a le<em>poids faible</em>accueille l'id de l'autre
							table. Exemple : entre <em>User</em> &rarr; 1,n ["créer"] 1.1
							&larr; <em>Log</em> = dans la table Log, mettre l'id de User
						</li>
					</ol>

					<li>
						Les associations porteuses d'informations se transforment en table
						selon la règle suivante : par exemple pour une quantité donnée, il
						faut connaître le N° commande et le N° produit. Un fichier logique
						est créé pour l'association et les identifiants des entités sont
						dupliqués.
					</li>
				</ul>
				<p></p>
				<p></p>
				<div>
					<div className="container_img">{/* <Image src={} alt="" /> */}</div>
				</div>
				<p></p>
				<em></em>
				<div className="iconScroll">
					<FaCircleArrowUp onClick={scrollToTop} />
				</div>
			</div>
		</MenuStyled>
	);
};

const MenuStyled = styled.div``;
export default Merise4;
