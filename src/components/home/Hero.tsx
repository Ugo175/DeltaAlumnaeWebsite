import { SiteLink } from "@/components/ui/SiteLink";
import Image from "next/image";

import { ArrowRight, ArrowUpRight } from "lucide-react";
import { hero } from "@/data/homepage";
import { destinations } from "@/config/navigation";

export function Hero() {
  return <section className="hero" aria-labelledby="hero-title">
    <div className="hero-photo"><Image src={hero.image} alt={hero.imageAlt} fill sizes="100vw" priority /></div>
    <div className="hero-shade" />
    <div className="container hero-content">
      <p className="eyebrow"><span />{hero.eyebrow}</p>
      <h1 id="hero-title">{hero.headline[0]}<br /><em>{hero.headline[1]}</em></h1>
      <p className="hero-intro">{hero.introduction}</p>
      <div className="hero-actions"><SiteLink className="button button-crimson" href={destinations.about}>Meet Monroe Alumnae <ArrowRight size={18} aria-hidden="true" /></SiteLink><SiteLink className="hero-secondary" href={destinations.programs}>Explore our programs <ArrowUpRight size={17} aria-hidden="true" /></SiteLink><SiteLink className="hero-secondary" href={destinations.national}>About Delta <ArrowUpRight size={17} aria-hidden="true" /></SiteLink></div>
    </div>
    <div className="hero-caption">Our chapter. Our community. Our commitment.</div>
  </section>;
}
