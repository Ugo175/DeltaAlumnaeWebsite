// Verified from the published Monroe website on October 13, 2026.
// Replace any value with a local route as that page is migrated.
const wix = "https://www.dstmonroealumnae.org";
export const destinations = {
  home: "/", about: `${wix}/about-us`, programs: `${wix}/portfolio`,
  gallery: `${wix}/gallery`, membership: `${wix}/membership`, contact: `${wix}/contact`,
  national: "https://www.deltasigmatheta.org/",
  region: "https://www.dstsouthwes.org/",
};
export type NavigationItem = { label: string; href: string; children?: { label: string; href: string }[] };
export const navigation: NavigationItem[] = [
  { label: "Home", href: destinations.home },
  { label: "About us", href: destinations.about, children: [{ label: "Our chapter & history", href: destinations.about }] },
  { label: "Programs & events", href: destinations.programs },
  { label: "Gallery", href: destinations.gallery },
  { label: "Membership", href: destinations.membership },
];
