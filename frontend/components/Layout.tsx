import { Navbar } from './Navbar';
import { Footer } from './Footer';
import Head from 'next/head';

export const Layout: React.FC<{ children: any }> = ({ children }) => {
  return (
    <>
      <Head>
        <title>Parkisi</title>
        <link
          rel="icon"
          type="image/png"
          href="https://cdn-icons-png.flaticon.com/512/8/8173.png"
        />
      </Head>
      <div tw="flex flex-col justify-between min-h-screen items-stretch bg-primary-000">
        <div tw="h-full w-full">
          <Navbar />
          <div tw="container mx-auto pl-10 pr-5">{children}</div>
        </div>
        <Footer />
      </div>
    </>
  );
};
