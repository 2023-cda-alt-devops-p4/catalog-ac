import React from "react";
import styled from "styled-components";
import { theme } from "../assets/css/theme";

const Footer = () => {
	return (
		<FooterStyled>
			<div>
				2023 - Made by{" "}
				<a
					href="https://github.com/AudreyAAOO"
					className="link_footer"
					target="_blank"
				>
					Audrey
				</a>
			</div>
		</FooterStyled>
	);
};
const FooterStyled = styled.footer`
	background-color: #3a3002;
	height: 50px;
	width: 100%;
	display: flex;
	justify-content: center;
	align-items: center;
	font-size: 18px;
	color: #fff;

	.link_footer {
		color: #f5bd3a;
	}
	/* :–☆–:*:–☆–:*:–☆–:*:–☆–:*:–☆–:*:–☆–: */
	/*//! -- MEDIA QUERIES --★゜・。。・゜゜・。。・゜☆゜・。。・゜゜・。。・゜★゜・。。・゜゜・。。・゜☆ */
	/* -▼･ェ･▼･ェ･▼･ェ･▼･ェ･▼･ェ･▼･ェ･▼･ェ･▼- */

	@media (max-width: 780px) {
		visibility: hidden;
		display: none;
	}
`;
export default Footer;
