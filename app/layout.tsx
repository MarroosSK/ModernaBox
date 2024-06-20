import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar";
import { Toaster } from "@/components/ui/sonner";
import { EdgeStoreProvider } from "@/lib/edgestore";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import Footer from "@/components/footer";
import { ThemeProvider } from "@/providers/theme-provider";

const inter = Montserrat({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "ImageBox",
  description: "Store & modify your images!",
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
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          <Navbar />
          <Toaster />
          <ScrollArea>
            <EdgeStoreProvider>
              <main>{children}</main>
            </EdgeStoreProvider>
            <ScrollBar orientation="vertical" className="h-screen" />
          </ScrollArea>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
