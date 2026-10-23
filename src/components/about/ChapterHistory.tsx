import Image from "next/image";
import { milestones } from "@/data/about";

export function ChapterHistory() {
  return <section id="our-story" className="container about-story" aria-labelledby="story-title">
    <div className="about-story-heading"><p className="eyebrow">Our beginnings</p><h2 id="story-title">One Delta spirit.<br /><em>A lasting legacy.</em></h2><p className="about-copy">In 1955, sorors from different professional backgrounds came together with a common purpose: establishing a chapter in Monroe.</p>
      <figure className="history-photo"><Image src="/images/history/chapter-meeting-1959.png" alt="Monroe Alumnae Chapter members at a meeting in November 1959" width={650} height={408} sizes="(max-width: 800px) 100vw, 45vw" /><figcaption>A chapter meeting in November 1959 at the home of Soror Lucille Toston, one of the first initiates.</figcaption></figure>
    </div>
    <ol className="history-timeline">{milestones.map(item => <li key={item.date}><p className="timeline-date">{item.date}</p><h3>{item.title}</h3><p>{item.text}</p></li>)}</ol>
  </section>;
}
