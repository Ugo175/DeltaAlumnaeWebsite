import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { SiteLink } from "@/components/ui/SiteLink";
import { destinations } from "@/config/navigation";
import { president } from "@/data/president";

export function PresidentsMessage() {
  return <section className="president-section" aria-labelledby="president-title">
    <div className="container president-grid">
      <figure className="president-portrait">
        <Image src={president.image} alt={`${president.name}, Monroe Alumnae Chapter President`} width={434} height={434} sizes="(max-width: 700px) 90vw, 380px" />
        <figcaption><strong>{president.name}</strong><span>Chapter President</span></figcaption>
      </figure>
      <div className="president-message">
        <p className="eyebrow">A welcome from our president</p>
        <h2 id="president-title">Service with purpose.<br /><em>Sisterhood at heart.</em></h2>
        <p className="president-greeting">{president.greeting}</p>
        {president.paragraphs.map(paragraph => <p key={paragraph}>{paragraph}</p>)}
        <p>{president.closing}<br /><strong className="president-signature">{president.name}</strong></p>
        <div className="president-links"><SiteLink className="text-link" href={destinations.national}>About Delta <ArrowUpRight size={16} aria-hidden="true" /></SiteLink><SiteLink className="text-link" href={destinations.region}>Southwest Region <ArrowUpRight size={16} aria-hidden="true" /></SiteLink></div>
        <p className="external-note">National and regional websites open in a new tab. Return to this tab to continue exploring Monroe Alumnae.</p>
      </div>
    </div>
  </section>;
}
