import React from "react";
import styled from "styled-components";
import tw from "twin.macro";
import Header, {
  NavLink,
  LogoLink,
  NavToggle,
  DesktopNavLinks,
} from "../headers/light.js";
import AnimationRevealPage from "../../helpers/AnimationRevealPage.js";
import { SectionHeading } from "../misc/Headings.js";
import BackgroundImage from "../../images/winter-background.jpg";

const OpacityOverlay = tw.div`absolute inset-0 bg-black opacity-75`;
/* const StyledHeader = styled(Header)`
  ${tw`pt-8 max-w-none w-full`}
  ${DesktopNavLinks} ${NavLink}, ${LogoLink} {
    ${tw`text-gray-100 hover:border-gray-300 hover:text-gray-300`}
  }
  ${NavToggle}.closed {
    ${tw`text-gray-100 hover:text-primary-500`}
  }
`; */
const Heading = tw(
  SectionHeading
)`mb-8 text-left text-gray-100 leading-3 tracking-tight sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl`;
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
    const heading = "Raymond Leow";
    const description =
      "Hi! This site is still under development. Please hold on! :)";
    return (
      <Container>
        <OpacityOverlay />
        <div style={{ backgroundImage: `url(${BackgroundImage})` }}></div>
        <HeroContainer>
          {/* <StyledHeader /> */}
          <AnimationRevealPage>
            <Content>
              <Heading>{heading}</Heading>
              <Introduction>{description}</Introduction>
              <PrimaryAction onClick={this.moveDown}>
                Let's start!
              </PrimaryAction>
            </Content>
          </AnimationRevealPage>
        </HeroContainer>
      </Container>
    );
  }
}

export default FirstPage;
