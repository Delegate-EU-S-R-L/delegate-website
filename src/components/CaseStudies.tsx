import { ExternalLink } from "lucide-react";

const cases = [
  {
    name: "MotoreDiretto",
    desc: "Officina meccanica che aveva bisogno di farsi trovare online dai clienti della zona.",
    result: "Più richieste dirette dal sito, meno telefonate confuse.",
  },
  {
    name: "Sangiorgi Trasporti",
    desc: "Azienda di trasporti che non aveva un sito web e perdeva opportunità.",
    result: "Presenza online professionale e richieste di preventivo ordinate.",
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

      <div className="mt-14 grid md:grid-cols-2 gap-8 max-w-3xl mx-auto">
        {cases.map((c) => (
          <div
            key={c.name}
            className="bg-card border border-border rounded-2xl overflow-hidden hover:shadow-md transition-shadow"
          >
            {/* Placeholder for screenshot */}
            <div className="h-40 bg-muted flex items-center justify-center">
              <span className="text-muted-foreground text-sm">Screenshot del sito</span>
            </div>
            <div className="p-6">
              <div className="flex items-center gap-2 mb-2">
                <h3 className="font-bold text-foreground">{c.name}</h3>
                <ExternalLink className="h-4 w-4 text-muted-foreground" />
              </div>
              <p className="text-sm text-muted-foreground mb-3">{c.desc}</p>
              <div className="flex items-start gap-2 bg-emerald-50 rounded-lg p-3">
                <span className="text-emerald-600 font-medium text-sm">Risultato:</span>
                <span className="text-sm text-emerald-700">{c.result}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default CaseStudies;
