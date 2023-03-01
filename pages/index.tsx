import PrimaryLayout from '@/components/layouts/primary/PrimaryLayout';
import Search from '@/components/utility/search/Search';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';

import { NextPageWithLayout } from './page';

const Home: NextPageWithLayout = () => {
  const { locale } = useRouter();

  return (
    <section className="flex flex-col items-center gap-y-5 mt-12 sm:mt-44">
      <Image
        src="/Google.png"
        alt="Google Logo"
        width={272}
        height={92}
        placeholder="blur"
        blurDataURL={'/Google.png'}
      />
      <Search />
      <p>
        Google offered in:{' '}
        <Link
          href="/"
          locale={locale === 'en' ? 'th' : 'en'}
          className="underline text-blue-600"
        >
          ภาษาไทย
        </Link>
      </p>
    </section>
  );
};

export default Home;

Home.getLayout = (page) => {
  return <PrimaryLayout>{page}</PrimaryLayout>;
};
