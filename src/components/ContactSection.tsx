import { useState } from "react";
import { Button } from "@/components/ui/button";
import { MessageCircle, Mail } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";

const ACTIVITY_OPTIONS = [
  "Professional website",
  "Website + contact enquiries",
  "I'm not sure, I'd like advice",
];

const EXISTING_SITE_OPTIONS = ["No", "Yes, but it's outdated", "Yes, but I want to rebuild it"];

const MATERIALS_OPTIONS = [
  "Yes, I have everything",
  "I have some of it",
  "No, I need help",
];

const GOALS = [
  "Be found online",
  "Receive information requests",
  "Receive quote requests",
  "Let people contact me via WhatsApp",
  "Showcase my services professionally",
];

const inputClass =
  "flex h-11 w-full rounded-lg border border-input bg-background px-4 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring";

const selectClass =
  "flex h-11 w-full rounded-lg border border-input bg-background px-4 py-2 text-sm ring-offset-background text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring appearance-none";

const ContactSection = () => {
  const [submitted, setSubmitted] = useState(false);
  const [sending, setSending] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [goals, setGoals] = useState<string[]>([]);
  const [name, setName] = useState("");

  const toggleGoal = (goal: string) => {
    setGoals((prev) =>
      prev.includes(goal) ? prev.filter((g) => g !== goal) : [...prev, goal]
    );
  };

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
          email: formData.get("email") as string,
          phone: formData.get("phone") as string,
          activity: formData.get("activity") as string,
          need: formData.get("need") as string,
          existing_site: formData.get("existing_site") as string,
          goals,
          materials: formData.get("materials") as string,
          description: formData.get("description") as string,
        },
      });

      if (fnError) throw fnError;
      setSubmitted(true);
    } catch (err: unknown) {
      console.error(err);
      setError("Something went wrong. Please try again or message us on WhatsApp.");
    } finally {
      setSending(false);
    }
  };

  const whatsappMessage = encodeURIComponent(
    `Hi, I'm ${name || "[Name]"}. I saw your website and I'd like some information about building a website.`
  );

  return (
    <section id="contatto" className="py-20 md:py-28">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-foreground">
            Let's talk
          </h2>
          <p className="mt-4 text-center text-muted-foreground text-lg max-w-xl mx-auto">
            Tell us what you need. We'll reply simply and directly.
          </p>

          <div className="mt-14 grid md:grid-cols-[1fr_320px] gap-10">
            {/* Column 1 — Form */}
            <div>
              {!submitted ? (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="c-name" className="block text-sm font-medium text-foreground mb-1">
                        Full name *
                      </label>
                      <input
                        id="c-name"
                        name="name"
                        type="text"
                        required
                        maxLength={100}
                        className={inputClass}
                        placeholder="Your full name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                      />
                    </div>
                    <div>
                      <label htmlFor="c-company" className="block text-sm font-medium text-foreground mb-1">
                        Company
                      </label>
                      <input id="c-company" name="company" type="text" maxLength={100} className={inputClass} placeholder="Your business name" />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="c-email" className="block text-sm font-medium text-foreground mb-1">
                        Email *
                      </label>
                      <input id="c-email" name="email" type="email" required maxLength={255} className={inputClass} placeholder="email@company.com" />
                    </div>
                    <div>
                      <label htmlFor="c-phone" className="block text-sm font-medium text-foreground mb-1">
                        Phone *
                      </label>
                      <input id="c-phone" name="phone" type="tel" required maxLength={20} className={inputClass} placeholder="+39 ..." />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="c-activity" className="block text-sm font-medium text-foreground mb-1">
                      What kind of business do you run?
                    </label>
                    <input id="c-activity" name="activity" type="text" maxLength={150} className={inputClass} placeholder="e.g. electrician, plumber, café, shop, haulage..." />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="c-need" className="block text-sm font-medium text-foreground mb-1">
                        What do you need? *
                      </label>
                      <select id="c-need" name="need" required className={selectClass} defaultValue="">
                        <option value="" disabled>Select…</option>
                        {ACTIVITY_OPTIONS.map((o) => (
                          <option key={o} value={o}>{o}</option>
                        ))}
                      </select>
                    </div>
                    <div>
                      <label htmlFor="c-existing" className="block text-sm font-medium text-foreground mb-1">
                        Do you already have a website?
                      </label>
                      <select id="c-existing" name="existing_site" className={selectClass} defaultValue="">
                        <option value="" disabled>Select…</option>
                        {EXISTING_SITE_OPTIONS.map((o) => (
                          <option key={o} value={o}>{o}</option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div>
                    <p className="block text-sm font-medium text-foreground mb-2">
                      What should the site do?
                    </p>
                    <div className="space-y-2">
                      {GOALS.map((g) => (
                        <label key={g} className="flex items-center gap-2 text-sm text-foreground cursor-pointer">
                          <input
                            type="checkbox"
                            checked={goals.includes(g)}
                            onChange={() => toggleGoal(g)}
                            className="h-4 w-4 rounded border-input accent-primary"
                          />
                          {g}
                        </label>
                      ))}
                    </div>
                  </div>

                  <div>
                    <label htmlFor="c-materials" className="block text-sm font-medium text-foreground mb-1">
                      Do you already have a logo, photos and copy?
                    </label>
                    <select id="c-materials" name="materials" className={selectClass} defaultValue="">
                      <option value="" disabled>Select…</option>
                      {MATERIALS_OPTIONS.map((o) => (
                        <option key={o} value={o}>{o}</option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label htmlFor="c-desc" className="block text-sm font-medium text-foreground mb-1">
                      Briefly describe what you need *
                    </label>
                    <textarea
                      id="c-desc"
                      name="description"
                      required
                      maxLength={500}
                      rows={3}
                      className={`${inputClass} resize-none`}
                      placeholder="Tell us about your business and what you'd like from the site"
                    />
                  </div>

                  {error && (
                    <p className="text-sm text-destructive">{error}</p>
                  )}

                  <Button
                    type="submit"
                    size="lg"
                    disabled={sending}
                    className="w-full bg-accent text-accent-foreground hover:bg-accent/90 rounded-full text-base"
                  >
                    {sending ? "Sending..." : "Send request"}
                  </Button>
                </form>
              ) : (
                <div className="bg-card border border-border rounded-xl p-8 text-center space-y-3">
                  <p className="text-foreground font-medium">
                    ✅ Request sent. We'll get back to you shortly.
                  </p>
                </div>
              )}
            </div>

            {/* Column 2 — WhatsApp box */}
            <div className="flex flex-col gap-6">
              <div className="bg-card border border-border rounded-xl p-6 space-y-4">
                <h3 className="text-lg font-semibold text-foreground">
                  Prefer to message us right away?
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
                    Message us on WhatsApp
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
