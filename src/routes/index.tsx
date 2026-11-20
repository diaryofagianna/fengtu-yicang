import { HeritageApp } from "@/gianna/heritage-app";
import { ScrollProgress } from "@/gianna/scroll-progress";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  component: function Home() {
    return (
      <>
        <ScrollProgress />
        <HeritageApp />
      </>
    );
  },
});
