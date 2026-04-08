import { useState } from "react";
import { Button } from "@/components/ui/button";
import { MessageCircle, Mail } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";

const inputClass =
  "flex h-12 w-full rounded-lg border border-input bg-background px-4 py-2 text-base ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring";

const ContactSection = () => {
  const [submitted, setSubmitted] = useState(false);
  const [sending, setSending] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [name, setName] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSending(true);
    setError(null);

    const form = e.currentTarget;
    const formData = new FormData(form);

    try {
      const { error: fnError } = await supabase.functions.invoke("send-contact-email", {
        body: {
          name: formData.get("name") as string,
          company: formData.get("company") as string,
          email: "",
          phone: "",
          activity: "",
          need: "",
          existing_site: "",
          goals: [],
          materials: "",
          description: formData.get("description") as string,
        },
      });

      if (fnError) throw fnError;
      setSubmitted(true);
    } catch (err: unknown) {
      console.error(err);
      setError("Errore nell'invio. Riprova o scrivici su WhatsApp.");
    } finally {
      setSending(false);
    }
  };

  const whatsappMessage = encodeURIComponent(
    `Ciao, sono ${name || "[Nome]"}. Ho visto il vostro sito e vorrei informazioni per creare un sito web.`
  );

  return (
    <section id="contatto" className="py-20 md:py-28">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-foreground">
            Vuoi un sito semplice e professionale?
          </h2>
          <p className="mt-4 text-center text-muted-foreground text-lg max-w-xl mx-auto">
            Parlaci della tua attività. Ti ricontattiamo noi, senza impegno.
          </p>

          <div className="mt-14 grid md:grid-cols-[1fr_320px] gap-10">
            {/* Column 1 — Form */}
            <div>
              {!submitted ? (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div>
                    <label htmlFor="c-name" className="block text-sm font-medium text-foreground mb-1">
                      Nome
                    </label>
                    <input
                      id="c-name"
                      name="name"
                      type="text"
                      required
                      maxLength={100}
                      className={inputClass}
                      placeholder="Il tuo nome"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                    />
                  </div>

                  <div>
                    <label htmlFor="c-company" className="block text-sm font-medium text-foreground mb-1">
                      Nome Società
                    </label>
                    <input
                      id="c-company"
                      name="company"
                      type="text"
                      maxLength={100}
                      className={inputClass}
                      placeholder="Il nome della tua azienda"
                    />
                  </div>

                  <div>
                    <label htmlFor="c-desc" className="block text-sm font-medium text-foreground mb-1">
                      Di cosa hai bisogno?
                    </label>
                    <textarea
                      id="c-desc"
                      name="description"
                      required
                      maxLength={500}
                      rows={4}
                      className={`${inputClass} resize-none h-auto`}
                      placeholder="Descrivici brevemente la tua attività e cosa ti serve"
                    />
                  </div>

                  {error && (
                    <p className="text-sm text-destructive">{error}</p>
                  )}

                  <Button
                    type="submit"
                    size="lg"
                    disabled={sending}
                    className="w-full bg-accent text-accent-foreground hover:bg-accent/90 rounded-full text-base font-semibold py-6"
                  >
                    {sending ? "Invio in corso..." : "Parla con noi"}
                  </Button>
                </form>
              ) : (
                <div className="bg-card border border-border rounded-xl p-8 text-center space-y-3">
                  <p className="text-foreground font-medium">
                    ✅ Richiesta inviata. Ti ricontatteremo a breve.
                  </p>
                </div>
              )}
            </div>

            {/* Column 2 — WhatsApp box */}
            <div className="flex flex-col gap-6">
              <div className="bg-card border border-border rounded-xl p-6 space-y-4">
                <h3 className="text-lg font-semibold text-foreground">
                  Preferisci scriverci subito?
                </h3>
                <Button
                  asChild
                  size="lg"
                  className="w-full bg-[hsl(142,70%,45%)] text-white hover:bg-[hsl(142,70%,40%)] rounded-full text-base"
                >
                  <a
                    href={`https://wa.me/393513317239?text=${whatsappMessage}`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <MessageCircle className="h-5 w-5 mr-2" />
                    Scrivici su WhatsApp
                  </a>
                </Button>
              </div>

              <div>
                <a
                  href="mailto:info@delegateitalia.com"
                  className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  <Mail className="h-4 w-4" />
                  info@delegateitalia.com
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
