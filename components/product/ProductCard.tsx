import Image from "next/image";
import { CiHeart } from "react-icons/ci";
import styles from "./ProductCard.module.css";

const ProductCard = ({
  image,
  title,
  price,
}: {
  image: string;
  title: string;
  price: number;
}) => {
  return (
    <div className={styles.container}>
      <div>
        <Image src={image} height={200} width={150} alt={`image of ${title}`} />
      </div>
      <h2 className={styles.title}>{title}</h2>

      <div className={styles.des}>
        <div> {price}$</div>
        <CiHeart size={"2em"} />
      </div>
    </div>
  );
};

export default ProductCard;
