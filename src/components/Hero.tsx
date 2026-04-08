import { useState } from "react";
import { Button } from "@/components/ui/button";
import { MessageCircle } from "lucide-react";

const Hero = () => {
  const [name, setName] = useState("");
  const [activity, setActivity] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const parts = [
      `Ciao, sono ${name || "[Nome]"}.`,
      activity ? `La mia attività: ${activity}.` : "",
      message || "",
      "Ho visto il vostro sito e vorrei informazioni per creare un sito web.",
    ]
      .filter(Boolean)
      .join(" ");
    const url = `https://wa.me/393513317239?text=${encodeURIComponent(parts)}`;
    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
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
        </div>

        <div className="mt-12 max-w-md mx-auto animate-fade-in-delay-2">
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="hero-name" className="block text-sm font-medium text-foreground mb-1">
                Nome *
              </label>
              <input
                id="hero-name"
                type="text"
                required
                maxLength={100}
                className="flex h-11 w-full rounded-lg border border-input bg-background px-4 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                placeholder="Il tuo nome"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>

            <div>
              <label htmlFor="hero-activity" className="block text-sm font-medium text-foreground mb-1">
                Attività / Azienda
              </label>
              <input
                id="hero-activity"
                type="text"
                maxLength={150}
                className="flex h-11 w-full rounded-lg border border-input bg-background px-4 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                placeholder="Es. elettricista, ristorante, negozio..."
                value={activity}
                onChange={(e) => setActivity(e.target.value)}
              />
            </div>

            <div>
              <label htmlFor="hero-message" className="block text-sm font-medium text-foreground mb-1">
                Messaggio
              </label>
              <textarea
                id="hero-message"
                maxLength={500}
                rows={3}
                className="flex w-full rounded-lg border border-input bg-background px-4 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring resize-none"
                placeholder="Descrivi brevemente cosa ti serve"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              />
            </div>

            <Button
              type="submit"
              size="lg"
              className="w-full bg-[hsl(142,70%,45%)] text-white hover:bg-[hsl(142,70%,40%)] rounded-full text-base"
            >
              <MessageCircle className="h-5 w-5 mr-2" />
              Parla con Noi
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Hero;
