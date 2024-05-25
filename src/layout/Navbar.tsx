import { useRef, useState } from "react";
import { BsDownload, BsMoon, BsSun } from "react-icons/bs";
import { getThemeStore, setThemeStore } from "utilies";
import exportToPdf from "utilies/exporting";
import { cn } from "../app/utilies";
import BrandLogo from "./BrandLogo";

export default function Navbar() {
  const head = useRef<HTMLElement>(null);
  const printResume = () => {
    head.current?.remove();
    const content = document.documentElement.innerHTML.toString();
    exportToPdf("saeed-hossen-resume", content);
    window.location.reload();
  };
  return (
    <header
      ref={head}
      id="header"
      className={cn(
        `transition-all z-[999] top-0 left-0 right-0 w-full bg-slate-200 dark:bg-slate-800 shadow-2xl py-4`
      )}
    >
      <nav className={"w-full px-8"}>
        <div className="w-full flex flex-wrap items-center justify-between mx-auto">
          <BrandLogo
            logo={
              "https://raw.githubusercontent.com/appsaeed/assets/main/logo.png"
            }
            href="/"
          />

          <div
            className="flex items-center md:order-2 p-2 text-gray-900  hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent cursor-pointer text-2xl rounded-full"
            onClick={printResume}
          >
            <BsDownload />
          </div>

          <SwtichTheme />
        </div>
      </nav>
    </header>
  );
}

export function SwtichTheme() {
  const [dark, setDark] = useState(
    getThemeStore(encodeURIComponent(encodeURIComponent(location.hostname))) ===
      "dark"
  );

  const handleTheme = () => {
    const theme = dark ? "light" : "dark";
    setDark(!dark);
    setThemeStore(theme, encodeURIComponent(location.hostname));
    if (theme === "dark") {
      document.documentElement.classList.remove("light");
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  };

  return (
    <div
      onClick={handleTheme}
      className={`p-2 text-gray-900  hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent cursor-pointer text-2xl rounded-full`}
    >
      {dark ? <BsMoon /> : <BsSun />}
    </div>
  );
}
