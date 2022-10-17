import Head from "next/head";

export function LandingPageLayout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <Head>
        <title>Ticket Master</title>
        <meta name="description" content="Ticket Master" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {children}
    </div>
  );
}
