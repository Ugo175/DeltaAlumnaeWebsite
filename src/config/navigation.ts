// Main pages migrated October 22, 2026. Detail/resource URLs verified in Wix navigation.
const wix = "https://www.dstmonroealumnae.org";
export const destinations = {
  home: "/", about: "/about-us", programs: "/programs",
  gallery: "/gallery", membership: "/membership", contact: `${wix}/contact`,
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

// Existing detail pages stay available until their individual migration.
export const chapterResources = {
  economic: `${wix}/projects-8`,
  educational: `${wix}/copy-of-economic-development`,
  international: `${wix}/copy-2-of-economic-development`,
  health: `${wix}/copy-of-international-awareness-inv`,
  political: `${wix}/copy-2-of-international-awareness-inv`,
  arts: `${wix}/art-letters`,
  scholarship: `${wix}/scholarship`,
  deltaDears: `${wix}/delta-dears`,
  membershipServices: `${wix}/membership-services`,
  sororsOnly: `${wix}/sorors-only`,
};
