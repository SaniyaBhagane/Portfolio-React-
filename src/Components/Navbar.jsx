import { useEffect, useState } from "react";
import { cn } from "../lib/utils";
import { X, Menu, Github, Linkedin } from "lucide-react";
import { ThemeToggle } from "./ThemeToggle";

const navItems = [
  { name: "Home", href: "#hero" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Contacts", href: "#contacts" },
];

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpened, setIsMenuOpened] = useState(false);

  /* Scroll effect */
  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* Navbar */}
      <nav
        className={cn(
          "fixed w-full z-50 transition-all duration-300",
          isScrolled
            ? "py-3 bg-background/80 backdrop-blur-md shadow-sm"
            : "py-5"
        )}
      >
        <div className="container flex items-center justify-between">
          {/* Logo */}
          <a
            href="#hero"
            className="font-semibold text-xl text-primary flex items-center"
          >
            <span className="text-glow text-foreground">
              Saniya&apos;s Portfolio
            </span>
          </a>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-foreground/80 hover:text-primary transition font-medium"
              >
                {item.name}
              </a>
            ))}

            {/* Social Icons */}
            {/* <a
              href="https://github.com/SaniyaBhagane"
              target="_blank"
              rel="noopener noreferrer"
              className="text-foreground/70 hover:text-primary transition"
            >
              <Github size={20} />
            </a>

            <a
              href="https://linkedin.com/in/saniya-bhagne-27140b257/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-foreground/70 hover:text-primary transition"
            >
              <Linkedin size={20} />
            </a> */}

            {/* Theme Toggle (Desktop) */}
            <ThemeToggle />
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-foreground z-50"
            aria-label={isMenuOpened ? "Close Menu" : "Open Menu"}
            onClick={() => setIsMenuOpened((prev) => !prev)}
          >
            {isMenuOpened ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div
        className={cn(
          "fixed inset-0 bg-background/95 backdrop-blur-md z-40 flex flex-col items-center justify-center",
          "transition-all duration-300 md:hidden",
          isMenuOpened
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        )}
      >
        <div className="flex flex-col space-y-8 text-xl items-center">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="text-foreground/80 hover:text-primary transition"
              onClick={() => setIsMenuOpened(false)}
            >
              {item.name}
            </a>
          ))}

          {/* Mobile Social Icons */}
          {/* <div className="flex gap-6 pt-4">
            <a
              href="https://github.com/SaniyaBhagane"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Github size={24} />
            </a>

            <a
              href="https://linkedin.com/in/saniya-bhagne-27140b257/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Linkedin size={24} />
            </a>
          </div> */}

          {/* Theme Toggle (Mobile) */}
          <ThemeToggle />
        </div>
      </div>
    </>
  );
};
