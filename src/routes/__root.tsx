import { HeadContent, Scripts, createRootRoute } from '@tanstack/react-router'

import { AppDock } from "@/components/app-dock";
import { Meteors } from "@/components/ui/meteors";

import appCss from "@/styles.css?url";
import { RainBackground } from '@/components/ui/rain';

export const Route = createRootRoute({
  head: () => ({
    meta: [
      {
        charSet: "utf-8",
      },
      {
        name: "viewport",
        content: "width=device-width, initial-scale=1",
      },
      {
        title: "Yuda Clairee - Full Stack Developer",
      },
      {
        name: "description",
        content: "Full Stack Developer specializing in React, TypeScript, and modern web technologies. Building digital experiences with passion.",
      },
      {
        name: "theme-color",
        content: "#000000",
      },
    ],
    links: [
      {
        rel: "stylesheet",
        href: appCss,
      },
      {
        rel: "icon",
        type: "image/svg+xml",
        href: "/favicon.svg",
      },
    ],
  }),
  shellComponent: RootDocument,
});

function RootDocument({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body>
        {/* Meteors Background */}
        <RainBackground intensity={0.5} />

        {/* Main Content */}
        <main className="relative z-10 min-h-screen pb-24">
          {children}
        </main>

        {/* Floating Dock Navigation */}
        <AppDock />

        <Scripts />
      </body>
    </html>
  );
}
