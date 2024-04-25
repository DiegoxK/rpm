import Services from "../services/page";
import ContactForm from "./components/contact-form";
import Hero from "./components/hero";
import Path from "./components/path";
import Qualities from "./components/qualities";

export default function LandPage() {
  return (
    <>
      <main className="*:container">
        <Hero />
        <Path />
        <Services />
        <Qualities />
      </main>
      <ContactForm />
    </>
  );
}
