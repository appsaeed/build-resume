import Expreience from "./Expreience";
import Header from "./Header";
import Projects from "./Projects";
import Skills from "./Skills";
import Summary from "./Summary";

const Resume = () => {
  return (
    <div className="font-sans p-5 max-w-4xl mx-auto text-gray-800">
      <Header />

      <Summary className="mb-3" />

      <Skills className="mb-3" />

      <Expreience className="mb-3" />

      <Projects className="mb-3" />
    </div>
  );
};

export default Resume;
