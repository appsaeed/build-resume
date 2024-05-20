export default function Header() {
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
                <a
                  href="https://github.com/appsaeed"
                  className="link"
                  target="_blank"
                >
                  https://github.com/appsaeed
                </a>
              </td>
            </tr>

            <tr>
              <td className="text-right font-bold">Linkedin:</td>
              <td className="pl-2 text-right">
                <a
                  href="https://linkedin.com/in/appsaeed"
                  className="link"
                  target="_blank"
                >
                  linkedin.com/in/appsaeed
                </a>
              </td>
            </tr>

            <tr>
              <td className="text-right font-bold">Website:</td>
              <td className="pl-2 text-right">
                <a
                  href="https://appsaeed.github.io"
                  className="link"
                  target="_blank"
                >
                  https://appsaeed.github.io
                </a>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </header>
  );
}
