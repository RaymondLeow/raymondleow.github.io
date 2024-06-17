import React from "react";
import tw from "twin.macro";
import styled from "styled-components";
import { NavLink } from "../headers/light.js";

import { SectionDescription } from "../misc/Typography.js";
import BackgroundImage from "../../images/osaka-background.jpg";
const Container = styled.div`
  ${tw`relative -mx-8 -mt-8 bg-center bg-cover h-screen min-h-144`}
  background-image: url(${BackgroundImage})
`;

const OpacityOverlay = tw.div`z-10 absolute inset-0 bg-black opacity-75`;

const HeroContainer = tw.div`z-20 relative px-6 sm:px-8 mx-auto h-full flex flex-col`;
const Content = tw.div`px-4 flex flex-1 flex-col justify-center items-center`;
const Heading = styled.h1`
  ${tw`text-center sm:text-3xl lg:text-5xl xl:text-6xl font-black text-gray-100 leading-snug -mt-24 sm:mt-0`}
  span {
    ${tw`inline-block mt-2`}
  }
`;
const Description = tw(SectionDescription)`w-full text-center text-gray-300`;

const PrimaryAction = tw.button`rounded-full px-8 py-3 mt-10 text-sm sm:text-base sm:mt-16 sm:px-8 sm:py-4 font-bold shadow-md transition-all duration-300 bg-gray-300 text-gray-800 hocus:bg-gray-400 hocus:text-gray-900 focus:outline-none focus:shadow-outline`;
const FlexContainer = tw.div`flex items-start flex-col `;
const Footer = tw.footer`text-center h-screen flex flex-col justify-end`;
const BottomText = tw.p`bottom-0 h-[160px] bottom-0 h-40 p-0 overflow-hidden font-plaster text-[225px] font-[900] leading-[0.9em] text-black`;

class FourthPage extends React.Component {
  constructor(props) {
    super(props);
    this.sendEmail = this.sendEmail.bind(this);
    this.state = {
      email: "leow.ray@gmail.com",
      subject: "Hi Raymond!",
    };
  }

  /* <Container>
        <OpacityOverlay />
        <div style={{ backgroundImage: `url(${BackgroundImage})` }}></div>
        <HeroContainer>
          <Content>
            {description && <Description>{description}</Description>}
            <Heading>{this.state.email}</Heading>
            <PrimaryAction onClick={this.sendEmail}>
              Get in touch!
            </PrimaryAction>
          </Content>
          <Footer>
            <Description>
              <NavLink href={LILink}>{LIDesc}</NavLink>
            </Description>
          </Footer>
        </HeroContainer>
      </Container> */
  sendEmail() {
    window.location.href = `mailto:${this.state.email}?subject=${this.state.subject}`;
  }

  render() {
    const description = "Interested? Find me at:";
    const LILink = "https://www.linkedin.com/in/raymond-leow/";
    const LIDesc = "Connect with LinkedIn!";
    return (
      <Footer>
        <BottomText>RAYMOND</BottomText>
      </Footer>
    );
  }
}
export default FourthPage;
