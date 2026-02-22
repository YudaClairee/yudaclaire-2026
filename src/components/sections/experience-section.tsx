import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { BlurFade } from "@/components/animations/blur-fade";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar } from "@/components/ui/avatar";
import { EXPERIENCES, type Experience } from "@/data/personal";
import { Briefcase, ChevronRight, MapPin, Calendar } from "lucide-react";

function ExperienceCard({ experience, index }: { experience: Experience; index: number }) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <BlurFade delay={0.1 * index}>
      <Card className="overflow-hidden">
        <CardHeader className="pb-3">
          <div className="flex items-start gap-4">
            <Avatar
              fallback={experience.company[0]}
              size="lg"
              className="shrink-0"
            />
            <div className="flex-1 min-w-0">
              <div className="flex items-start justify-between gap-2">
                <div>
                  <h3 className="font-semibold text-foreground leading-tight">
                    {experience.title}
                  </h3>
                  <a
                    href={experience.companyUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {experience.company}
                  </a>
                </div>
                <button
                  onClick={() => setIsExpanded(!isExpanded)}
                  className="shrink-0 p-1 rounded-md hover:bg-muted transition-colors"
                  aria-label={isExpanded ? "Collapse" : "Expand"}
                >
                  <motion.div
                    animate={{ rotate: isExpanded ? 90 : 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <ChevronRight className="w-4 h-4 text-muted-foreground" />
                  </motion.div>
                </button>
              </div>

              <div className="flex flex-wrap items-center gap-3 mt-2 text-xs text-muted-foreground">
                <span className="flex items-center gap-1">
                  <Calendar className="w-3 h-3" />
                  {experience.dates}
                </span>
                <span className="flex items-center gap-1">
                  <MapPin className="w-3 h-3" />
                  {experience.location}
                </span>
              </div>

              <div className="flex flex-wrap gap-1.5 mt-3">
                {experience.technologies.map((tech) => (
                  <Badge key={tech} variant="secondary" className="text-xs">
                    {tech}
                  </Badge>
                ))}
              </div>
            </div>
          </div>
        </CardHeader>

        <AnimatePresence>
          {isExpanded && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            >
              <CardContent className="pt-0">
                <div className="pt-4 border-t border-border/50">
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {experience.description}
                  </p>
                </div>
              </CardContent>
            </motion.div>
          )}
        </AnimatePresence>
      </Card>
    </BlurFade>
  );
}

export function ExperienceSection() {
  return (
    <section id="experience" className="py-16">
      <div className="max-w-2xl mx-auto px-6">
        <BlurFade>
          <div className="flex items-center gap-2 mb-6">
            <Briefcase className="w-4 h-4 text-muted-foreground" />
            <span className="text-sm font-medium text-muted-foreground uppercase tracking-wider">
              Work Experience
            </span>
          </div>
        </BlurFade>

        <BlurFade delay={0.05}>
          <h2 className="text-2xl font-semibold mb-8 gradient-text">
            Where I&apos;ve Worked
          </h2>
        </BlurFade>

        <div className="space-y-4">
          {EXPERIENCES.map((experience, index) => (
            <ExperienceCard
              key={experience.company}
              experience={experience}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
