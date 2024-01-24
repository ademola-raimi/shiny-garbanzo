import React, { useEffect } from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';
import styles from '../../styles/Home.module.css';
import Navbar from '../../ui/components/Navbar';
import Footer from '../../ui/components/Footer';
import Product from '../../ui/components/Product';
import Products from '../../ui/components/Products';
import Logos from '../../ui/components/Logos';
import ProductDescription from '../../ui/components/ProductDescription';
import Divider from '../../ui/components/Divider';
import { useDispatch, useSelector } from '../../store/store';
import { setProduct, setLoading, setCurrentImageIndex } from '../../store/slices/productSlice';
import { setHideLoadMore, setBestSellerProducts } from '../../store/slices/productsSlice';

const ProductPage = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const { limit } = useSelector((state) => state.product);
  const { productId } = router.query;

  const fetchProduct = async () => {
    try {
      dispatch(setLoading(true));
      const response = await fetch(`https://dummyjson.com/products/${productId}`);
      const data = await response.json();
      dispatch(setProduct(data));
    } catch (error) {
      console.error('Error fetching products:', error);
    } finally {
      dispatch(setLoading(false));
    }
  };

  const fetchBestSellerProducts = async () => {
    try {
      dispatch(setLoading(true));
      const response = await fetch(`https://dummyjson.com/products?&limit=${limit}`);
      const data = await response.json();
      const products = data.products || [];
      dispatch(setBestSellerProducts(products));
    } catch (error) {
      console.error('Error fetching products:', error);
    } finally {
      dispatch(setLoading(false));
    }
  };

  
  useEffect(() => {
    if (productId) {
      dispatch(setCurrentImageIndex(0));
      fetchProduct();
    }    
  }, [productId]); // Fetch products on component mount

  useEffect(() => {
    dispatch(setHideLoadMore(true));
    fetchBestSellerProducts();
  }, []);

  return (
    <div>
      <Head>
        <title>Product</title>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <Navbar />
        <Product />
        <Divider />
        <ProductDescription />
        <Products isIndex={false} fetchProducts={undefined} />
        <Logos />
      </main>

      <Footer />
    </div>
  );
};

export default ProductPage;
