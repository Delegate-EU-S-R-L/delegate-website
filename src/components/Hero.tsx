import { Button } from "@/components/ui/button";
import { MessageCircle, Globe, CheckCircle } from "lucide-react";
import motoredirettoImg from "@/assets/motorediretto.png";

const Hero = () => (
  <section className="pt-28 pb-20 md:pt-36 md:pb-28 bg-secondary/30">
    <div className="container mx-auto px-4 lg:px-8">
      <div className="max-w-3xl mx-auto text-center">
        <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-foreground animate-fade-in">
          Give value to what you do.
        </h1>
        <p className="mt-6 text-lg md:text-xl text-muted-foreground leading-relaxed animate-fade-in-delay-1">
          We build simple, professional websites that help you get found online
          and make it easy for customers to reach out.
        </p>
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in-delay-2">
          <Button asChild size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90 rounded-full px-8 text-base">
            <a href="#contatto">Request a consultation</a>
          </Button>
          <Button asChild size="lg" variant="outline" className="rounded-full px-8 text-base">
            <a href="#esempi">See an example</a>
          </Button>
        </div>
      </div>

      {/* Real content: site screenshot + WhatsApp chat simulation */}
      <div className="mt-16 grid md:grid-cols-2 gap-8 max-w-4xl mx-auto animate-fade-in-delay-2">
        {/* Block 1 — Real site screenshot */}
        <div className="space-y-3">
          <div className="flex items-center gap-2 text-sm font-medium text-foreground">
            <Globe className="h-4 w-4 text-primary" />
            Your website, simple and professional
          </div>
          <div className="rounded-xl border border-border bg-card shadow-md overflow-hidden">
            <img
              src={motoredirettoImg}
              alt="Example of a website built by Delegate"
              className="w-full h-auto object-cover"
              loading="eager"
            />
          </div>
        </div>

        {/* Block 2 — WhatsApp chat simulation */}
        <div className="space-y-3">
          <div className="flex items-center gap-2 text-sm font-medium text-foreground">
            <MessageCircle className="h-4 w-4 text-primary" />
            The result: clear, direct enquiries
          </div>
          <div className="rounded-xl border border-border bg-card shadow-md p-5 space-y-4">
            {/* Simulated chat bubbles */}
            <div className="space-y-3">
              <div className="bg-muted rounded-2xl rounded-tl-sm px-4 py-3 max-w-[85%] text-sm text-foreground">
                Hi, I'd like a quote
              </div>
              <div className="bg-muted rounded-2xl rounded-tl-sm px-4 py-3 max-w-[85%] text-sm text-foreground">
                <p>📍 Area: Novara</p>
                <p>🔧 Job type: electrical wiring</p>
              </div>
              <div className="bg-muted rounded-2xl rounded-tl-sm px-4 py-3 max-w-[85%] text-sm text-foreground">
                Can you come this week?
              </div>
            </div>

            {/* Result indicator */}
            <div className="flex items-center gap-2 pt-2 border-t border-border">
              <CheckCircle className="h-4 w-4 text-emerald-500 shrink-0" />
              <span className="text-sm font-medium text-foreground">
                Enquiry received clearly
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Supporting text */}
      <p className="mt-6 text-center text-sm text-muted-foreground max-w-xl mx-auto animate-fade-in-delay-2">
        Customers understand what you do and get in touch straight away, with no confusion.
      </p>
    </div>
  </section>
);

export default Hero;
