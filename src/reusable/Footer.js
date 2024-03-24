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
import { SocialIcon } from "react-social-icons";

const Footer = () => {
	return (
		<Box>
			
			<FooterContainer>
				<Row>
					
					
					<Column style={{textAlign:'center'}}>
						<Heading style={{textAlign:'center',paddingBottom:20}}>Contact Us</Heading>
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
					<Column>

					<Heading style={{paddingBottom:20,textAlign:'center'}}>Email</Heading>
					<FooterLink style={{textAlign:'left'}} href="">stmarkssyriacorthodoxchurchns@gmail.com</FooterLink>
					</Column>
					<Column>
						
						<div style={{paddingTop:10,margin:30}}><SocialIcon href="https://www.instagram.com/st.marks_jsoc_halifax" target="_blank" url="www.instagram.com"></SocialIcon>
                        <SocialIcon style={{marginLeft:10}}  href="https://www.facebook.com/people/St-Marks-Jacobite-Syriac-Orthodox-Church-Halifax/61551115438233/?mibextid=ZbWKwL" url="www.facebook.com" target='_blank'></SocialIcon>
						
						
                        </div>
					</Column>
					
				</Row>
			</FooterContainer>
		</Box>
	);
};
export default Footer
