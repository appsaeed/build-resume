import expreiences from "../data/expreiences";
import { Html } from "../types/dom";
import SectionHeader from "./SectionHeader";
export default function Expreience(props: Html) {
  return (
    <section {...props}>
      <SectionHeader title="experience" />
      {expreiences.map((expreince, i) => (
        <div key={i}>
          <div key={i} className="flex justify-between">
            <div>
              <span className="font-bold uppercase">{expreince.title} | </span>
              <span className=" font-bold">{expreince.company} | </span>
              <span>
                <a
                  href={expreince.company_your_url}
                  target="_blank"
                  className="link"
                >
                  {expreince.company_your_brand}
                </a>
              </span>
            </div>
            <div>
              {expreince.start_date} - {expreince.endup_date}
            </div>
          </div>
          <div>
            <table>
              <thead className="hidden">
                <tr>
                  <th></th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                {expreince.items.map((item, i2) => (
                  <tr key={i2} className="pb-10 mb-10 align-baseline">
                    <td className=" font-extrabold pr-2">.</td>
                    <td className="p-0.5">{item}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      ))}
    </section>
  );
}
