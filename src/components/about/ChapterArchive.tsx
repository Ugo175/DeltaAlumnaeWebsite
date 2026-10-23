import Image from "next/image";
import { archive } from "@/data/about";
export function ChapterArchive() {
  return <section id="chapter-archive" className="container chapter-archive" aria-labelledby="archive-title"><p className="eyebrow">From our chapter archive</p><h2 id="archive-title">Remembering the women<br /><em>who shaped our chapter.</em></h2>
    <div className="archive-grid">{archive.map(item => <figure key={item.image}><div className="archive-image"><Image src={item.image} alt={item.alt} width={item.width} height={item.height} sizes="(max-width: 800px) 90vw, 50vw" /></div><figcaption><h3>{item.title}</h3><p>{item.caption}</p></figcaption></figure>)}</div>
  </section>;
}
