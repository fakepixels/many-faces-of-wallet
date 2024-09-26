import type { Metadata } from "next";
import dynamic from 'next/dynamic';
import "./globals.css";
import '@coinbase/onchainkit/styles.css';

const OnchainProviders = dynamic(
  () => import('./components/OnchainProviders'),
  {
    ssr: false,
  },
);

export const metadata: Metadata = {
  title: "Many faces of wallet",
  description: "Made with OnchainKit",
};

export default function RootLayout({
  children,
}: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="flex items-center justify-center">
        <OnchainProviders>{children}</OnchainProviders>
      </body>
    </html>
  );
}
