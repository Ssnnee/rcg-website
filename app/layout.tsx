import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Provider } from "./_components/Provider/Provider";
import { ThemeProvider } from "./_components/Provider/theme-provider";
import { Toaster } from "../components/ui/toaster";

const inter = Inter({ subsets: ['latin'], display: 'swap', adjustFontFallback: false})


export const metadata: Metadata = {
  title: "RCG",
  description: "Revue semestrielle publiée par l'École Supérieure de Gestion et d'Administration des Entreprises (E.S.G.A.E.) ",
  icons: [{ rel: "icon", url: "./icon.png" }],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className="scroll-smooth">
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="clair"
          enableSystem
          disableTransitionOnChange
        >
          <Provider>{children}</Provider>
        <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}
