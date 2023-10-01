import { useState } from "react";
import styled from "styled-components";
import { theme } from "../assets/css/theme";

function Image(props) {
	const [imgClicked, setImgClicked] = useState(false);

	const showImage = () => {
		setImgClicked(true);
	};

	const hideImage = () => {
		setImgClicked(false);
	};

	return (
		<ImageStyled>
			<img src={props.src} alt={props.alt} onClick={showImage} />
			{imgClicked && (
				<img
					src={props.src}
					alt={props.alt}
					className="imgZoom"
					onClick={hideImage}
				/>
			)}
		</ImageStyled>
	);
}

const ImageStyled = styled.div`
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
`;
export default Image;
