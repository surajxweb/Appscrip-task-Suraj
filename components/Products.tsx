"use client";

import styles from "./Products.module.css";
import { useState } from "react";
import { IoChevronDownSharp } from "react-icons/io5";
import ProductCard from "./product/ProductCard";
import SortButton from "./product/SortButton";

const Products = ({ products }: { products: any }) => {
  const [showFilters, setShowFilter] = useState(true);

  return (
    <div className={styles.container}>
      <div className={styles.options}>
        <div className={styles.moreOptions}>
          <div className={styles.items}>{products.length} ITEMS</div>
          <div
            className={styles.hide}
            onClick={() => setShowFilter(!showFilters)}
          >
            {showFilters ? "<  HIDE FILTERS" : ">  SHOW FILTERS"}{" "}
          </div>
        </div>
        <div>
          <SortButton />
        </div>
      </div>
      <div className={styles.content}>
        {showFilters && (
          <div className={styles.filterContainer}>
            <div className={styles.filter}>
              <div className={styles.filterCheckox}>
                <input type="checkbox" />
                <h2 className={styles.filterHeading}>CUSTOMIZBLE</h2>
              </div>
            </div>

            <div className={styles.filter}>
              <div className={styles.filterMain}>
                <h2 className={styles.filterHeading}>IDEAL FOR</h2>
                <IoChevronDownSharp />
              </div>
              <div>All</div>
              <div className={styles.checkboxes}>
                <div className={styles.filterCheckox}>
                  <input type="checkbox" />
                  <div className={styles.checkboxHeading}>Man</div>
                </div>

                <div className={styles.filterCheckox}>
                  <input type="checkbox" />
                  <div className={styles.checkboxHeading}>Women</div>
                </div>

                <div className={styles.filterCheckox}>
                  <input type="checkbox" />
                  <div className={styles.checkboxHeading}>Baby & Kids</div>
                </div>
              </div>
            </div>

            <div className={styles.filter}>
              <div className={styles.filterMain}>
                <h2 className={styles.filterHeading}>OCCASION</h2>
                <IoChevronDownSharp />
              </div>
              <div>All</div>
            </div>

            <div className={styles.filter}>
              <div className={styles.filterMain}>
                <h2 className={styles.filterHeading}>WORK</h2>
                <IoChevronDownSharp />
              </div>
              <div>All</div>
            </div>

            <div className={styles.filter}>
              <div className={styles.filterMain}>
                <h2 className={styles.filterHeading}>FABRIC</h2>
                <IoChevronDownSharp />
              </div>
              <div>All</div>
            </div>

            <div className={styles.filter}>
              <div className={styles.filterMain}>
                <h2 className={styles.filterHeading}>SEGMENT</h2>
                <IoChevronDownSharp />
              </div>
              <div>All</div>
            </div>

            <div className={styles.filter}>
              <div className={styles.filterMain}>
                <h2 className={styles.filterHeading}>SUITABLE FOR</h2>
                <IoChevronDownSharp />
              </div>
              <div>All</div>
            </div>

            <div className={styles.filter}>
              <div className={styles.filterMain}>
                <h2 className={styles.filterHeading}>RAW MATERIALS</h2>
                <IoChevronDownSharp />
              </div>
              <div>All</div>
            </div>

            <div className={styles.filter}>
              <div className={styles.filterMain}>
                <h2 className={styles.filterHeading}>PATTERN</h2>
                <IoChevronDownSharp />
              </div>
              <div>All</div>
            </div>
          </div>
        )}
        <div className={styles.productList}>
          {products.map((item: any) => (
            <ProductCard
              title={item.title}
              image={item.image}
              key={item.id}
              price={item.price}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Products;
