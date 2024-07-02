import React from "react";
import tw from "twin.macro";
import DotCursor from "components/features/DotCursor.js";
const Footer = tw.footer`text-center h-screen flex flex-col justify-end`;
const BottomText = tw.p`bottom-0  bottom-0 h-40 p-0 overflow-hidden font-sans text-[150px] font-[900] leading-[0.9em] text-black drop-shadow-md`;
const TextContainer = tw.div`h-11/12 flex flex-col flex-nowrap justify-center gap-6 overflow-hidden p-0 relative items-center`;
const TextFiller = tw.div`h-1/12`;
const Title = tw.h2`font-sans font-[700] text-[32px]`;
const Link = tw.a`text-[28px] font-display cursor-pointer`;

const liLink = "https://www.linkedin.com/in/raymond-leow/";
const ghLink = "https://github.com/RaymondLeow";
const description = "Interested? Find me here!";
const emailLink = "Email me!";
const githubLink = "Check this project!";
const linkedinLink = "Let's network!";

class FourthPage extends React.Component {
  constructor(props) {
    super(props);
    this.sendEmail = this.sendEmail.bind(this);
  }

  sendEmail() {
    window.location.href = `mailto:${this.state.email}?subject=${this.state.subject}`;
  }

  state = {
    showDotCursor: false,
    text: "",
    email: "leow.ray@gmail.com",
    subject: "Hi Raymond!",
  };

  onFooterEnter = () => {
    this.setState((prevState) => ({ ...prevState, showDotCursor: true }));
  };

  onFooterLeave = () => {
    this.setState((prevState) => ({ ...prevState, showDotCursor: false }));
  };

  onLinkChange = (text = "") => {
    this.setState((prevState) => ({ ...prevState, text }));
  };

  render() {
    const { showDotCursor } = this.state;

    return (
      <Footer
        onMouseEnter={this.onFooterEnter}
        onMouseLeave={this.onFooterLeave}
      >
        {showDotCursor && <DotCursor text={this.state.text} />}
        <TextFiller />
        <TextContainer>
          <Title>{description}</Title>
          <Link
            onMouseEnter={() => this.onLinkChange(emailLink)}
            onMouseLeave={() => this.onLinkChange("")}
            onClick={this.sendEmail}
          >
            leow.ray@gmail.com
          </Link>
          <Link
            onMouseEnter={() => this.onLinkChange(githubLink)}
            onMouseLeave={() => this.onLinkChange("")}
            href={ghLink}
            target="_blank"
          >
            Github
          </Link>
          <Link
            onMouseEnter={() => this.onLinkChange(linkedinLink)}
            onMouseLeave={() => this.onLinkChange("")}
            href={liLink}
            target="_blank"
          >
            LinkedIn
          </Link>
          <Link></Link>
        </TextContainer>
        <BottomText>RAYMOND LEOW</BottomText>
      </Footer>
    );
  }
}
export default FourthPage;
