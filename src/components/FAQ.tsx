import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    q: "Come funziona?",
    a: "Parliamo insieme della tua attività, capiamo cosa ti serve e realizziamo un sito semplice e professionale su misura per te.",
  },
  {
    q: "Venite da noi o si fa tutto online?",
    a: "Possiamo fare tutto online oppure venire direttamente da te per capire meglio la tua attività e raccogliere informazioni.",
  },
  {
    q: "In quanto tempo è pronto il sito?",
    a: "Di solito tra 5 e 10 giorni lavorativi, in base alla complessità e alla velocità con cui raccogliamo i contenuti.",
  },
  {
    q: "Quanto costa?",
    a: "Puoi scegliere tra pagamento unico oppure soluzione mensile. Ti spieghiamo tutto in modo chiaro durante la consulenza.",
  },
  {
    q: "Ci sono costi mensili?",
    a: "Sì, il mantenimento parte da 79€/mese e include hosting, gestione tecnica e fino a 2 modifiche leggere al mese.",
  },
];

const FAQ = () => (
  <section id="faq" className="py-20 md:py-28">
    <div className="container mx-auto px-4 lg:px-8">
      <div className="max-w-2xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-foreground">
          Domande frequenti
        </h2>

        <Accordion type="single" collapsible className="mt-12">
          {faqs.map((faq, i) => (
            <AccordionItem key={i} value={`faq-${i}`} className="border-border">
              <AccordionTrigger className="text-left text-foreground hover:no-underline py-5 text-base">
                {faq.q}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground text-sm leading-relaxed">
                {faq.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </div>
  </section>
);

export default FAQ;
