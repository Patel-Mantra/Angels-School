import { PropsWithChildren } from "react";
import { SiteHeader } from "./SiteHeader";
import { SiteFooter } from "./SiteFooter";
import { AIChat } from "../misc/AIChat";

export function Layout({ children }: PropsWithChildren) {
  return (
    <div className="min-h-dvh flex flex-col bg-background text-foreground">
      <SiteHeader />
      <main id="main" className="flex-1">
        {children}
      </main>
      <SiteFooter />
      <AIChat />
    </div>
  );
}
