import Head from 'next/head';
import { ReactElement } from 'react';
import styles from './PrimaryLayout.module.css';

export interface IPrimaryLayout {
  children: ReactElement | ReactElement[] | string;
}

const PrimaryLayout: React.FC<IPrimaryLayout> = ({ children }) => {
  return (
    <>
      <Head>
        <title>Primary Layout Example</title>
      </Head>
      <main className={styles.main}>{children}</main>
    </>
  );
};

export default PrimaryLayout;
