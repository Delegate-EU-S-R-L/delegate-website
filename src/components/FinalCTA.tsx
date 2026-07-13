import { Button } from "@/components/ui/button";
import { useLanguage } from "@/i18n/LanguageContext";

const FinalCTA = () => {
  const { t } = useLanguage();
  return (
    <section id="contatto" className="py-20 md:py-28">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">
            {t.finalCta.title}
          </h2>
          <p className="mt-4 text-muted-foreground text-lg">
            {t.finalCta.subtitle}
          </p>

          <form
            className="mt-10 space-y-4 text-left max-w-md mx-auto"
            onSubmit={(e) => {
              e.preventDefault();
              const formData = new FormData(e.currentTarget);
              const phone = formData.get("phone") as string;
              const name = formData.get("name") as string;
              const message = formData.get("message") as string;
              const whatsappMsg = encodeURIComponent(
                t.finalCta.whatsappPrefix(name, message, phone)
              );
              window.open(`https://wa.me/393513317239?text=${whatsappMsg}`, "_blank");
            }}
          >
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-foreground mb-1">
                {t.finalCta.name}
              </label>
              <input
                id="name"
                name="name"
                type="text"
                required
                maxLength={100}
                className="flex h-11 w-full rounded-lg border border-input bg-background px-4 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                placeholder={t.finalCta.namePlaceholder}
              />
            </div>
            <div>
              <label htmlFor="phone" className="block text-sm font-medium text-foreground mb-1">
                {t.finalCta.phone}
              </label>
              <input
                id="phone"
                name="phone"
                type="tel"
                required
                maxLength={20}
                className="flex h-11 w-full rounded-lg border border-input bg-background px-4 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                placeholder={t.finalCta.phonePlaceholder}
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-foreground mb-1">
                {t.finalCta.message}
              </label>
              <textarea
                id="message"
                name="message"
                required
                maxLength={500}
                rows={3}
                className="flex w-full rounded-lg border border-input bg-background px-4 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring resize-none"
                placeholder={t.finalCta.messagePlaceholder}
              />
            </div>
            <Button type="submit" size="lg" className="w-full bg-accent text-accent-foreground hover:bg-accent/90 rounded-full text-base">
              {t.finalCta.submit}
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;
