import Link from "next/link";
import { ArrowLeft } from "lucide-react";

type PageIntroProps = { eyebrow: string; title: string; accent: string; description: string };
export function PageIntro({ eyebrow, title, accent, description }: PageIntroProps) {
  return <section className="about-hero"><div className="container">
    <Link className="about-back" href="/"><ArrowLeft size={17} aria-hidden="true" /> Back to home</Link>
    <p className="eyebrow">{eyebrow}</p><h1>{title}<br /><em>{accent}</em></h1>
    <p>{description}</p>
  </div></section>;
}
