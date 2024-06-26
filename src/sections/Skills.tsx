import skills from "../data/skills";
import { Html } from "../types/dom";
import SectionHeader from "./SectionHeader";

export default function Skills(props: Html) {
  return (
    <section {...props}>
      <SectionHeader title="skills" />
      <table className="mb-4">
        <tbody>
          {skills.map((item, i) => {
            return (
              <tr key={i} className="list-disc list-inside">
                <td className="list-item text-left font-semibold">
                  {item.key}:
                </td>
                <td>{item.value}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </section>
  );
}
