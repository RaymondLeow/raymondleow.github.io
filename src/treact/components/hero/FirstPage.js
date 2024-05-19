import React from "react";
import styled from "styled-components";
import tw from "twin.macro";
import { css } from "styled-components/macro"; //eslint-disable-line
import HeaderBase, { NavLinks, NavLink, PrimaryLink } from "../headers/light.js";
import AnimationRevealPage from "../../helpers/AnimationRevealPage.js";
import { SectionHeading } from "../misc/Headings.js";
import { SectionDescription } from "../misc/Typography.js";
import { PrimaryButton as PrimaryButtonBase } from "../misc/Buttons.js";
import { ReactComponent as CheckboxIcon } from "feather-icons/dist/icons/check-circle.svg";
import { ReactComponent as QuotesLeftIconBase } from "../../images/quotes-l.svg";
import { ReactComponent as SvgDecoratorBlob1 } from "../../images/dot-pattern.svg";
import { Container as ContainerBase, ContentWithVerticalPadding, Content2Xl } from "../misc/Layouts.js";
import { ReactComponent as ArrowDownIcon } from "../../images/outline/arrow-circle-down-white.svg";
import BackgroundImage from "../../images/winter-background.jpg";

const OpacityOverlay = tw.div`absolute inset-0 bg-black opacity-75`;
// const Container = tw(ContainerBase)``;
const VerticalSpacer = tw.div`mt-1 w-full`;
const Header = tw(HeaderBase)`z-50 max-w-none top-0 text-gray-100 pt-3`;
const Row = tw.div`h-full relative`;
const Heading = tw(SectionHeading)`text-left bottom-0 absolute text-gray-100 leading-minus tracking-tight sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl`;
const Filler = tw.div`max-w-none h-full min-w-full bottom-0 z-20 bg-primary-800 font-medium transform text-sm leading-relaxed`
const Introduction = tw.div`font-light text-gray-100 text-right sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl px-8 py-8`
const NavButtonContainer = tw.div`absolute left-icon-c bottom-0`
const NavButton = tw.div` px-8
  my-12 py-4 md:text-base lg:text-lg xl:text-xl text-gray-100 hover:bg-primary-900 font-thin tracking-wide cursor-pointer rounded`

const HeroContainer = tw.div`z-20 relative px-6 sm:px-8 mx-auto h-full flex flex-col`;
const Content = tw.div`px-4 flex flex-1 flex-col justify-center items-center`;
const Description = tw(SectionDescription)`w-full text-center text-gray-300`;
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
      </NavLinks>
    ];
    const heading = "Raymond Leow";
    const description = "Hi! This site is still under development. Please hold on! :)";
    const scroll = "SCROLL";
    return (
      <>
          <Row>
        <Container>
          <OpacityOverlay />
          <div style={{backgroundImage:`url(${BackgroundImage})`}} ></div>
          {/*<Filler>
            <Introduction>{description}</Introduction>
            <NavButtonContainer>
              <NavButton onClick={this.moveDown}>
                {scroll}
                <VerticalSpacer/>
                <ArrowDownIcon tw="transition duration-300 relative left-icon transform w-12 h-12" />
              </NavButton>
            </NavButtonContainer>
          </Filler>*/}
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
              <NavButton onClick={this.moveDown}>
                {scroll}
                <VerticalSpacer/>
                <ArrowDownIcon tw="transition duration-300 relative left-icon transform w-12 h-12" />
              </NavButton>
            </Content>
          </HeroContainer>
        </AnimationRevealPage>
        </Container>
          </Row>
      </>
    );
  }
};

export default FirstPage;