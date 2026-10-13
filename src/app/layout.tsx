import type { Metadata } from "next";
import "./globals.css";
export const metadata: Metadata = {
  title: "Monroe Alumnae Chapter | Delta Sigma Theta Sorority, Inc.",
  description: "Welcome to the Monroe Alumnae Chapter of Delta Sigma Theta Sorority, Inc. Explore our sisterhood, chapter, and community service programs in Monroe, Louisiana.",
};
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}
