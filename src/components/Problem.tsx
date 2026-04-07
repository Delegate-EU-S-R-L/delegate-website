import { Globe, Clock, MessageSquare, UserX } from "lucide-react";

const problems = [
  { icon: Globe, title: "Non hai un sito web", desc: "I clienti ti cercano online, ma non ti trovano." },
  { icon: Clock, title: "Hai un sito vecchio", desc: "Il tuo sito non ti rappresenta più e non funziona bene da cellulare." },
  { icon: MessageSquare, title: "Contatti sparsi ovunque", desc: "Tra WhatsApp, telefonate e messaggi, perdi richieste importanti." },
  { icon: UserX, title: "Immagine poco professionale", desc: "I clienti non si fidano se la tua presenza online è trascurata." },
];

const Problem = () => (
  <section id="problema" className="py-20 md:py-28">
    <div className="container mx-auto px-4 lg:px-8">
      <h2 className="text-3xl md:text-4xl font-bold text-center text-foreground">
        Ti riconosci in queste situazioni?
      </h2>
      <p className="mt-4 text-center text-muted-foreground max-w-xl mx-auto">
        Molte attività perdono clienti ogni giorno per questi motivi. Se ti ritrovi, possiamo aiutarti.
      </p>
      <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {problems.map((p) => (
          <div
            key={p.title}
            className="bg-card border border-border rounded-xl p-6 hover:shadow-md transition-shadow"
          >
            <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
              <p.icon className="h-6 w-6 text-primary" />
            </div>
            <h3 className="font-semibold text-foreground mb-2">{p.title}</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">{p.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Problem;
