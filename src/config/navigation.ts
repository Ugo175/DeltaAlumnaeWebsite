// All chapter destinations are local. Only national/regional sites remain external.
export const destinations = {
  home: "/", about: "/about-us", eboard: "/about-us/eboard", programs: "/programs",
  gallery: "/gallery", membership: "/membership", contact: "/contact",
  national: "https://www.deltasigmatheta.org/",
  region: "https://www.dstsouthwes.org/",
};
export type NavigationItem = { label: string; href: string; children?: { label: string; href: string; description?: string }[] };
export const navigation: NavigationItem[] = [
  { label: "Home", href: destinations.home },
  { label: "About us", href: destinations.about, children: [{ label: "Our chapter & history", href: destinations.about, description: "Discover our roots and legacy of service in Monroe." }, { label: "Meet Our Leadership", href: destinations.eboard, description: "Meet our president and the women leading our chapter." }] },
  { label: "Programs & events", href: destinations.programs, children: [
    { label: "Explore all programs", href: destinations.programs, description: "Our Five-Point Programmatic Thrust and community service." },
    { label: "Economic Development", href: "/programs/economic-development", description: "Financial awareness and economic empowerment." },
    { label: "Educational Development", href: "/programs/educational-development", description: "Supporting learning, growth, and our young people." },
    { label: "International Awareness", href: "/programs/international-awareness", description: "Connecting our service with the global community." },
    { label: "Physical & Mental Health", href: "/programs/physical-mental-health", description: "Promoting wellness and health awareness." },
    { label: "Political Awareness", href: "/programs/political-awareness", description: "Civic engagement and social action." },
    { label: "Scholarship", href: "/programs/scholarship", description: "Supporting the pursuit of higher education." },
    { label: "Community events", href: "/programs#events", description: "Connect with the chapter about upcoming events." },
  ] },
  { label: "Gallery", href: destinations.gallery },
  { label: "Membership", href: destinations.membership, children: [
    { label: "Visiting sorors", href: destinations.membership, description: "Find a chapter home and connect with our sisterhood." },
    { label: "Membership services", href: "/membership/services", description: "Explore our gatherings and member activities." },
    { label: "Member resources", href: "/membership/member-resources", description: "Guidance and contacts for chapter members." },
  ] },
];

// Public information and member guidance stay within this application.
export const chapterResources = {
  "economic": "/programs/economic-development",
  "educational": "/programs/educational-development",
  "international": "/programs/international-awareness",
  "health": "/programs/physical-mental-health",
  "political": "/programs/political-awareness",
  "arts": "/programs/arts-letters",
  "scholarship": "/programs/scholarship",
  "deltaDears": "/programs/delta-dears",
  "membershipServices": "/membership/services",
  "sororsOnly": "/membership/member-resources"
};
