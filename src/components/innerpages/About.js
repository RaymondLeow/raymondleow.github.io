import React from "react";
import styled from "styled-components";
import tw from "twin.macro";
import HeaderBase from "../headers/light.js";
import { SectionHeading } from "../misc/Headings.js";
import { SectionDescription } from "../misc/Typography.js";
import { ContentWithVerticalPadding } from "../misc/Layouts.js";
import { ReactComponent as SvgDecoratorBlob1 } from "../../images/dot-pattern.svg";
var _ = require("lodash");
const Section = tw.div`h-screen`;
const Header = tw(HeaderBase)`max-w-none`;
const Row = tw.div`h-full flex flex-col lg:flex-row justify-between items-center px-16 max-w-screen-2xl mx-auto sm:px-8`;
const TextColumn = tw.div`lg:pl-16 lg:mr-auto sm:mt-8 md:mt-16 lg:mt-32 lg:mr-0 max-w-lg lg:max-w-xl xl:max-w-2xl`;
const Heading = tw(
  SectionHeading
)`text-left text-primary-900 leading-tight sm:text-2xl md:text-4xl xl:text-6xl`;
const Description = tw(
  SectionDescription
)`mt-4 lg:text-base text-gray-700 max-w-lg`;
const ImageColumn = tw.div`relative sm:w-full lg:w-auto sm:pl-16 sm:pl-0 lg:pl-32 md:mt-0 lg:mt-0 sm:ml-0 lg:ml-32`;
const ImageContainer = tw.div`relative z-40 transform lg:-translate-x-24 sm:-translate-y-16`;
const Image = tw.img`max-w-full sm:mt-8 md:mt-0 sm:w-56 lg:w-96 rounded-t-md sm:rounded-t-lg md:rounded-md relative z-20 sm:left-image md:left-0`;
const Offsetbackground = tw.div`absolute inset-0 bg-gray-300 rounded-md xl:-mb-8`;
const ImageDecoratorBlob = styled(SvgDecoratorBlob1)`
  ${tw`pointer-events-none z-10 absolute right-0 bottom-0 transform translate-x-10 
    translate-y-10 sm:h-16 sm:w-16 h-32 w-32 opacity-25 text-gray-900 fill-current`}
`;
const Nameplate = tw.div`max-w-xs rounded-md sm:visible md:invisible text-center bg-primary-900 text-gray-100 text-2xl z-20 absolute w-64 left-image`;
const CenterContainer = tw.div`z-20 relative px-6 sm:px-8 mx-auto h-full flex flex-col`;
const Content = tw.div`px-4 flex flex-1 flex-col justify-center items-center`;
const MultiColumnContainer = styled.div`
  ${tw`bg-gray-200 flex flex-col md:items-stretch md:flex-row overflow-auto max-w-screen-lg mx-auto py-6 md:py-8`}
`;
const InfoContainer = tw.div`h-screen`;
const AboutContainer = styled(ContentWithVerticalPadding)`
  ${tw`h-11/12`}
`;
const VerticalSpacer = tw.div`md:mt-10 w-full`;

const Card = styled.div`
  ${tw`flex flex-col items-center sm:items-start text-center sm:text-left h-1/2 mx-4 px-2`}

  .cardContent {
    ${tw`flex sm:flex-row md:flex-col`}
  }
  .imageContainer {
    ${tw`bg-white text-center rounded-md sm:p-3 md:p-2 transform hover:scale-110 bg-primary-900 hover:bg-primary-300 hover:shadow-lg transition-all duration-300 ease-in-out`}
    img {
      ${tw`sm:w-32 md:w-40 sm:w-32 md:h-40 md:min-w-40 object-cover`}
    }
  }

  .textContainer {
    ${tw`sm:pl-6 md:pl-0 sm:mt-3 md:mt-6 text-center tracking-tight`}
  }

  .title {
    ${tw`tracking-wider font-bold text-xl leading-none`}
  }

  .description {
    ${tw`mt-2 font-normal text-gray-400 leading-snug`}
  }
`;

class About extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      spotifyData: [],
      images: {},
    };
  }

  componentDidMount() {
    window.scrollTo({ top: 0 });
    fetch(
      "https://8qqhkj14af.execute-api.eu-central-1.amazonaws.com/dev/spotify"
    )
      .then((res) => res.json())
      .then((res) => {
        let is = {};
        _.forEach(res, function (pl) {
          is[pl.id] = {};
          is[pl.id].name = pl.name;
          is[pl.id].imageSrc = pl.images[0].url;
          is[pl.id].externalUrl = pl.external_urls.spotify;
        });
        this.setState({ images: is });
      });
  }

  render() {
    const heading = "About Raymond";
    const name = "Raymond Leow";
    /* const description =
      "On this page, I'll share about myself and what I love." +
      " There's a handful of things I quite enjoy: drawing, cooking, working out and karaoke."; */
    const description =
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";
    /* const drawing = "I love drawing, it goes down in the family.";
    const cooking = "I love cooking, based on my dad.";
    const fitness =
      "I love working out, as programming wears down on the neck."; */
    const imageSrc = require("../../images/profile_pic3.jpg");
    const imageDecoratorBlob = true;
    let images = this.state.images;
    images = Object.keys(images).map((key) => images[key]);
    return (
      <>
        <Section>
          <InfoContainer>
            <Header />
            <AboutContainer>
              <Row>
                <ImageColumn>
                  <ImageContainer>
                    <Image src={imageSrc} />
                    {imageDecoratorBlob && <ImageDecoratorBlob />}
                    <Nameplate>{name}</Nameplate>
                  </ImageContainer>
                  <Offsetbackground />
                </ImageColumn>
                <TextColumn>
                  <Heading>{heading}</Heading>
                  <VerticalSpacer />
                  <Description>{description}</Description>
                  {/* <Description>{drawing}</Description>
                  <Description>{cooking}</Description>
                  <Description>{fitness}</Description> */}
                </TextColumn>
              </Row>
            </AboutContainer>
          </InfoContainer>
          /
        </Section>
        <Section>
          <CenterContainer>
            <Content>
              <Heading>Music</Heading>
              <VerticalSpacer />
              <Description>
                There's a handful of music genres I like, but the common
                denominator is the beat. Whether it's death metal or folk, I
                prefer a predictable rhythm.
              </Description>
              <VerticalSpacer />

              <MultiColumnContainer>
                {images.map((image, i) => (
                  <Card key={i.toString()}>
                    <span className="cardContent">
                      <span className="imageContainer">
                        <a
                          href={image.externalUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <Image src={image.imageSrc} />
                        </a>
                      </span>
                      <span className="textContainer">
                        <span className="title">{image.name}</span>
                      </span>
                    </span>
                  </Card>
                ))}
              </MultiColumnContainer>
            </Content>
          </CenterContainer>
        </Section>
      </>
    );
  }
}

export default About;
