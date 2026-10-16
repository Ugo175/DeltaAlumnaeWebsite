import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/home/Hero";
import { PresidentsMessage } from "@/components/home/PresidentsMessage";
export default function Home() {
  return <><a className="skip-link" href="#main">Skip to content</a><Navbar /><main id="main"><Hero /><PresidentsMessage /></main><Footer /></>;
}
