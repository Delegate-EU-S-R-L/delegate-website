import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Problem from "@/components/Problem";
import Solution from "@/components/Solution";
import Packages from "@/components/Packages";
import HowItWorks from "@/components/HowItWorks";
import CaseStudies from "@/components/CaseStudies";
import WhyDelegate from "@/components/WhyDelegate";
import FinalCTA from "@/components/FinalCTA";
import FAQ from "@/components/FAQ";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import ScrollFadeIn from "@/components/ScrollFadeIn";

const Index = () => (
  <>
    <Navbar />
    <Hero />
    <ScrollFadeIn><Problem /></ScrollFadeIn>
    <ScrollFadeIn><Solution /></ScrollFadeIn>
    <ScrollFadeIn><Packages /></ScrollFadeIn>
    <ScrollFadeIn><HowItWorks /></ScrollFadeIn>
    <ScrollFadeIn><CaseStudies /></ScrollFadeIn>
    <ScrollFadeIn><WhyDelegate /></ScrollFadeIn>
    <ScrollFadeIn><FinalCTA /></ScrollFadeIn>
    <ScrollFadeIn><FAQ /></ScrollFadeIn>
    <ScrollFadeIn><ContactSection /></ScrollFadeIn>
    <Footer />
    <WhatsAppButton />
  </>
);

export default Index;
