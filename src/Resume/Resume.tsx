import { useEffect, useState } from "react";
import Navbar from "../layout/Navbar";
import Expreience from "./Expreience";
import Header from "./Header";
import Projects from "./Projects";
import Skills from "./Skills";
import Summary from "./Summary";

const Resume = () => {
  const [auth, setAuth] = useState(false);

  useEffect(() => {
    if (!import.meta.env.DEV) {
      const password = prompt("Your authentication");
      if (password === import.meta.env.VITE_PASSWORD) {
        setAuth(true);
      }
    } else {
      setAuth(true);
    }
  }, []);

  if (!auth)
    return (
      <div className="text-3xl text-center mt-10">
        You are unable to access this page
      </div>
    );

  return (
    <>
      <Navbar />
      <div
        id="resume"
        className="font-sans p-5 max-w-4xl mx-auto text-gray-800"
      >
        <Header />

        <Summary className="mb-3" />

        <Skills className="mb-3" />

        <Expreience className="mb-3" />

        <Projects className="mb-3" />
      </div>
    </>
  );
};

export default Resume;
