import { useContext, useEffect } from "react";
import {
  checkRedirect,
  getCurrentCmdArry,
  isArgInvalid,
} from "../../utils/funcs";
import {
  ProjectContainer,
  ProjectDesc,
  ProjectsIntro,
  ProjectTitle,
} from "../styles/Projects.styled";
import { termContext } from "../Terminal";
import Usage from "../Usage";

const Projects: React.FC = () => {
  const { arg, history, rerender } = useContext(termContext);

  /* ===== get current command ===== */
  const currentCommand = getCurrentCmdArry(history);

  /* ===== check current command is redirect ===== 
  useEffect(() => {
    if (checkRedirect(rerender, currentCommand, "projects")) {
      projects.forEach(({ id, url }) => {
        id === parseInt(arg[1]) && window.open(url, "_blank");
      });
    }
  }, [arg, rerender, currentCommand]);*/

  /* ===== check arg is valid ===== */
  const checkArg = () =>
    isArgInvalid(arg, "go", ["1", "2", "3", "4", "5", "6"]) ? (
      <Usage cmd="projects" />
    ) : null;

  return arg.length > 0 || arg.length > 2 ? (
    checkArg()
  ) : (
    <div data-testid="projects">
      <ProjectsIntro>
        “Talk is cheap. Show me the code”? I got you. <br />
        Here are some of my projects you shouldn't misss
      </ProjectsIntro>
      {projects.map(({ id, title, desc }) => (
        <ProjectContainer key={id}>
          <ProjectTitle>{`${id}. ${title}`}</ProjectTitle>
          <ProjectDesc>{desc}</ProjectDesc>
        </ProjectContainer>
      ))}
      <Usage cmd="projects" marginY />
    </div>
  );
};

const projects = [
  {
    id: 1,
    title: "Fake Celebrity Image Generation",
    desc: "Making a fake celebrity face image using the celebadataset and GAN in python",
    url: "https://debayanbiswas/blog/",
  },
  {
    id: 2,
    title: "Online Resume Buider",
    desc: "An online portal where you can provide your information and create resumes instantly",
    url: "https://onlineresumebuilder.tiiny.site/",
  },
  {
    id: 3,
    title: "Twitter Sentiment Analysis Bot",
    desc: "A sentiment-analysis bot based on tweets. Have to give a keyword to search and it will pull up all the tweets and show sentiment analysis. Won the inter-college fest hackathon with this project",
    url: "https://satnaing.github.io/haru-api/",
  },
  {
    id: 4,
    title: "Controlling Volume with Hand",
    desc: "Controlling device volume with hand gestures. Hackathon winning project",
    //url: "https://astro-paper.pages.dev/",
  },
  {
    id: 5,
    title: "Face Mask Detection",
    desc: "Made this with covid in mind to detect whether anyperson entering our house is wearing face mask or not,made using opencv in python",
    url: "https://astro-paper.pages.dev/",
  },
  {
    id: 6,
    title: "Local Indian Chatbot (Ojas) by Fine-tuning LLMswith custom Indian Languages Dataset",
    desc: "Fine-tuning a pre-made LLM with custom datasets ofIndian Languages and thus making it accessible andusable by the general public unable to use AI",
    url: "https://ojas.onrender.com/",
  },
];

export default Projects;
