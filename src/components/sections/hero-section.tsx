import { BlurFade } from "@/components/animations/blur-fade";
import { Avatar } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { PERSONAL } from "@/data/personal";
import { ArrowRight, Sparkles } from "lucide-react";

export function HeroSection() {
  return (
    <section className="relative min-h-[80vh] flex items-center py-20">
      <div className="max-w-2xl mx-auto px-6 w-full">
        <div className="flex flex-col md:flex-row items-center md:items-start gap-8 md:gap-12">
          {/* Avatar */}
          <BlurFade delay={0} className="shrink-0">
            <div className="relative">
              <Avatar
                src={PERSONAL.avatar}
                alt={PERSONAL.name}
                size="xl"
                className="ring-2 ring-border/50 ring-offset-4 ring-offset-background"
              />
              <div className="absolute -bottom-1 -right-1 w-8 h-8 bg-lime rounded-full flex items-center justify-center">
                <span className="text-lime-foreground text-xs">✦</span>
              </div>
            </div>
          </BlurFade>

          {/* Content */}
          <div className="flex-1 text-center md:text-left">
            <BlurFade delay={0.1}>
              <Badge variant="outline" className="mb-4">
                <Sparkles className="w-3 h-3 mr-1" />
                Available for work
              </Badge>
            </BlurFade>

            <BlurFade delay={0.15}>
              <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-2">
                <span className="gradient-text">{PERSONAL.name}</span>
              </h1>
            </BlurFade>

            <BlurFade delay={0.2}>
              <p className="text-lg text-muted-foreground mb-4">
                {PERSONAL.title}
              </p>
            </BlurFade>

            <BlurFade delay={0.25}>
              <p className="text-base text-muted-foreground/80 max-w-md mb-6 leading-relaxed">
                {PERSONAL.tagline}
              </p>
            </BlurFade>

            <BlurFade delay={0.3}>
              <div className="flex flex-wrap items-center justify-center md:justify-start gap-3">
                <Button asChild>
                  <a href={PERSONAL.cta.href}>
                    {PERSONAL.cta.label}
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </a>
                </Button>
                <Button variant="outline" asChild>
                  <a href="#projects">View Projects</a>
                </Button>
              </div>
            </BlurFade>
          </div>
        </div>
      </div>
    </section>
  );
}
