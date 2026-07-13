import { Check, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const pkg1Features = [
  "Modern website",
  "Services page",
  "Clear contact details",
  "WhatsApp button",
  "Domain and hosting",
  "Business email",
  "Privacy and cookies",
  "Basic local SEO",
];

const pkg2Features = [
  "Everything in the Presence package",
  "Guided enquiry page",
  "Simple form (name, phone, request)",
  "Automatic email delivery",
];

const Packages = () => (
  <section id="pacchetti" className="py-20 md:py-28">
    <div className="container mx-auto px-4 lg:px-8">
      <h2 className="text-3xl md:text-4xl font-bold text-center text-foreground">
        Choose the right package for you
      </h2>
      <p className="mt-4 text-center text-muted-foreground max-w-xl mx-auto">
        Nothing complicated. Just what you need to be found and contacted.
      </p>

      <div className="mt-14 grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
        {/* Package 1 */}
        <div className="bg-card border-2 border-emerald-200 rounded-2xl p-8 flex flex-col">
          <div className="inline-flex items-center gap-2 bg-emerald-50 text-emerald-700 rounded-full px-3 py-1 text-xs font-semibold w-fit mb-4">
            Professional Presence
          </div>
          <p className="text-muted-foreground text-sm mb-6">
            To be online in a simple, professional way
          </p>
          <ul className="space-y-3 flex-1">
            {pkg1Features.map((f) => (
              <li key={f} className="flex items-start gap-2 text-sm text-foreground">
                <Check className="h-4 w-4 text-emerald-500 mt-0.5 shrink-0" />
                {f}
              </li>
            ))}
          </ul>
          <div className="mt-8 p-4 bg-secondary/60 rounded-xl text-sm text-muted-foreground">
            <p className="font-medium text-foreground mb-2">How it works in practice:</p>
            <div className="flex items-center gap-2 flex-wrap">
              <span>Customer visits the site</span>
              <ArrowRight className="h-3 w-3" />
              <span>clicks WhatsApp</span>
              <ArrowRight className="h-3 w-3" />
              <span className="font-medium text-foreground">gets in touch</span>
            </div>
          </div>
          <Button asChild className="mt-6 bg-accent text-accent-foreground hover:bg-accent/90 rounded-full">
            <a href="#contatto">Request info</a>
          </Button>
        </div>

        {/* Package 2 */}
        <div className="bg-card border-2 border-primary/30 rounded-2xl p-8 flex flex-col relative overflow-hidden">
          <div className="absolute top-0 right-0 bg-primary text-primary-foreground text-xs font-semibold px-4 py-1 rounded-bl-xl">
            Recommended
          </div>
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary rounded-full px-3 py-1 text-xs font-semibold w-fit mb-4">
            Website + Clear Enquiries
          </div>
          <p className="text-muted-foreground text-sm mb-6">
            For clearer, more complete enquiries
          </p>
          <ul className="space-y-3 flex-1">
            {pkg2Features.map((f) => (
              <li key={f} className="flex items-start gap-2 text-sm text-foreground">
                <Check className="h-4 w-4 text-primary mt-0.5 shrink-0" />
                {f}
              </li>
            ))}
          </ul>
          <div className="mt-8 p-4 bg-secondary/60 rounded-xl text-sm text-muted-foreground">
            <p className="font-medium text-foreground mb-2">What really changes:</p>
            <div className="space-y-1">
              <p>✅ Customers don't message you randomly</p>
              <p>✅ They fill in a clear request</p>
              <p>✅ You receive everything neatly organised</p>
            </div>
            <p className="mt-2 font-medium text-foreground">
              Less wasted time, higher chances of closing.
            </p>
          </div>
          <Button asChild className="mt-6 bg-accent text-accent-foreground hover:bg-accent/90 rounded-full">
            <a href="#contatto">Request info</a>
          </Button>
        </div>
      </div>
    </div>
  </section>
);

export default Packages;
