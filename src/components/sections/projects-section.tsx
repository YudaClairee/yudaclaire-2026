import { BlurFade } from "@/components/animations/blur-fade";
import { Card, CardContent, CardHeader, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { PROJECTS, type Project } from "@/data/personal";
import { FolderGit2, ExternalLink, Github, Globe } from "lucide-react";
import { cn } from "@/lib/utils";

function ProjectCard({ project, index }: { project: Project; index: number }) {
  const getIcon = (type: string) => {
    switch (type) {
      case "Website":
        return <Globe className="w-3 h-3" />;
      case "Repository":
        return <Github className="w-3 h-3" />;
      default:
        return <ExternalLink className="w-3 h-3" />;
    }
  };

  return (
    <BlurFade delay={0.1 * index}>
      <Card className="h-full flex flex-col">
        <CardHeader className="pb-3">
          <div className="flex items-start justify-between gap-2 mb-2">
            <div className="flex items-center gap-2">
              {project.openSource && (
                <Badge variant="lime" className="text-xs">
                  Open Source
                </Badge>
              )}
              {project.active && (
                <Badge variant="outline" className="text-xs">
                  Active
                </Badge>
              )}
            </div>
            <span className="text-xs text-muted-foreground">{project.dates}</span>
          </div>

          <h3 className="font-semibold text-foreground text-lg leading-tight mb-2">
            {project.title}
          </h3>

          <p className="text-sm text-muted-foreground leading-relaxed line-clamp-3">
            {project.description}
          </p>
        </CardHeader>

        <CardContent className="flex-1 pt-0">
          <div className="flex flex-wrap gap-1.5">
            {project.technologies.map((tech) => (
              <Badge key={tech} variant="secondary" className="text-xs">
                {tech}
              </Badge>
            ))}
          </div>
        </CardContent>

        {project.links && project.links.length > 0 && (
          <CardFooter className="pt-0">
            <div className="flex flex-wrap gap-2">
              {project.links.map((link) => (
                <Button
                  key={link.type}
                  variant="outline"
                  size="sm"
                  asChild
                  className="text-xs"
                >
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5"
                  >
                    {getIcon(link.type)}
                    {link.type}
                  </a>
                </Button>
              ))}
            </div>
          </CardFooter>
        )}
      </Card>
    </BlurFade>
  );
}

export function ProjectsSection() {
  return (
    <section id="projects" className="py-16">
      <div className="max-w-2xl mx-auto px-6">
        <BlurFade>
          <div className="flex items-center gap-2 mb-6">
            <FolderGit2 className="w-4 h-4 text-muted-foreground" />
            <span className="text-sm font-medium text-muted-foreground uppercase tracking-wider">
              Projects
            </span>
          </div>
        </BlurFade>

        <BlurFade delay={0.05}>
          <h2 className="text-2xl font-semibold mb-3 gradient-text">
            Things I&apos;ve Built
          </h2>
        </BlurFade>

        <BlurFade delay={0.1}>
          <p className="text-muted-foreground mb-8 max-w-lg">
            A collection of projects I&apos;ve worked on, ranging from web applications to open source contributions.
          </p>
        </BlurFade>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {PROJECTS.map((project, index) => (
            <ProjectCard key={project.title} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
