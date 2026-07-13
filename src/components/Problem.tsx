import { Globe, Clock, MessageSquare, UserX } from "lucide-react";

const problems = [
  { icon: Globe, title: "You don't have a website", desc: "Customers look for you online, but they can't find you." },
  { icon: Clock, title: "You have an outdated site", desc: "Your site no longer represents you and doesn't work well on mobile." },
  { icon: MessageSquare, title: "Contacts scattered everywhere", desc: "Between WhatsApp, calls and messages, you lose important enquiries." },
  { icon: UserX, title: "An unprofessional image", desc: "Customers don't trust you if your online presence looks neglected." },
];

const Problem = () => (
  <section id="problema" className="py-20 md:py-28">
    <div className="container mx-auto px-4 lg:px-8">
      <h2 className="text-3xl md:text-4xl font-bold text-center text-foreground">
        Does this sound familiar?
      </h2>
      <p className="mt-4 text-center text-muted-foreground max-w-xl mx-auto">
        Many businesses lose customers every day for these reasons. If you recognise yourself, we can help.
      </p>
      <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {problems.map((p) => (
          <div
            key={p.title}
            className="bg-card border border-border rounded-xl p-6 hover:shadow-md transition-shadow"
          >
            <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
              <p.icon className="h-6 w-6 text-primary" />
            </div>
            <h3 className="font-semibold text-foreground mb-2">{p.title}</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">{p.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Problem;
