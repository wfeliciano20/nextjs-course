import Head from 'next/head';
import { FC, ReactNode } from 'react';
import Navbar from '../Navbar/Navbar';
import styles from './MainLayout.module.css';

interface MainLayoutProps {
  children?: ReactNode;
}

const MainLayout: FC<MainLayoutProps> = ({ children }) => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar />

      <main className={styles.main}>
        {children}
      </main>

      
    </div>
  )
}

export default MainLayout;