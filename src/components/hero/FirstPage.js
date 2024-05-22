import React from "react";
import styled from "styled-components";
import tw from "twin.macro";
import HeaderBase, { NavLinks, NavLink } from "../headers/light.js";
import AnimationRevealPage from "../../helpers/AnimationRevealPage.js";
import { SectionHeading } from "../misc/Headings.js";
import BackgroundImage from "../../images/winter-background.jpg";

const OpacityOverlay = tw.div`absolute inset-0 bg-black opacity-75`;
const Header = tw(HeaderBase)`z-50 max-w-none top-0 text-gray-100 pt-3`;
const Row = tw.div`h-full relative`;
const Heading = tw(
  SectionHeading
)`text-left bottom-0 absolute text-gray-100 leading-3 tracking-tight sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl`;
const Introduction = tw.div`font-light text-gray-100 text-right sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl px-8 py-8`;
const PrimaryAction = tw.button`rounded-full px-8 py-3 mt-10 text-sm sm:text-base sm:mt-16 sm:px-8 sm:py-4 font-bold shadow-md transition-all duration-300 bg-gray-300 text-gray-800 hocus:bg-gray-400 hocus:text-gray-900 focus:outline-none focus:shadow-outline`;

const HeroContainer = tw.div`z-20 relative px-6 sm:px-8 mx-auto h-full flex flex-col`;
const Content = tw.div`px-4 flex flex-1 flex-col justify-center items-center`;
const Container = styled.div`
  ${tw`relative -mx-8 -mt-8 bg-center bg-cover h-screen min-h-144`}
  background-image: url(${BackgroundImage})
`;
class FirstPage extends React.Component {
  constructor(props) {
    super(props);
    this.moveDown = this.moveDown.bind(this);
    this.moveBottom = this.moveBottom.bind(this);
  }

  moveDown() {
    this.props.fullpageApi.moveSectionDown();
  }

  moveBottom() {
    this.props.fullpageApi.moveTo(4);
  }

  render() {
    const navLinks = [
      <NavLinks key={1}>
        <NavLink href="/">Start</NavLink>
        <NavLink href="/#/portfolio">Portfolio</NavLink>
        <NavLink href="/#/about">About</NavLink>
        <NavLink onClick={this.moveBottom}>Contact</NavLink>
      </NavLinks>,
    ];
    const heading = "Raymond Leow";
    const description =
      "Hi! This site is still under development. Please hold on! :)";
    const scroll = "SCROLL";
    return (
      <>
        <Row>
          <Container>
            <OpacityOverlay />
            <div style={{ backgroundImage: `url(${BackgroundImage})` }}></div>
            <AnimationRevealPage>
              <HeroContainer>
                <Header links={navLinks} />
                <Content>
                  <Heading>{heading}</Heading>
                </Content>
              </HeroContainer>
              <HeroContainer>
                <Content>
                  <Introduction>{description}</Introduction>
                  <PrimaryAction onClick={this.moveDown}>
                    Let's start!
                  </PrimaryAction>
                </Content>
              </HeroContainer>
            </AnimationRevealPage>
          </Container>
        </Row>
      </>
    );
  }
}

export default FirstPage;
