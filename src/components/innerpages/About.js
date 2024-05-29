import React from "react";
import styled from "styled-components";
import tw from "twin.macro";
import HeaderBase from "../headers/light.js";
import { SectionHeading } from "../misc/Headings.js";
import { SectionDescription } from "../misc/Typography.js";
import { ContentWithVerticalPadding } from "../misc/Layouts.js";
import { ReactComponent as SvgDecoratorBlob1 } from "../../images/dot-pattern.svg";
import ReactFullpage from "@fullpage/react-fullpage";
var _ = require("lodash");
const Header = tw(HeaderBase)`max-w-none`;
const Row = tw.div`h-full flex flex-col lg:flex-row justify-between items-center px-16 max-w-screen-2xl mx-auto sm:px-8`;
const TextColumn = tw.div`lg:pl-16 lg:mr-auto sm:mt-8 md:mt-16 lg:mt-32 lg:mr-0 max-w-lg lg:max-w-xl xl:max-w-2xl`;
const Heading = tw(
  SectionHeading
)`text-left text-primary-900 leading-tight sm:text-2xl md:text-4xl xl:text-6xl`;
const CenterHeading = tw(
  SectionHeading
)`text-center text-primary-900 leading-tight sm:text-xl md:text-3xl xl:text-4xl`;
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
const PrimaryAction = tw.button`rounded-full px-8 py-3 mt-1 text-sm sm:text-base sm:mt-2 sm:px-8 sm:py-4 font-bold shadow-md transition-all duration-300 bg-primary-300 text-primary-800 hocus:bg-primary-400 hocus:text-primary-900 focus:outline-none focus:shadow-outline`;
const AnswerAction = tw.button`px-8 py-3 mt-1 text-sm sm:text-base sm:mt-2 sm:px-8 sm:py-4 font-bold shadow-md transition-all duration-300 bg-primary-300 text-primary-800 hocus:bg-primary-400 hocus:text-primary-900 focus:outline-none focus:shadow-outline`;
const MultiColumnContainer = styled.div`
  ${tw`bg-gray-200 flex flex-col md:items-stretch md:flex-row overflow-auto max-w-screen-lg mx-auto py-6 md:py-8`}
`;
const InfoContainer = tw.div`h-screen`;
const AboutContainer = styled(ContentWithVerticalPadding)`
  ${tw`h-11/12`}
`;
const VerticalSpacer = tw.div`md:mt-10 w-full`;
const SmallVerticalSpacer = tw.div`md:mt-4 w-full`;

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

const BigCard = styled.div`
  ${tw`flex flex-col items-center sm:items-start text-center mx-4 px-2`}

  .cardContent {
    ${tw`flex sm:flex-row md:flex-col`}
  }
  .imageContainer {
    ${tw`bg-white text-center rounded-md sm:p-3 md:p-2 transform hover:scale-110 bg-primary-900 hover:bg-primary-300 hover:shadow-lg transition-all duration-300 ease-in-out`}
    img {
      ${tw`object-cover w-64 h-64`}
    }
  }
  .textContainer {
    ${tw`sm:pl-6 md:pl-0 sm:mt-3 md:mt-6 text-center tracking-tight`}
  }

  .title {
    ${tw`tracking-wider font-bold text-xl leading-none`}
  }
`;

class About extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      step: 0,
      questions: [],
      curStep: 0,
      curQuestion: "",
      curAnswers: [],
      spotifyData: [],
      images: {},
    };
    this.reset = this.reset.bind(this);
    this.nextStep = this.nextStep.bind(this);
    this.getCurrentQuestion = this.getCurrentQuestion.bind(this);
    this.navigate = this.navigate.bind(this);

    this.state.a = {
      0: {
        title: "Future Funk",
        ids: [{ id: "49MiYr8EtZOKxxt3HtURcE" }],
        text: "This is a personal favourite of mine. Enjoy the combination of 80s Japanese pop music and modern groovy beats!",
      },
      1: {
        title: "Shuffle Dance",
        ids: ["4JBUdQbWYDeb3R5GmBPUIk"],
        text: "This is a list I use to prepare my sweet shuffle moves. Enjoy!",
      },
      2: {
        title: "Electro Swing",
        ids: ["3ANKOe30mr6VmPmREpiFmC"],
        text: "My list of 30s and funky beats fusion, danceable in pairs or solo",
      },
      3: {
        title: "Future Bounce",
        ids: ["0ftdEM64BdbzNBMiEFDBWp"],
        text: "The golden guilty pleasures of all my Electronic tracks",
      },
      4: {
        title: "Tech House",
        ids: ["3PJD4zuzqSZwM3DZMCi8IR"],
        text: "My brainless and soulless list. Enjoy!",
      },
      5: {
        title: "Arabian Dance",
        ids: ["1EKi8PLPl93eMHFREDx1Ze"],
        text: "An electronic take on middle-eastern culture. A diamond in the rough",
      },
      6: {
        title: "Hardstyle",
        ids: ["43FXn3esLbxYgNCMT8hBbH", "4WoLCHy3mee6fY85LRJ0x5"],
        text: "The electronic music genre that influenced my love for EDM the most. I have a nostalgic list and a modern one.",
      },
      7: {
        title: "Detroit Dance",
        ids: ["43amU0jL6QTaZnvkerqgeS"],
        text: "My take on dancing in the dark",
      },
      8: {
        title: "Dutch Dance",
        ids: ["3RwIkh9HCL33T3dWTAc2JD"],
        text: "The underground of dance music",
      },
      9: {
        title: "Hip Hop",
        ids: ["7vShFEWcbg9xbeZ060WMxr", "7qXNDitg973S9nOlpvO2Cx"],
        text: "One has classic beats and people with the flow. The other is of pure hype. Enjoy!",
      },
      10: {
        title: "Lofi Hip Hop",
        ids: [
          "7yzTIQoipBEGdD4RTzy0yF",
          "629M6l1AhnlPFgOkANLryM",
          "2ikkomRptX9aaZ1WJWGMLK",
        ],
        text: "I have three lists of different Lofi Hip Hop styles. From calm to funky, from mellow to jazzy. Enjoy!",
      },
      11: {
        title: "Indie Funk",
        ids: ["1hiXEY722is5L5g1aswt43"],
        text: "The more modern take on funk with a side of indie pop",
      },
      12: {
        title: "Turntablism",
        ids: ["1Goxp2MwBpJvU5l4relvrT"],
        text: "The rap music with a focus on the production part. Sweet scratches and gritty remixes are expected.",
      },
      // 13: {'title': "Lofi Hip Hop (Underground", 'ids': ['629M6l1AhnlPFgOkANLryM'],  'text': "My list of funky beats and jazzy melodies"},
      // 14: {'title': "Lofi Hip Hop (Metropolitan)", 'ids': ['2ikkomRptX9aaZ1WJWGMLK'], 'text': "My list lounge-friendly beats and peaceful melodies"},
      15: {
        title: "Bluegrass",
        ids: ["0FYu2BEaIk92tIOlK1Jyzc"],
        text: "American-style music with lots of strings and less country, as it should be. Country sucks. Enjoy!",
      },
      16: {
        title: "Cumbia",
        ids: ["7HMt8JyRQSptr2txDtQk07"],
        text: "Whenever I feel for that classical latino salsa, I dance to this.",
      },
      17: {
        title: "Okinawa Folk",
        ids: ["3CrDIeHTmRlwHu0KJdBEIY"],
        text: "Folk songs from the islands of Okinawa. This is an odd one, but I quite enjoy it. It's very innocent and genuine.",
      },
      18: {
        title: "Celtic Folk",
        ids: ["1IzkurScDg20kRKvrXoC61"],
        text: "Anything that is Celtic, Scottish and Gaelic. Some touches of the modern may be included.",
      },
      19: {
        title: "Nordic Folk",
        ids: ["4iNR07f09CT7B86RwhKljV"],
        text: "My list of harmonic melodies or beautiful voices, originating from the northern parts of Europe",
      },
      20: {
        title: "Slavic Folk",
        ids: ["5W8Ea63aDW1jjk40SaF4n1"],
        text: "This is a small one. However, the songs are raw, gritty and eerie. And I like it for some reason.",
      },
      21: {
        title: "Game Soundtracks",
        ids: [
          "6YGcECLvrj6nFj2De5AdnY",
          "1czcxk3LZznb0VzM7mW9EP",
          "282my2wBMnNIYotruP9FDE",
        ],
        text: "Soundtracks from a handful of games I love. I have three lists. One for menu screens, another for end game credits and a third list with pure gaming goodness. Enjoy!",
      },
      22: {
        title: "Tavern Music",
        ids: ["0paOBH7wDkQdafLkU7zoMQ"],
        text: "My ideal music whenever I enter a tavern",
      },
      23: {
        title: "Japanese Future Bass",
        ids: ["1NuU4TdIL54HWeRoapQjh8"],
        text: "List of energetic tunes popped with loads of Japanese pop culture references. Enjoy!",
      },
      24: {
        title: "Beatmania",
        ids: ["16MDA7EkiMhvSgzuKHp3q6"],
        text: "Collection of the most recognizable Japanese arcade music",
      },
      25: {
        title: "J-core",
        ids: ["1vOBXMSe4YTFCqaQSRiviN"],
        text: "Definition of energy. Can you handle it?",
      },
      26: {
        title: "Rhythm 'n' Bass",
        ids: ["5Ll8PQfdx8z68z79nE2bbf"],
        text: "My list of 'Rhythm and Bass', 'Drum and Bass', 'Dubstep' and 'Trap' all in one go",
      },
      27: {
        title: "Movie Soundtracks",
        ids: ["525n2dbDOM09cjCEbgtNtC"],
        text: "Just a generic list of soundtracks from movies close to me. Nothing special really.",
      },
      28: {
        title: "Studio Ghibli",
        ids: ["1UIIUwI2BM3newpmGYWNpB"],
        text: "List of songs from my favourite movie composer of all time. Listen and enjoy!",
      },
      29: {
        title: "Nightrunner",
        ids: ["22PFbJhTvkhT2zaPWDCoyz"],
        text: "A modern take on the 80s action movie soundtrack. Now packed with even more action and synth!",
      },
      30: {
        title: "Synthwave",
        ids: ["3tap4FjkNaX3vUs2GFJo93"],
        text: "In an alternate future where cyberism and loads of synth would conquer",
      },
      31: {
        title: "Darksynth",
        ids: ["0UmDZuFlOshvF68JTu8Vid"],
        text: "Have you ever imagined that you are the murderer of a horror movie?",
      },
      32: {
        title: "J-Rock",
        ids: ["2JF0nBtQzKsMhfooNs6var"],
        text: "Funky bass, cheerful pop, rebellic punk, it's all in here.",
      },
      33: {
        title: "J-Metal",
        ids: ["1e57EMUTqIGzUQV1UZi78A"],
        text: "A more melodic take on the metal genre",
      },
      34: {
        title: "Rock",
        ids: ["7JL17q5ofYSalu4kxnbhQC"],
        text: "Everything from kickass jams to the kids of the misunderstood, all in one list",
      },
      35: {
        title: "Heavy Metal",
        ids: ["6E2tgybsCGf9VnHllRciiS"],
        text: "A glorious list for the glorious crusader",
      },
      36: {
        title: "Industrial Metal",
        ids: ["0h3KxaBeBKIiUNihbKCRcH"],
        text: "A list only for the cool kidz of the blokk",
      },
      37: {
        title: "Death Metal",
        ids: ["4TugqnDjwyPnSlUtqWGly1"],
        text: "This collection is pretty rough and pretty tough",
      },
      38: {
        title: "Punk",
        ids: ["1jjkJVSj8aSWGHXsacRKOa"],
        text: "A list for those who don't use the turn signals",
      },
      39: {
        title: "Old-Style Korean Pop",
        ids: ["3035uPRx5sSmz0SV9w7Tvk"],
        text: "A hidden gem of mine. 70s pop music, filled with soothing Korean spirit",
      },
      40: {
        title: "Nostalgic Pop",
        ids: [
          "3Axzc0ePZsEyiZOqmw4gXr",
          "4YsTgHchy0REQhOhxuOF1N",
          "4youDgssHSyECvMVcdhTlq",
        ],
        text: "I have three lists. One is Japanese, one is Korean, and one is Western.",
      },
      41: {
        title: "Cantonese pop",
        ids: ["5hHpDkte6Ormeh2YGfnyEc", "0WksAiAPU7YcqOFwLWnDye"],
        text: "These are lists of songs that defined my childhood. It's not for everyone, but at least it's for me. It consists of nostalgic pop songs from the days I spent in Malaysia growing up.",
      },
      // 42: {'title': "C-pop (00s)", 'ids': [''],  'text': "This collection "},
      43: {
        title: "Dance Pop",
        ids: [
          "0kjAIvw3nPs0SX1CiVVOo7",
          "0eTvOWQXry7eFCUVlbw6Pu",
          "0MtZcSibOtRZlnaiAEIgb6",
        ],
        text: "Most of the pop music I listen usually consists of heavy electronic influences. I also listen to a lot of latino as it's generic, predictable and cheesy. Just how I like it!",
      },
      44: {
        title: "Raymond's Music",
        ids: ["0HijtrchkjRwCWTYvIpI5q", "7hgtdiwsjM5GT1q5QcwL2z"],
        text: "If you ever wonder what kind of music I listen to. In the first one I add anything remotely interesting while in the other one consists of compact version of my favourite tracks right now.",
      },
      45: {
        title: "Raymond's Favourites",
        ids: ["3x4r1si2c5b2Dm99Xwyh6O", "0Fd5Y7ZXNYSCKh7a86rjos"],
        text: "Lists of my top music and my top artist/band",
      },
      46: {
        title: "French Touch",
        ids: ["5A43JtccyMPWwU6GCXZQjt"],
        text: "The funkiest of all house is French. Enjoy!",
      },
      47: {
        title: "Goa Trance",
        ids: ["6Ndixd3qoS75yMcEc4iozy"],
        text: "Pure energetic dance music. Also my ideal music for running.",
      },
    };

    this.state.q = {
      0: {
        q: "Why do you listen to music?",
        a: [
          { text: "So I can dance!", value: 1 },
          { text: "To groove", value: 4 },
          { text: "Cause I'm a man of cultur", value: 6 },
          { text: "I want to be sent to another world.", value: 8 },
          { text: "I wanna be tough", value: 13 },
          { text: "I wanna be a popstar", value: 14 },
          { text: "I wanna be like Raymond", value: 15 },
        ],
      },
      1: {
        q: "Where are you?",
        a: [
          { text: "On the dancefloor", value: 2 },
          { text: "On a rave", value: 3 },
          {
            text: "In-between this dimension and an alternate universe where they play 80's Japanese party music.",
            value: this.state.a[0],
          },
        ],
      },
      2: {
        q: "How do you dance?",
        a: [
          { text: "I impress with some shuffling.", value: this.state.a[1] },
          {
            text: "I cheese it out with some jazz hands.",
            value: this.state.a[2],
          },
          { text: "I cheerfully jump around.", value: this.state.a[3] },
          { text: "I fistbump.", value: this.state.a[4] },
          { text: "I somehow bellydance.", value: this.state.a[5] },
          { text: "I bounce with my head.", value: this.state.a[46] },
        ],
      },
      3: {
        q: "How does it look like?",
        a: [
          { text: "Festival-style", value: this.state.a[6] },
          { text: "On a tropical island", value: this.state.a[47] },
          { text: "Dark with loads of flashy strobes", value: this.state.a[7] },
          { text: "Underground", value: this.state.a[8] },
        ],
      },
      4: {
        q: "What type of groove?",
        a: [
          { text: "With a side of HYPE", value: this.state.a[9] },
          { text: "Mellow", value: this.state.a[10] },
          { text: "Jazzy", value: this.state.a[10] },
          { text: "Lounge", value: this.state.a[10] },
          { text: "Soothing", value: this.state.a[11] },
          { text: "Imperfect", value: this.state.a[12] },
        ],
      },
      // 5: {
      //   'q': "Where are you from?",
      //   'a': [
      //     {'text': "From the country-side", 'value': this.state.a[10]},
      //     {'text': "From the slums", 'value': this.state.a[13]},
      //     {'text': "From the city", 'value': this.state.a[14]}
      //   ]
      // },
      6: {
        q: "What culture? (An African is in the making...)",
        a: [
          { text: "North-American", value: this.state.a[15] },
          { text: "South-American", value: this.state.a[16] },
          { text: "European", value: 7 },
          { text: "Asian", value: this.state.a[17] },
        ],
      },
      7: {
        q: "What region?",
        a: [
          { text: "West", value: this.state.a[18] },
          { text: "North", value: this.state.a[19] },
          { text: "East", value: this.state.a[20] },
        ],
      },
      8: {
        q: "What kind of world?",
        a: [
          { text: "In a game", value: 9 },
          { text: "In a movie", value: 11 },
          { text: "In a digital world", value: 12 },
        ],
      },
      9: {
        q: "What type of game?",
        a: [
          { text: "Video game", value: this.state.a[21] },
          { text: "Tabletop", value: this.state.a[22] },
          { text: "Arcade-type", value: 10 },
          { text: "VR", value: this.state.a[23] },
        ],
      },
      10: {
        q: "What's the difficulty setting?",
        a: [
          { text: "Easy", value: this.state.a[26] },
          { text: "Medium", value: this.state.a[24] },
          { text: "Hard", value: this.state.a[25] },
        ],
      },
      11: {
        q: "Heard of Joe Hisashi?",
        a: [
          { text: "No, sorry.", value: this.state.a[27] },
          { text: "Well, of course!", value: this.state.a[28] },
        ],
      },
      12: {
        q: "What kind of digital world?",
        a: [
          { text: "Action", value: this.state.a[29] },
          { text: "Science-fiction", value: this.state.a[30] },
          { text: "Horror", value: this.state.a[31] },
        ],
      },
      13: {
        q: "What's your profession?",
        a: [
          { text: "Artist", value: this.state.a[32] },
          { text: "Model", value: this.state.a[33] },
          { text: "Cashier", value: this.state.a[34] },
          { text: "Soldier", value: this.state.a[35] },
          { text: "Butcher", value: this.state.a[36] },
          { text: "Customer Service", value: this.state.a[37] },
          {
            text: "The concept of professions is only to feed capitalism... So none.",
            value: this.state.a[38],
          },
        ],
      },
      14: {
        q: "What era?",
        a: [
          { text: "70s", value: this.state.a[39] },
          { text: "80s", value: this.state.a[40] },
          { text: "90s", value: this.state.a[41] },
          { text: "00s", value: this.state.a[41] },
          { text: "10s", value: this.state.a[43] },
        ],
      },
      15: {
        q: "What do you wanna know about me?",
        a: [
          { text: "What I listen to", value: this.state.a[44] },
          { text: "Music I like", value: this.state.a[45] },
        ],
      },
    };
  }

  componentDidMount() {
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

  reset() {
    this.setState({ step: 1 });
    this.setState({ curStep: 0 });
    this.setState({ curQuestion: "" });
    this.setState({ curAnswers: [] });
  }

  nextStep() {
    this.setState({ step: this.state.step + 1 });
  }

  getCurrentQuestion() {
    let curQuestion = [...this.state.q[this.state.curStep]["q"]];
    if (this.state.questions.length === 0) {
      // TODO: Possibly to track older questions
      this.setState((state) => {
        return [...state.questions, curQuestion];
      });
      this.setState({ curQuestion: curQuestion });
      this.setState({ curAnswers: this.state.q[this.state.curStep]["a"] });
    }
  }

  navigate(newStep) {
    if (newStep.title) {
      // Found an answer!
      this.setState({ curAnswers: newStep });
      this.nextStep();
      return;
    }
    this.setState({ curStep: newStep });
    this.setState({ curQuestion: this.state.q[newStep]["q"] });
    this.setState({ curAnswers: this.state.q[newStep]["a"] });
  }

  render() {
    const heading = "About Raymond";
    const name = "Raymond Leow";
    const description =
      "On this page, I'll share about myself and what I love." +
      " There's a handful of things I quite enjoy: drawing, cooking, working out and karaoke.";
    const drawing = "I love drawing, it goes down in the family.";
    const cooking = "I love cooking, based on my dad.";
    const fitness =
      "I love working out, as programming wears down on the neck.";
    const imageSrc = require("../../images/profile_pic3.jpg");
    const imageDecoratorBlob = true;
    let images = this.state.images;
    images = Object.keys(images).map((key) => images[key]);
    return (
      <ReactFullpage
        navigation
        render={() => {
          return (
            <ReactFullpage.Wrapper>
              <div className="section">
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
                        <Description>{drawing}</Description>
                        <Description>{cooking}</Description>
                        <Description>{fitness}</Description>
                      </TextColumn>
                    </Row>
                  </AboutContainer>
                </InfoContainer>
              </div>
              <div className="section">
                <CenterContainer>
                  <Content>
                    {this.state.step === 0 && (
                      <>
                        <Heading>Music</Heading>
                        <VerticalSpacer />
                        <Description>
                          There's a handful of music genres I like, but the
                          common denominator is the beat. Whether it's death
                          metal or folk, I prefer a predictable rhythm.
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
                        <VerticalSpacer />
                        <Description>
                          Can't find a list for your taste buds?
                        </Description>
                        <SmallVerticalSpacer />
                        <PrimaryAction onClick={this.nextStep}>
                          Try my Music Questionnaire Adventure!
                        </PrimaryAction>
                      </>
                    )}
                    {this.state.step === 1 && (
                      <>
                        <CenterHeading>
                          Raymond's Music Questionnaire Adventure
                        </CenterHeading>
                        <Description>
                          So you want to know more about my music.{" "}
                        </Description>
                        <PrimaryAction
                          onClick={() => {
                            this.nextStep();
                            this.getCurrentQuestion();
                          }}
                        >
                          Let's go!
                        </PrimaryAction>
                      </>
                    )}
                    {this.state.step === 2 && (
                      <>
                        <CenterHeading>{this.state.curQuestion}</CenterHeading>
                        {this.state.curAnswers.map((answer, i) => (
                          <AnswerAction
                            key={i.toString()}
                            onClick={() => this.navigate(answer.value)}
                          >
                            {this.state.curAnswers[i].text}
                          </AnswerAction>
                        ))}
                      </>
                    )}
                    {this.state.step === 3 && (
                      <>
                        <MultiColumnContainer>
                          {this.state.curAnswers.ids.map((id, i) => (
                            <BigCard>
                              <span className="cardContent">
                                <span className="imageContainer">
                                  <a
                                    href={this.state.images[id].externalUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                  >
                                    <Image
                                      key={id.toString()}
                                      src={this.state.images[id].imageSrc}
                                    />
                                  </a>
                                </span>
                                <span
                                  className="textContainer"
                                  style={{ "max-width": "256px" }}
                                >
                                  <span className="title">
                                    {this.state.images[id].name}
                                  </span>
                                </span>
                              </span>
                            </BigCard>
                          ))}
                        </MultiColumnContainer>
                        <VerticalSpacer />
                        <CenterHeading>
                          {this.state.curAnswers.title}
                        </CenterHeading>
                        <Description>{this.state.curAnswers.text}</Description>
                        <VerticalSpacer />
                        <PrimaryAction onClick={this.reset}>
                          Redo Questionnaire!
                        </PrimaryAction>
                      </>
                    )}
                  </Content>
                </CenterContainer>
              </div>
            </ReactFullpage.Wrapper>
          );
        }}
      />
    );
  }
}

export default About;
