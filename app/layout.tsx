import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Provider } from "./_components/Provider/Provider";
import { ThemeProvider } from "./_components/Provider/theme-provider";
import { Toaster } from "../components/ui/toaster";

const inter = Inter({ subsets: ['latin'], display: 'swap', adjustFontFallback: false})


export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
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
