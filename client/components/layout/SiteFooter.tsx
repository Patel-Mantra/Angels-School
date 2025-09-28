import { Link } from "react-router-dom";

export function SiteFooter() {
  return (
    <footer className="border-t bg-background">
      <div className="container grid gap-10 py-12 md:grid-cols-3">
        <div>
          <div className="flex items-center gap-2">
            <span className="inline-block h-8 w-8 rounded-lg bg-gradient-to-br from-brand-500 to-brand-300" aria-hidden />
            <span className="font-extrabold tracking-tight text-lg">Angels School</span>
          </div>
          <p className="mt-3 text-sm text-muted-foreground max-w-sm">
            Inspiring curious minds through immersive learning and inclusive community.
          </p>
        </div>
        <nav aria-label="Footer navigation" className="grid grid-cols-2 gap-6 md:grid-cols-3">
          <div>
            <h3 className="text-sm font-semibold">Explore</h3>
            <ul className="mt-3 grid gap-2 text-sm text-muted-foreground">
              <li><Link to="/academics" className="hover:text-foreground">Academics</Link></li>
              <li><Link to="/admissions" className="hover:text-foreground">Admissions</Link></li>
              <li><Link to="/student-life" className="hover:text-foreground">Student Life</Link></li>
              <li><Link to="/athletics" className="hover:text-foreground">Athletics</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold">Community</h3>
            <ul className="mt-3 grid gap-2 text-sm text-muted-foreground">
              <li><Link to="/news" className="hover:text-foreground">News & Events</Link></li>
              <li><Link to="/alumni" className="hover:text-foreground">Alumni</Link></li>
              <li><Link to="/portals" className="hover:text-foreground">Parent & Student Portals</Link></li>
              <li><Link to="/arts" className="hover:text-foreground">Arts</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold">About</h3>
            <ul className="mt-3 grid gap-2 text-sm text-muted-foreground">
              <li><Link to="/about" className="hover:text-foreground">About Us</Link></li>
              <li><Link to="/technology" className="hover:text-foreground">Technology</Link></li>
              <li><Link to="/safety" className="hover:text-foreground">Safety & Policies</Link></li>
              <li><Link to="/contact" className="hover:text-foreground">Contact</Link></li>
            </ul>
          </div>
        </nav>
        <div className="md:col-span-3 flex items-center justify-between border-t pt-6 text-xs text-muted-foreground">
          <p>© {new Date().getFullYear()} Angels School</p>
          <p>
            <a className="hover:text-foreground" href="/privacy">Privacy</a>
            <span className="px-2">•</span>
            <a className="hover:text-foreground" href="/accessibility">Accessibility</a>
          </p>
        </div>
      </div>
    </footer>
  );
}
