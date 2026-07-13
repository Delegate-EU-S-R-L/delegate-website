const Footer = () => (
  <footer className="bg-secondary/40 pt-0 pb-10">
    {/* Thin separator line */}
    <div className="container mx-auto px-4 lg:px-8">
      <hr className="border-t border-border mb-10" />
    </div>

    <div className="container mx-auto px-4 lg:px-8 text-center space-y-1.5 text-sm text-muted-foreground">
      <p className="font-semibold text-foreground">Delegate S.r.l.</p>
      <p>Tax code / VAT no.: 02826580025</p>
      <p>Corso Vercelli 82, 13045 Gattinara (VC), Italy</p>
      <p>
        PEC:{" "}
        <a href="mailto:delegateeusrl@pec.it" className="hover:text-foreground transition-colors">
          delegateeusrl@pec.it
        </a>
      </p>
      <p className="pt-2">
        Chamber of Commerce: Monte Rosa Laghi Alto Piemonte • Share capital: € 10,000 fully paid up
      </p>
    </div>

    <div className="container mx-auto px-4 lg:px-8 mt-8 text-center">
      <p className="text-xs text-muted-foreground">
        © {new Date().getFullYear()} Delegate. All rights reserved.
      </p>
    </div>
  </footer>
);

export default Footer;
