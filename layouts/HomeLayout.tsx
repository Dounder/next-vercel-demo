import Head from 'next/head';

import { Navbar } from '../components/Navbar';
import styles from '../styles/Home.module.css';

export interface HomeLayoutProps {
  children?: JSX.Element | JSX.Element[];
  title: string;
  description: string;
  [x: string]: any;
}

export const HomeLayout = (props: HomeLayoutProps) => {
  const { children, title, description } = props;
  return (
    <div className={styles.container}>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar />

      <main className={styles.main}>{children}</main>
    </div>
  );
};
