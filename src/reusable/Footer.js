// Filename - components/Footer.js

import React from "react";
import {
	Box,
	FooterContainer,
	Row,
	Column,
	FooterLink,
	Heading,
} from "./FooterStyles";

const Footer = () => {
	return (
		<Box>
			
			<FooterContainer>
				<Row>
					
					
					<Column>
						<Heading style={{paddingBottom:20}}>Contact Us</Heading>
						<FooterLink href="#">
							437-778-2104
						</FooterLink>
						<FooterLink href="#">
							647-324-8765
						</FooterLink>
						<FooterLink href="#">
							902-990-0991
						</FooterLink>
						
					</Column>
					
				</Row>
			</FooterContainer>
		</Box>
	);
};
export default Footer;
