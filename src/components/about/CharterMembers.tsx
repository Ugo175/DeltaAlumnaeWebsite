import { charterMembers } from "@/data/about";
export function CharterMembers() {
  return <section id="charter-members" className="charter-section" aria-labelledby="charter-title"><div className="container">
    <p className="eyebrow">The women who began our story</p><h2 id="charter-title">Our charter members</h2>
    <ul className="charter-list">{charterMembers.map(name => <li key={name}>{name}</li>)}</ul>
  </div></section>;
}
