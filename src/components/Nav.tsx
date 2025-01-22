import { useEffect } from "react";
import { BurgerIcon, FacebookIcon, MediumIcon, TwitterIcon } from "./icons";
import { useAppStore } from "../store";

function Nav() {
  const { theme, setTheme } = useAppStore();

  useEffect(() => {
    if (typeof window !== "undefined") {
      const localTheme = localStorage.getItem("theme");
      if (localTheme) {
        setTheme(localTheme);
      } else {
        if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
          setTheme("dark");
        }
      }
    }
  }, [setTheme]);

  useEffect(() => {
    if (typeof window !== "undefined") {
      (document.querySelector("html") as HTMLElement).classList.remove(
        theme === "dark" ? "light" : "dark"
      );
      (document.querySelector("html") as HTMLElement).classList.add(theme);
    }
  }, [theme]);

  return (
    <header>
      <nav className="max-w-5xl mx-auto flex justify-between items-center py-6 px-4">
        {/* Social media links */}
        <div className="flex gap-2 items-center">
          <a href="#" rel="noreferrer">
            <TwitterIcon color={theme === "light" ? "#4F4F4F" : "#27AE60"} />
          </a>
          <a href="#">
            <FacebookIcon color={theme === "light" ? "#4F4F4F" : "#27AE60"} />
          </a>
          <a href="#">
            <MediumIcon color={theme === "light" ? "#4F4F4F" : "#27AE60"} />
          </a>
        </div>

        {/* Logo */}
        <div className="logo flex items-center gap-2">
          <img src="/favicon.svg" alt="logo" />
          <p className="dark:text-white text-black">Finance</p>
        </div>

        {/* Burger menu */}
        <button
          onClick={() => {
            localStorage.setItem("theme", theme === "light" ? "dark" : "light");
            setTheme(theme === "light" ? "dark" : "light");
          }}
        >
          <BurgerIcon />
        </button>
      </nav>
    </header>
  );
}

export default Nav;
