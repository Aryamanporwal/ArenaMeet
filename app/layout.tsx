import type { Metadata } from "next";
import "./globals.css";
import { Inter } from "next/font/google";
import { ClerkProvider } from "@clerk/nextjs";
import { Toaster } from '@/components/ui/sonner';
import "@stream-io/video-react-sdk/dist/css/styles.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "ArenaMeet",
  description: "Video Calling App",
  icons:{
    icon:'/icons/logo.svg'
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <ClerkProvider appearance={{
        layout:{
          logoImageUrl : '/icons/logo.svg',
          socialButtonsVariant: 'iconButton',
          
        },
        variables:{
          colorText: '#fff',
          colorPrimary: '#0E78F9',
          colorBackground: '#1c1f2e',
          colorInputBackground: '#252a41',
          colorInputText: '#fff',
        }
      }
      }>

        <body className={`${inter.className} bg-gray-900 text-white min-h-screen flex flex-col`}>
          {children}
          <Toaster/>
        </body>
      </ClerkProvider>
    </html>
  );
}
