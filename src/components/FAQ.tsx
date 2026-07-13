import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    q: "How does it work?",
    a: "We talk through your business together, figure out what you need, and build a simple, professional site tailored to you.",
  },
  {
    q: "Do you come to us or is it all done online?",
    a: "We can handle everything online, or come to you in person to better understand your business and gather the information we need.",
  },
  {
    q: "How long does it take to have the site ready?",
    a: "Usually between 5 and 10 working days, depending on the complexity and how quickly we gather your content.",
  },
  {
    q: "How much does it cost?",
    a: "You can choose between a one-off payment or a monthly plan. We'll explain everything clearly during the consultation.",
  },
  {
    q: "Are there any monthly costs?",
    a: "Yes, maintenance starts from €79/month and includes hosting, technical management and up to 2 minor updates per month.",
  },
];

const FAQ = () => (
  <section id="faq" className="py-20 md:py-28">
    <div className="container mx-auto px-4 lg:px-8">
      <div className="max-w-2xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-foreground">
          Frequently asked questions
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
