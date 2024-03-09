import styles from "./page.module.css";
import Header from "@/components/Header";
import Title from "@/components/Title";
import Footer from "@/components/Footer";
import Products from "@/components/Products";

const fetchAllProducts = async (size: number) => {
  const products = await fetch(
    `https://fakestoreapi.com/products?limit=${size}`
  );
  return products.json();
};

export default async function Home() {
  const products = await fetchAllProducts(10);

  return (
    <main className={styles.main}>
      <Header />
      <Title />
      <Products products={products} />
      <Footer />
    </main>
  );
}
