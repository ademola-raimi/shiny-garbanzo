import React from 'react';
import type { NextPage } from 'next';
import Head from 'next/head';
import { useRouter } from 'next/router';
// import Image from 'next/image';
// import Card from '../ui/components/Card';
import styles from '../../styles/Home.module.css';
// import UserCard from '../ui/home/UserCard';
import Navbar from '../../ui/components/Navbar';
import Footer from '../../ui/components/Footer';
import Product from '../../ui/components/Product';
import Logos from '../../ui/components/Logos';
import ProductDescription from '../../ui/components/ProductDescription';
import Divider from '../../ui/components/Divider';

const ProductPage = () => {
  const router = useRouter();
  const { productId } = router.query;

  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <Navbar />
        <Product />
        <ProductDescription />
        <Divider />
        <Logos />
      </main>

      <Footer />
    </div>
  );
};

export default ProductPage;
