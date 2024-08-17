import { EduIntro, EduList } from "../styles/Education.styled";
import { Wrapper } from "../styles/Output.styled";

const Education: React.FC = () => {
  return (
    <Wrapper data-testid="education">
      <EduIntro>Here is my education background!</EduIntro>
      {eduBg.map(({ title, desc }) => (
        <EduList key={title}>
          <div className="title">{title}</div>
          <div className="desc">{desc}</div>
        </EduList>
      ))}
    </Wrapper>
  );
};

const eduBg = [
  {
    title: "BE in Electronics and Instrumentation",
    desc: "Bangalore Institute of Technology | 2023 - Present",
  },
  {
    title: "Senior Secondary (XII), Science with CS",
    desc: "Delhi Public School, Ruby Park | 2021 - 2023",
  },
  {
    title: "Secondary (X), Science",
    desc: "Welland Gouldsmith School | 2009 - 2021",
  },
];

export default Education;
