import Header from '@/components/navigation/header/Header';
import Head from 'next/head';
import Footer from '../../navigation/footer/Footer';

export interface IPrimaryLayout {}

const PrimaryLayout: React.FC<IPrimaryLayout> = ({
  children,
}: React.PropsWithChildren<IPrimaryLayout>) => {
  return (
    <>
      <Head>
        <title>NextJs Google Clone</title>
      </Head>
      <div className="min-h-screen flex flex-col items-center">
        <Header />
        <main>{children}</main>
        <div className="m-auto" />
        <Footer />
      </div>
    </>
  );
};

export default PrimaryLayout;
