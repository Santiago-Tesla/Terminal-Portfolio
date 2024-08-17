import {
  AboutWrapper,
  HighlightAlt,
  HighlightSpan,
} from "../styles/About.styled";

const About: React.FC = () => {
  return (
    <AboutWrapper data-testid="about">
      <p>
        Hi, my name is <HighlightSpan>Debayan Biswas</HighlightSpan>!
      </p>
      <p>
        I'm <HighlightAlt>an AI-ML Enthusiast and Python Developer</HighlightAlt> based in Bengaluru,
        Karnataka.
      </p>
      <p>
        I'm passionate about writing codes and developing applications and <br />
        algorithms to solve real-world challenges.
      </p>
    </AboutWrapper>
  );
};

export default About;
