import React from 'react';
import './globals.css'; 
import Navbar from '@/components/Navbar/navbar';
import Footer from '@/components/Footer/footer';


export const metadata = {
  title: 'My App',
  description: 'Welcome to my Next.js app',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {

  return (
    <html lang="en">
      <body className="flex flex-col min-h-screen">
        
          <Navbar/>
            <main className="flex-flow">{children}</main>
            <Footer/>
      </body>
    </html>
  );
}