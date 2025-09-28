import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { cn } from "@/lib/utils";
import { Menu, Sun, Moon } from "lucide-react";

const navItems: { label: string; to: string }[] = [
  { label: "Home", to: "/" },
  { label: "About", to: "/about" },
  { label: "Academics", to: "/academics" },
  { label: "Admissions", to: "/admissions" },
  { label: "Student Life", to: "/student-life" },
  { label: "News & Events", to: "/news" },
  { label: "Portals", to: "/portals" },
  { label: "Contact", to: "/contact" },
];

export function SiteHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/80 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <a href="#main" className="sr-only focus:not-sr-only focus:absolute focus:inset-x-0 focus:top-2 focus:z-[60] mx-auto w-max rounded-md bg-primary px-3 py-2 text-primary-foreground shadow focus:outline-none focus:ring-2 focus:ring-ring">
        Skip to content
      </a>
      <div className="container flex h-16 items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <Link to="/" className="flex items-center gap-2">
            <span className="inline-block h-8 w-8 rounded-lg bg-gradient-to-br from-brand-500 to-brand-300 shadow-inner" aria-hidden />
            <span className="font-extrabold tracking-tight text-lg">Angels School</span>
          </Link>
        </div>

        <nav aria-label="Primary" className="hidden md:block">
          <ul className="flex items-center gap-6">
            {navItems.map((item) => (
              <li key={item.to}>
                <NavLink
                  to={item.to}
                  className={({ isActive }) =>
                    cn(
                      "text-sm font-medium transition-colors hover:text-foreground/80",
                      isActive ? "text-foreground" : "text-foreground/70",
                    )
                  }
                >
                  {item.label}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center gap-2">
          <ThemeToggle />
          <button
            className="inline-flex h-9 w-9 items-center justify-center rounded-md border md:hidden"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            <Menu className="h-5 w-5" aria-hidden />
            <span className="sr-only">Menu</span>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={cn(
          "md:hidden border-t bg-background transition-[max-height] duration-300 overflow-hidden",
          open ? "max-h-96" : "max-h-0",
        )}
      >
        <nav className="container py-4" aria-label="Mobile">
          <ul className="grid gap-3">
            {navItems.map((item) => (
              <li key={item.to}>
                <Link
                  to={item.to}
                  className="block rounded-md px-2 py-2 text-sm hover:bg-accent"
                  onClick={() => setOpen(false)}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}

function ThemeToggle() {
  const [dark, setDark] = useState(() =>
    typeof document !== "undefined" ? document.documentElement.classList.contains("dark") : false,
  );

  const toggle = () => {
    const root = document.documentElement;
    const isDark = root.classList.toggle("dark");
    setDark(isDark);
    try {
      localStorage.setItem("theme", isDark ? "dark" : "light");
    } catch {}
  };

  return (
    <button
      onClick={toggle}
      className="inline-flex h-9 items-center gap-2 rounded-md border px-3 text-sm shadow-sm hover:bg-accent"
      aria-pressed={dark}
      aria-label="Toggle dark mode"
    >
      <Sun className="hidden h-4 w-4 dark:inline" aria-hidden />
      <Moon className="inline h-4 w-4 dark:hidden" aria-hidden />
      <span className="sr-only">Toggle theme</span>
    </button>
  );
}
