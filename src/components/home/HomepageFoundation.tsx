import { ArrowUpRight } from "lucide-react";
import { destinations } from "@/config/navigation";
export function HomepageFoundation() {
  return <section className="foundation container" aria-labelledby="foundation-title">
    <div><p className="eyebrow">A new chapter online</p><h2 id="foundation-title">The same commitment.<br /><em>A fresh welcome.</em></h2></div>
    <div><p className="foundation-label">Homepage preview · Milestone one</p><p>More of our story is coming to this space. Upcoming events, a president’s welcome, community programs, and chapter history are planned for future milestones.</p><a className="text-link" href={destinations.original}>Visit our existing website <ArrowUpRight size={17} aria-hidden="true" /></a></div>
  </section>;
}
