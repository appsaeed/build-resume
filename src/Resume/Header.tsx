import social_media from "../data/social_media";

export default function Header() {
  const { linkedin, github, personal } = social_media;
  return (
    <header className="border-b-2 border-gray-800 pb-2 mb-2 flex justify-between items-end">
      <div>
        <h1 className="text-3xl font-bold mb-2">Saeed Hossen</h1>
        <b>Gmail: </b>
        <a href="mailto:appsaeed7@gmail.com" className="link" target="_blank">
          appsaeed7@gmail.com
        </a>
      </div>
      <div>
        <table>
          <tbody>
            <tr>
              <td className="text-right font-bold">Github:</td>
              <td className="pl-2 text-right">
                <a href={github.link} className="link" target="_blank">
                  {github.link.replace("https://", "")}
                </a>
              </td>
            </tr>

            <tr>
              <td className="text-right font-bold">Linkedin:</td>
              <td className="pl-2 text-right">
                <a href={linkedin.link} className="link" target="_blank">
                  {linkedin.link.replace("https://www.", "")}
                </a>
              </td>
            </tr>

            <tr>
              <td className="text-right font-bold">Website:</td>
              <td className="pl-2 text-right">
                <a href={personal.link} className="link" target="_blank">
                  {personal.link}
                </a>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </header>
  );
}
