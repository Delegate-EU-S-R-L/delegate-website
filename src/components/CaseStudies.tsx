import { ExternalLink } from "lucide-react";
import motoredirettoImg from "@/assets/motorediretto.png";
import sangiorgiImg from "@/assets/sangiorgi.png";

const cases = [
  {
    name: "MotoreDiretto",
    image: motoredirettoImg,
    desc: "Servizio manutenzione auto a domicilio con necessità di ricevere richieste rapide dai clienti.",
    why: "Struttura semplice con WhatsApp subito visibile per ricevere richieste immediate.",
    result: "Clienti che contattano direttamente dal sito senza passare da telefonate confuse.",
    url: "https://www.motorediretto.com/",
  },
  {
    name: "Sangiorgi Trasporti",
    image: sangiorgiImg,
    desc: "Azienda di trasporti che aveva bisogno di presentarsi in modo professionale online.",
    why: "Layout professionale pensato per trasmettere affidabilità a clienti aziendali.",
    result: "Presenza online chiara e richieste di contatto più ordinate.",
    url: "https://sangiorgitrasporti.com/",
  },
];

const CaseStudies = () => (
  <section id="esempi" className="py-20 md:py-28">
    <div className="container mx-auto px-4 lg:px-8">
      <h2 className="text-3xl md:text-4xl font-bold text-center text-foreground">
        Chi ci ha già scelto
      </h2>
      <p className="mt-4 text-center text-muted-foreground max-w-xl mx-auto">
        Alcuni esempi di attività che abbiamo aiutato.
      </p>

      <div className="mt-14 grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
        {cases.map((c) => (
          <div
            key={c.name}
            className="bg-card border border-border rounded-2xl overflow-hidden"
          >
            {/* Screenshot */}
            <img
              src={c.image}
              alt={`Screenshot del sito ${c.name}`}
              className="w-full h-48 object-cover object-top"
              loading="lazy"
            />

            <div className="p-6 space-y-4">
              {/* Nome progetto */}
              <h3 className="text-lg font-bold text-foreground">{c.name}</h3>

              {/* Descrizione */}
              <p className="text-sm text-muted-foreground leading-relaxed">{c.desc}</p>

              {/* Perché è stato fatto così */}
              <div className="bg-muted/50 rounded-lg p-4">
                <span className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                  Perché è stato fatto così
                </span>
                <p className="mt-1 text-sm text-foreground">{c.why}</p>
              </div>

              {/* Risultato */}
              <div className="bg-emerald-50 dark:bg-emerald-950/30 rounded-lg p-4">
                <span className="text-xs font-semibold uppercase tracking-wider text-emerald-600 dark:text-emerald-400">
                  Risultato
                </span>
                <p className="mt-1 text-sm text-emerald-700 dark:text-emerald-300">{c.result}</p>
              </div>

              {/* CTA */}
              <a
                href={c.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:underline"
              >
                Guarda il sito
                <ExternalLink className="h-4 w-4" />
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default CaseStudies;
