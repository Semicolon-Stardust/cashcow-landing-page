import { PrismicPreview } from "@prismicio/next";
import { repositoryName } from "@/prismicio";
import "./global.css";
import { Montserrat as Body, Barlow as Subtitle, Pacifico as Logo, Barlow_Condensed as Heading, Barlow_Semi_Condensed as Paragraph } from 'next/font/google'
import { cn } from "@/libs/utils";

const logo = Logo(
  {
    subsets: ['latin'],
    display: 'swap',
    weight: "400",
    variable: "--font-logo"
  }
)
const body = Body(
  {
    subsets: ['latin'],
    display: 'swap',
    variable: "--font-body"
  }
)
const subtitle = Subtitle(
  {
    subsets: ['latin'],
    display: 'swap',
    weight: ["400", "500", "600", "700", "800", "900"],
    variable: "--font-subtitle"
  }
)
const heading = Heading(
  {
    subsets: ['latin'],
    display: 'swap',
    weight: ["400", "500", "600", "700", "800", "900"],
    variable: "--font-heading"
  }
)
const paragraph = Paragraph(
  {
    subsets: ['latin'],
    display: 'swap',
    weight: ["400", "500", "600", "700", "800", "900"],
    variable: "--font-paragraph"
  }
)

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={cn('min-h-screen font-body antialiased', body.variable, heading.variable, logo.variable, paragraph.variable, subtitle.variable)}>
        {children}
      </body>
      <PrismicPreview repositoryName={repositoryName} />
    </html>
  );
}
