"use client";
import Image from "next/image";
import { useRef, useState } from "react";
import { ChevronLeft, ChevronRight, X, Expand } from "lucide-react";
import { galleryImages } from "@/data/gallery";

export function PhotoGallery() {
  const dialog = useRef<HTMLDialogElement>(null);
  const [index, setIndex] = useState(0);
  const image = galleryImages[index];
  function move(direction: number) { setIndex(current => (current + direction + galleryImages.length) % galleryImages.length); }
  return <>
    <div className="photo-grid">{galleryImages.map((photo, photoIndex) => <figure key={photo.src}><button className="photo-button" aria-label={`Enlarge photo ${photoIndex+1}: ${photo.alt}`} onClick={() => { setIndex(photoIndex); dialog.current?.showModal(); }}><Image src={photo.src} alt={photo.alt} width={photo.width} height={photo.height} sizes="(max-width: 600px) 90vw, (max-width: 960px) 45vw, 30vw" /><span className="photo-expand" aria-hidden="true"><Expand size={16} /> Enlarge</span></button><figcaption>{photo.alt}</figcaption></figure>)}</div>
    <dialog ref={dialog} className="photo-dialog" aria-label="Chapter photo viewer" onKeyDown={event => { if(event.key === "ArrowRight") { event.preventDefault(); move(1); } if(event.key === "ArrowLeft") { event.preventDefault(); move(-1); } }}>
      <div className="viewer-toolbar"><p aria-live="polite">Photo {index+1} of {galleryImages.length}</p><button aria-label="Close photo viewer" onClick={() => dialog.current?.close()}><X size={24} /></button></div>
      <Image src={image.src} alt={image.alt} width={image.width} height={image.height} sizes="90vw" loading="eager" className="viewer-image" />
      <div className="viewer-controls"><button aria-label="Previous photo" onClick={() => move(-1)}><ChevronLeft size={24} /></button><p aria-live="polite">{image.alt}</p><button aria-label="Next photo" onClick={() => move(1)}><ChevronRight size={24} /></button></div>
    </dialog>
  </>;
}
