import type { Metadata } from "next";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
export const metadata: Metadata = {
  title: "Monroe Alumnae Chapter | Delta Sigma Theta Sorority, Inc.",
  description: "Welcome to the Monroe Alumnae Chapter of Delta Sigma Theta Sorority, Inc. Explore our sisterhood, chapter, and community service programs in Monroe, Louisiana.",
};
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body><a className="skip-link" href="#main">Skip to content</a><Navbar /><main id="main">{children}</main><Footer /></body></html>;
}
