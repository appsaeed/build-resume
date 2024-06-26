import projects from "../data/projects";
import { Html } from "../types/dom";
import SectionHeader from "./SectionHeader";

export default function Projects(props: Html) {
  const resume_projects = projects.filter((item) => item.show_in_resume);
  return (
    <section {...props}>
      <SectionHeader title="projects" />
      {resume_projects.map((project, i) => (
        <div key={i}>
          <div className="flex justify-between">
            <span>
              <span className="font-bold">{project.title}</span>
              {project.github_link && (
                <span>
                  <span className="px-1">|</span>
                  <a
                    href={project.github_link}
                    className="link"
                    target="_blank"
                  >
                    Github
                  </a>
                </span>
              )}

              {project.link && (
                <span>
                  <span className="px-1">|</span>
                  <a href={project.link} className="link" target="_blank">
                    Live
                  </a>
                </span>
              )}
            </span>
            <span>{project.project_dates}</span>
          </div>

          <table>
            <thead className="hidden">
              <tr>
                <th></th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {project.description
                .split("||")
                .filter(Boolean)
                .filter((value: string) => value.trim() != "")
                .map((text, i2) => (
                  <tr key={i2} className="pb-10 mb-10">
                    <td className=" font-extrabold pr-2 align-baseline">.</td>
                    <td className="p-0.5">{text}</td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
      ))}
    </section>
  );
}
