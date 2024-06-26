import { Html } from "../types/dom";
import SectionHeader from "./SectionHeader";

export default function Summary(props: Html) {
  const currentYear = new Date().toLocaleDateString("en-US", { year: 'numeric' });
  const years = parseInt(currentYear) - 2021;
  return (
    <section {...props}>
      <SectionHeader title="Overview" />
      <div>
        Highly motivated PHP Laravel developer with {years}+ years of experience building dynamic web applications. Adept at crafting secure and scalable backend solutions using Laravel's robust framework. Proven track record of exceeding client expectations with high-quality code and clear communication. Eager to contribute expertise to a challenging and collaborative environment
      </div>
    </section>
  );
}
