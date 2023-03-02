import Footer from '@/components/navigation/footer/Footer';
import Header from '@/components/navigation/header/Header';

import { NextSeo } from 'next-seo';
import { ReactNode } from 'react';

import info from '@/lib/info.json';

export interface IPrimaryLayout {
  children: ReactNode;
  justify?: 'items-center' | 'items-start';
}

const PrimaryLayout: React.FC<IPrimaryLayout> = ({
  children,
  justify = 'items-center',
  ...divProps
}: React.PropsWithChildren<IPrimaryLayout>) => {
  const baseurl = process.env.BASEURL;
  const imageurl = `${baseurl}/_next/image?url=/thumbnail.png&w=1200&q=75`;
  return (
    <>
      <NextSeo
        title={`${info?.title} | ${info?.siteTitle}`}
        description={info?.description}
        canonical={baseurl}
        openGraph={{
          url: baseurl,
          title: info?.title,
          description: info?.description,
          images: [
            {
              url: imageurl,
              width: 1200,
              height: 800,
              alt: info?.title,
            },
          ],
        }}
      />
      <div {...divProps} className={`min-h-screen flex flex-col ${justify}`}>
        <Header />
        <main className="px-5">{children}</main>
        <div className="m-auto" />
        <Footer />
      </div>
    </>
  );
};

export default PrimaryLayout;
