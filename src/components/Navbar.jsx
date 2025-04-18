// src/components/Navbar.jsx
import { useEffect, useState } from "react";
import { Menu, X, Sun, Moon } from "lucide-react";

export default function Navbar() {
  const [activeSection, setActiveSection] = useState("home");
  const [menuOpen, setMenuOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  const navItems = [
    { id: "home", label: "Home" },
    { id: "problem", label: "Problem" },
    { id: "solution", label: "Solution" },
    { id: "traction", label: "Traction" },
    { id: "cta", label: "Get Started" },
  ];

  useEffect(() => {
    // Active section observer
    const sections = document.querySelectorAll("section[id]");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.6 }
    );

    sections.forEach((section) => observer.observe(section));
    return () => sections.forEach((section) => observer.unobserve(section));
  }, []);

  // Dark mode toggle
  useEffect(() => {
    const root = document.documentElement;
    if (darkMode) {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }
  }, [darkMode]);

  const toggleMenu = () => setMenuOpen((prev) => !prev);
  const closeMenu = () => setMenuOpen(false);
  const toggleDark = () => setDarkMode((prev) => !prev);

  return (
    <nav className="fixed top-0 left-0 right-0 bg-white dark:bg-gray-900 shadow-md z-50 px-6 py-4 flex justify-between items-center">
      <div className="text-2xl font-bold text-indigo-600 dark:text-white">MemoTag</div>

      {/* Desktop Menu */}
      <ul className="hidden md:flex gap-6 text-sm sm:text-base text-slate-800 dark:text-white">
        {navItems.map((item) => (
          <li key={item.id}>
            <a
              href={`#${item.id}`}
              className={`transition ${
                activeSection === item.id
                  ? "text-indigo-600 font-semibold dark:text-indigo-400"
                  : "hover:text-indigo-600 dark:hover:text-indigo-400"
              }`}
            >
              {item.label}
            </a>
          </li>
        ))}
        <li>
          <button
            onClick={toggleDark}
            className="ml-4 px-2 py-1 rounded transition border border-indigo-500 dark:border-white text-indigo-500 dark:text-white hover:bg-indigo-500 dark:hover:bg-white hover:text-white dark:hover:text-gray-900"
            title="Toggle Dark Mode"
          >
            {darkMode ? <Sun size={18} /> : <Moon size={18} />}
          </button>
        </li>
      </ul>

      {/* Mobile Menu Button */}
      <button onClick={toggleMenu} className="md:hidden text-slate-800 dark:text-white">
        {menuOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Mobile Dropdown */}
      {menuOpen && (
        <ul className="absolute top-16 left-0 right-0 bg-white dark:bg-gray-900 shadow-md px-6 py-4 flex flex-col gap-4 md:hidden z-40 text-slate-800 dark:text-white">
          {navItems.map((item) => (
            <li key={item.id}>
              <a
                href={`#${item.id}`}
                onClick={closeMenu}
                className={`block transition ${
                  activeSection === item.id
                    ? "text-indigo-600 font-semibold dark:text-indigo-400"
                    : "hover:text-indigo-600 dark:hover:text-indigo-400"
                }`}
              >
                {item.label}
              </a>
            </li>
          ))}
          <li>
            <button
              onClick={() => {
                toggleDark();
                closeMenu();
              }}
              className="flex items-center gap-2 border border-indigo-500 dark:border-white px-3 py-2 rounded text-indigo-500 dark:text-white hover:bg-indigo-500 dark:hover:bg-white hover:text-white dark:hover:text-gray-900"
            >
              {darkMode ? <Sun size={18} /> : <Moon size={18} />}
              {darkMode ? "Light Mode" : "Dark Mode"}
            </button>
          </li>
        </ul>
      )}
    </nav>
  );
}
