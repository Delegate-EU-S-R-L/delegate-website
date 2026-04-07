import { Button } from "@/components/ui/button";
import { Monitor, Smartphone } from "lucide-react";

const Hero = () => (
  <section className="pt-28 pb-20 md:pt-36 md:pb-28 bg-secondary/30">
    <div className="container mx-auto px-4 lg:px-8">
      <div className="max-w-3xl mx-auto text-center">
        <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-foreground animate-fade-in">
          Dai valore a ciò che fai.
        </h1>
        <p className="mt-6 text-lg md:text-xl text-muted-foreground leading-relaxed animate-fade-in-delay-1">
          Realizziamo siti web semplici e professionali per farti trovare online
          e permettere ai clienti di contattarti facilmente.
        </p>
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in-delay-2">
          <Button asChild size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90 rounded-full px-8 text-base">
            <a href="#contatto">Richiedi una consulenza</a>
          </Button>
          <Button asChild size="lg" variant="outline" className="rounded-full px-8 text-base">
            <a href="#esempi">Guarda un esempio</a>
          </Button>
        </div>
      </div>

      {/* Minimal device mockup */}
      <div className="mt-16 flex items-end justify-center gap-6 animate-fade-in-delay-2">
        <div className="hidden sm:block w-64 h-44 rounded-lg border-2 border-border bg-card shadow-lg flex items-center justify-center">
          <div className="p-4 space-y-2">
            <div className="flex items-center gap-2">
              <Monitor className="h-4 w-4 text-primary" />
              <div className="h-2 w-20 rounded bg-primary/20" />
            </div>
            <div className="h-2 w-full rounded bg-muted" />
            <div className="h-2 w-3/4 rounded bg-muted" />
            <div className="h-2 w-1/2 rounded bg-muted" />
            <div className="mt-3 h-6 w-24 rounded-full bg-accent/80" />
          </div>
        </div>
        <div className="w-32 h-56 rounded-2xl border-2 border-border bg-card shadow-lg">
          <div className="p-3 space-y-2">
            <div className="flex items-center gap-1">
              <Smartphone className="h-3 w-3 text-primary" />
              <div className="h-1.5 w-12 rounded bg-primary/20" />
            </div>
            <div className="h-1.5 w-full rounded bg-muted" />
            <div className="h-1.5 w-3/4 rounded bg-muted" />
            <div className="h-1.5 w-1/2 rounded bg-muted" />
            <div className="mt-2 h-5 w-16 rounded-full bg-accent/80" />
            <div className="mt-4 space-y-1.5">
              <div className="h-1.5 w-full rounded bg-muted" />
              <div className="h-1.5 w-2/3 rounded bg-muted" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default Hero;
