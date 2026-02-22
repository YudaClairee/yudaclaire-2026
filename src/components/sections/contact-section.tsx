import { BlurFade } from "@/components/animations/blur-fade";
import { Button } from "@/components/ui/button";
import { PERSONAL } from "@/data/personal";
import { Mail, Github, Linkedin, Twitter, ArrowUpRight, Heart } from "lucide-react";

const socialLinks = [
  { icon: Github, label: "GitHub", href: PERSONAL.socials.github },
  { icon: Linkedin, label: "LinkedIn", href: PERSONAL.socials.linkedin },
  { icon: Twitter, label: "Twitter", href: PERSONAL.socials.twitter },
  { icon: Mail, label: "Email", href: PERSONAL.socials.email },
];

export function ContactSection() {
  return (
    <section id="contact" className="py-20">
      <div className="max-w-2xl mx-auto px-6">
        <BlurFade>
          <div className="glass-card rounded-2xl p-8 md:p-12 text-center">
            <div className="w-12 h-12 rounded-full bg-muted flex items-center justify-center mx-auto mb-6">
              <Mail className="w-5 h-5 text-foreground" />
            </div>

            <h2 className="text-3xl font-bold mb-4 gradient-text">
              Let&apos;s Work Together
            </h2>

            <p className="text-muted-foreground mb-8 max-w-md mx-auto">
              I&apos;m always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
            </p>

            <Button size="lg" asChild className="mb-8">
              <a href={PERSONAL.cta.href}>
                {PERSONAL.cta.label}
                <ArrowUpRight className="w-4 h-4 ml-2" />
              </a>
            </Button>

            <div className="flex items-center justify-center gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-muted/50 flex items-center justify-center
                           hover:bg-muted hover:scale-110 transition-all duration-200"
                  aria-label={social.label}
                >
                  <social.icon className="w-4 h-4 text-foreground" />
                </a>
              ))}
            </div>
          </div>
        </BlurFade>

        <BlurFade delay={0.2}>
          <footer className="mt-16 pt-8 border-t border-border/50 text-center">
            <p className="text-sm text-muted-foreground flex items-center justify-center gap-1">
              Made with <Heart className="w-3 h-3 text-lime fill-lime" /> by{" "}
              {PERSONAL.name} © {new Date().getFullYear()}
            </p>
          </footer>
        </BlurFade>
      </div>
    </section>
  );
}
