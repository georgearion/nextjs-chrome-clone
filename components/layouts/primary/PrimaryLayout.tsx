import Footer from '@/components/navigation/footer/Footer';
import Header from '@/components/navigation/header/Header';
import Head from 'next/head';

export interface IPrimaryLayout extends React.ComponentPropsWithoutRef<'div'> {
  justify?: 'items-center' | 'items-start';
}

const PrimaryLayout: React.FC<IPrimaryLayout> = ({
  children,
  justify = 'items-center',
  ...divProps
}: React.PropsWithChildren<IPrimaryLayout>) => {
  return (
    <>
      <Head>
        <title>NextJs Google Clone</title>
      </Head>
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
