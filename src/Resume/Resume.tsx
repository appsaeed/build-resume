import { useEffect, useState } from "react";
import { decryptSync, encryptSync } from "utilies";
import Navbar from "../layout/Navbar";
import Expreience from "./Expreience";
import Header from "./Header";
import Projects from "./Projects";
import Skills from "./Skills";
import Summary from "./Summary";

const Resume = () => {
  const [auth, setAuth] = useState(false);

  useEffect(() => {
    const pwd = import.meta.env.VITE_PASSWORD;
    if (decryptSync(sessionStorage.getItem("39032kfowej") || "") !== pwd) {
      const password = prompt("Your authentication");
      if (password === pwd) {
        sessionStorage.setItem("39032kfowej", encryptSync(pwd));
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
