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
				<div className="smiley">( ´•̥̥̥ω•̥̥̥` )</div>
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
	gap: 10px;

	.errorDiv {
		padding-top: ${theme.spacing.sm};
		color: ${theme.colors.semiDarkOrange};
		font-family: ${theme.fontFamily.fontTitle}, arial;
	}

	.emptyPage {
		font-size: ${theme.fonts.XS};
		color: ${theme.colors.darkOrange};
		font-family: ${theme.fontFamily.fontTitle};
	}

	.smiley {
		margin: 10px auto;
	}

	img {
		border-radius: ${theme.borderRadius.extraRound};
		box-shadow: 5px 5px 10px ${theme.colors.greySemiDark};
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

	/* :–☆–:*:–☆–:*:–☆–:*:–☆–:*:–☆–:*:–☆–: */
	/*//! -- MEDIA QUERIES --★゜・。。・゜゜・。。・゜☆゜・。。・゜゜・。。・゜★゜・。。・゜゜・。。・゜☆ */
	/* -▼･ェ･▼･ェ･▼･ェ･▼･ェ･▼･ェ･▼･ェ･▼･ェ･▼- */

	@media (max-width: 2000px) {
		.errorDiv {
			padding-top: ${theme.spacing.md};
			font-size: ${theme.fonts.P5};
		}

		.emptyPage {
			font-size: ${theme.fonts.P2};
		}

		img {
			max-width: 400px;
			margin: 10px auto;
		}
	}

	@media (max-width: 1023px) {
		.errorDiv {
			font-size: ${theme.fonts.P3};
		}
		img {
			max-width: 300px;
		}
	}

	@media (max-width: 780px) {
		min-height: 95vh;
		.errorDiv {
			font-size: ${theme.fonts.P0};
		}

		.emptyPage {
			font-size: ${theme.fonts.XXS};
		}

		.smiley {
			margin: 3px auto;
			font-size: ${theme.fonts.XXS};
		}

		img {
			max-width: 200px;
		}
		/* ::-webkit-scrollbar {
			display: none;
		} */
	}
`;

export default Page404;
