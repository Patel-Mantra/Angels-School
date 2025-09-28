import { Link } from "react-router-dom";

export default function Placeholder({ title }: { title: string }) {
  return (
    <section className="container py-16">
      <div className="mx-auto max-w-2xl text-center">
        <h1 className="bg-gradient-to-br from-brand-500 to-brand-300 bg-clip-text text-4xl font-extrabold text-transparent md:text-5xl">
          {title}
        </h1>
        <p className="mt-4 text-muted-foreground">
          This section is ready to be tailored. Tell Fusion what you’d like here, and we’ll bring it to life.
        </p>
        <div className="mt-8 inline-flex gap-3">
          <a href="/" className="rounded-md bg-primary px-5 py-2.5 text-primary-foreground shadow hover:opacity-90">Back home</a>
          <Link to="/contact" className="rounded-md border px-5 py-2.5 hover:bg-accent">Contact us</Link>
        </div>
      </div>
    </section>
  );
}
