import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { theme } from "../assets/css/theme";

const Page404 = () => {
	const navigate = useNavigate();

	return (
		<>
			<ErrorpageStyled>
				<div className="errorDiv"> ▂▃▅▇█▓▒░ ERREUR 404 ░▒▓█▇▅▃▂ </div>
				<div className="emptyPage">╱╲╱╳╲╱╲ page introuvable ╱╲╱╳╲╱╲</div>
				<div>( ´•̥̥̥ω•̥̥̥` )</div>
				<div>
					<button
						className="linkHome"
						onClick={() => {
							console.log("redirecting.....");
							navigate(-1);
						}}
					>
						RETOUR
					</button>
				</div>
				<img
					src="https://res.cloudinary.com/dp28uacxh/image/upload/v1676312694/Vinted/merilestfou_ivikyz.jpg"
					alt=""
				/>
			</ErrorpageStyled>
		</>
	);
};

const ErrorpageStyled = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	max-width: 100vw;
	/* gap: 10px; */
	/* font-size: ${theme.fonts.P0};  */
	background-color: red;

	.errorDiv {
		padding-top: ${theme.spacing.xs};
		font-size: ${theme.fonts.P5};
		color: ${theme.colors.semiDarkOrange};
		font-family: ${theme.fontFamily.fontTitle}, arial;
		background-color: red;
	}

	.emptyPage {
		font-size: ${theme.fonts.XXS};
		color: ${theme.colors.darkOrange};
		font-family: ${theme.fontFamily.fontTitle};
	}
	img {
		max-width: 200px;
	}

	/* :–☆–:*:–☆–:*:–☆–:*:–☆–:*:–☆–:*:–☆–: */
	/*//! -- MEDIA QUERIES --★゜・。。・゜゜・。。・゜☆゜・。。・゜゜・。。・゜★゜・。。・゜゜・。。・゜☆ */
	/* -▼･ェ･▼･ェ･▼･ェ･▼･ェ･▼･ェ･▼･ェ･▼･ェ･▼- */

	@media (max-width: 1400px) {
		/* min-height: 90%;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		max-width: 100vw;
		gap: 25px;
		font-size: ${theme.fonts.P0};
		background-color: red; */

		.errorDiv {
			padding-top: ${theme.spacing.md};
			font-size: ${theme.fonts.P5};
			color: ${theme.colors.semiDarkOrange};
			font-family: ${theme.fontFamily.fontTitle}, arial;
		}

		.emptyPage {
			font-size: ${theme.fonts.P2};
			color: ${theme.colors.darkOrange};
			font-family: ${theme.fontFamily.fontTitle};
		}

		.linkHome {
			background-color: ${theme.colors.orange};
			color: ${theme.colors.darkOrange};
			font-weight: ${theme.weights.semiBold};
			box-shadow: 3px 3px 10px ${theme.colors.greySemiDark};
			padding: ${theme.spacing.md};
			border: none;
			border-radius: ${theme.borderRadius.extraRound};
		}

		img {
			max-width: 350px;
			border-radius: ${theme.borderRadius.extraRound};
			box-shadow: 5px 5px 10px #444444;
		}
	}

	@media (max-width: 1300px) {
		gap: 22px;
		/* background-color: #22e64d; */

		.errorDiv {
			font-size: ${theme.fonts.P4};
		}

		img {
			max-width: 400px;
		}
	}

	@media (max-width: 1023px) {
		/* background-color: #a302b2; */
		.errorDiv {
			/* font-size: ${theme.fonts.P3}; */
		}

		img {
			max-width: 350px;
		}
	}

	@media (max-width: 780px) {
		min-height: 95vh;
		background-color: #b29df1;
		/* border: 2px solid black; */

		::-webkit-scrollbar {
			display: none;
		}
	}
`;

export default Page404;
