import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const navLinks = [
  { label: "Problem", href: "#problema" },
  { label: "Solution", href: "#soluzione" },
  { label: "Packages", href: "#pacchetti" },
  { label: "How it works", href: "#come-funziona" },
  { label: "Examples", href: "#esempi" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border">
      <div className="container mx-auto flex items-center justify-between h-16 px-4 lg:px-8">
        <a href="#" className="text-xl font-bold text-primary tracking-tight">
          Delegate
        </a>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              {l.label}
            </a>
          ))}
          <Button asChild className="bg-accent text-accent-foreground hover:bg-accent/90 rounded-full px-6">
            <a href="#contatto">Request a consultation</a>
          </Button>
        </div>

        {/* Mobile toggle */}
        <button className="md:hidden p-2" onClick={() => setOpen(!open)} aria-label="Menu">
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-background border-b border-border px-4 pb-4 space-y-3">
          {navLinks.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="block text-sm font-medium text-muted-foreground hover:text-foreground py-2"
            >
              {l.label}
            </a>
          ))}
          <Button asChild className="w-full bg-accent text-accent-foreground hover:bg-accent/90 rounded-full">
            <a href="#contatto" onClick={() => setOpen(false)}>Request a consultation</a>
          </Button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
