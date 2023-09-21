import { Link, useNavigate } from "react-router-dom";


const Page404 = () => {

    const navigate = useNavigate();

    return (<>
        <div className="container_page404">

            <div> ▂▃▅▇█▓▒░ ERREUR 404  ░▒▓█▇▅▃▂  </div>
            <div>╱╲╱╳╲╱╲ page introuvable ╱╲╱╳╲╱╲</div>
            <div>( ´•̥̥̥ω•̥̥̥` )</div>
            <img src="https://res.cloudinary.com/dp28uacxh/image/upload/v1676312694/Vinted/merilestfou_ivikyz.jpg" alt="" />

        </div>

        <div className="link-home">
            <button
                onClick={() => {
                    console.log("redirecting.....");
                    navigate(-1);
                }}>RETOUR</button>

            {/* <Link to={"/"}>retourner sur la page d'accueil</Link> */}
        </div>







    </>)
}




export default Page404;