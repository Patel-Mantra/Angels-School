import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Layout } from "@/components/layout/Layout";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname,
    );
  }, [location.pathname]);

  return (
    <Layout>
      <section className="container py-24 text-center">
        <h1 className="text-6xl font-black tracking-tight">404</h1>
        <p className="mt-2 text-lg text-muted-foreground">Oops! Page not found</p>
        <a href="/" className="mt-6 inline-block rounded-md bg-primary px-5 py-2.5 text-primary-foreground shadow hover:opacity-90">
          Return to Home
        </a>
      </section>
    </Layout>
  );
};

export default NotFound;
