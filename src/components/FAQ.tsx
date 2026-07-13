import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { useLanguage } from "@/i18n/LanguageContext";

const FAQ = () => {
  const { t } = useLanguage();
  return (
    <section id="faq" className="py-20 md:py-28">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-foreground">
            {t.faq.title}
          </h2>

          <Accordion type="single" collapsible className="mt-12">
            {t.faq.items.map((faq, i) => (
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
};

export default FAQ;
