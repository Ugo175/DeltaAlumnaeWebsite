import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import { ChapterHistory } from "@/components/about/ChapterHistory";
import { CharterMembers } from "@/components/about/CharterMembers";
import { ChapterArchive } from "@/components/about/ChapterArchive";
import { SiteLink } from "@/components/ui/SiteLink";
import { destinations } from "@/config/navigation";

export const metadata: Metadata = {
  title: "About Us | Monroe Alumnae Chapter",
  description: "Discover the history of Monroe Alumnae Chapter, chartered March 25, 1955, and meet the twelve women who began its story.",
};
export default function AboutUs() {
  return <>
    <section className="about-hero"><div className="container"><Link className="about-back" href="/"><ArrowLeft size={17} aria-hidden="true" /> Back to home</Link><p className="eyebrow">Monroe Alumnae Chapter · Est. 1955</p><h1>Our story.<br /><em>Our enduring sisterhood.</em></h1><p>Get to know the chapter, the women, and the history behind Monroe Alumnae.</p><nav className="about-jump-links" aria-label="On this page"><a href="#our-story">Our story</a><a href="#charter-members">Charter members</a><a href="#chapter-archive">Chapter archive</a></nav></div></section>
    <ChapterHistory /><CharterMembers />
    <section className="container service-area" aria-labelledby="service-area-title"><p className="eyebrow">Rooted in Monroe, Louisiana</p><h2 id="service-area-title">A connection to our community.</h2><p className="about-copy">The original charter described a 35-mile service radius around Monroe, including Ouachita, Morehouse, Richland, and Caldwell parishes.</p><p className="about-copy">The chapter’s published history also records service in Franklin, Madison, East Carroll, and West Carroll parishes.</p><SiteLink className="text-link" href={destinations.programs}>Explore our programs <ArrowUpRight size={17} aria-hidden="true" /></SiteLink></section>
    <ChapterArchive />
  </>;
}
