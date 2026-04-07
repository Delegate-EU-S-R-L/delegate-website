import { useState } from "react";
import { Button } from "@/components/ui/button";
import { MessageCircle, Mail } from "lucide-react";

const ContactSection = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="contatto" className="py-20 md:py-28">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-foreground">
            Parliamone
          </h2>
          <p className="mt-4 text-center text-muted-foreground text-lg max-w-xl mx-auto">
            Spiegaci cosa ti serve. Ti rispondiamo in modo semplice e diretto.
          </p>

          <div className="mt-14 grid md:grid-cols-2 gap-10">
            {/* Column 1 — WhatsApp direct */}
            <div className="flex flex-col items-center md:items-start text-center md:text-left space-y-6">
              <p className="text-foreground font-medium text-lg">
                Vuoi fare prima? Scrivici direttamente su WhatsApp.
              </p>
              <Button
                asChild
                size="lg"
                className="bg-[hsl(142,70%,45%)] text-white hover:bg-[hsl(142,70%,40%)] rounded-full px-8 text-base w-full sm:w-auto"
              >
                <a
                  href="https://wa.me/393513317239"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <MessageCircle className="h-5 w-5 mr-2" />
                  Scrivi su WhatsApp
                </a>
              </Button>

              <div className="pt-4">
                <a
                  href="mailto:info@delegateitalia.com"
                  className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  <Mail className="h-4 w-4" />
                  info@delegateitalia.com
                </a>
              </div>
            </div>

            {/* Column 2 — Simple form */}
            <div>
              {!submitted ? (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label htmlFor="contact-name" className="block text-sm font-medium text-foreground mb-1">
                      Nome
                    </label>
                    <input
                      id="contact-name"
                      name="name"
                      type="text"
                      required
                      maxLength={100}
                      className="flex h-11 w-full rounded-lg border border-input bg-background px-4 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                      placeholder="Il tuo nome"
                    />
                  </div>
                  <div>
                    <label htmlFor="contact-phone" className="block text-sm font-medium text-foreground mb-1">
                      Telefono
                    </label>
                    <input
                      id="contact-phone"
                      name="phone"
                      type="tel"
                      required
                      maxLength={20}
                      className="flex h-11 w-full rounded-lg border border-input bg-background px-4 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                      placeholder="Il tuo numero"
                    />
                  </div>
                  <div>
                    <label htmlFor="contact-need" className="block text-sm font-medium text-foreground mb-1">
                      Cosa ti serve
                    </label>
                    <textarea
                      id="contact-need"
                      name="message"
                      required
                      maxLength={500}
                      rows={3}
                      className="flex w-full rounded-lg border border-input bg-background px-4 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring resize-none"
                      placeholder="Descrivici brevemente cosa ti serve"
                    />
                  </div>
                  <Button
                    type="submit"
                    size="lg"
                    className="w-full bg-accent text-accent-foreground hover:bg-accent/90 rounded-full text-base"
                  >
                    Invia richiesta
                  </Button>
                </form>
              ) : (
                <div className="bg-card border border-border rounded-xl p-8 text-center space-y-4">
                  <p className="text-foreground font-medium">
                    ✅ Richiesta inviata.
                  </p>
                  <p className="text-sm text-muted-foreground">
                    Se preferisci, puoi scriverci direttamente su WhatsApp.
                  </p>
                  <Button
                    asChild
                    size="lg"
                    className="bg-[hsl(142,70%,45%)] text-white hover:bg-[hsl(142,70%,40%)] rounded-full px-8 text-base"
                  >
                    <a
                      href="https://wa.me/393513317239"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <MessageCircle className="h-5 w-5 mr-2" />
                      Scrivi su WhatsApp
                    </a>
                  </Button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
