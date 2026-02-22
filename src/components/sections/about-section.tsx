import { BlurFade } from "@/components/animations/blur-fade";
import { PERSONAL } from "@/data/personal";
import { User } from "lucide-react";

export function AboutSection() {
  return (
    <section id="about" className="py-16">
      <div className="max-w-2xl mx-auto px-6">
        <BlurFade>
          <div className="flex items-center gap-2 mb-6">
            <User className="w-4 h-4 text-muted-foreground" />
            <span className="text-sm font-medium text-muted-foreground uppercase tracking-wider">
              About
            </span>
          </div>
        </BlurFade>

        <BlurFade delay={0.1}>
          <h2 className="text-2xl font-semibold mb-4 gradient-text">
            Hello, I&apos;m {PERSONAL.nickname}
          </h2>
        </BlurFade>

        <BlurFade delay={0.15}>
          <div className="prose text-muted-foreground">
            <p className="leading-relaxed">{PERSONAL.about}</p>
          </div>
        </BlurFade>

        <BlurFade delay={0.2}>
          <div className="mt-8 pt-8 border-t border-border/50">
            <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
              <div>
                <p className="text-3xl font-bold text-foreground">5+</p>
                <p className="text-sm text-muted-foreground">Years Experience</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-foreground">50+</p>
                <p className="text-sm text-muted-foreground">Projects Completed</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-foreground">20+</p>
                <p className="text-sm text-muted-foreground">Happy Clients</p>
              </div>
            </div>
          </div>
        </BlurFade>
      </div>
    </section>
  );
}
