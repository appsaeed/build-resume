import { Html } from "../types/dom";
import SectionHeader from "./SectionHeader";

export default function Summary(props: Html) {
  const currentYear = new Date().toLocaleDateString("en-US", {
    year: "2-digit",
  });
  const year = parseInt(currentYear) - 21;
  return (
    <section {...props}>
      <SectionHeader title="Overview" />
      <div>
        Leveraged independent learning to build a strong foundation in web
        development with {year}+ years of experience building dynamic web
        applications. Adept in Vanila JavaScript, Raw PHP, ReactJS, Laravel, and
        modern technologies. Proven track record of exceeding client
        expectations through high-quality results and clear communication.
        Passionate about leveraging skills in a challenging and collaborative
        environment
      </div>
    </section>
  );
}
