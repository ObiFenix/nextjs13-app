import React from "react";
import styles from "./page.module.css";
import Image from "next/image";
import Button from "@src/components/button/Button";
import { CATEGORY_ITEMS, ItemProps } from "./data";

const categoryItemList = (category: string) => CATEGORY_ITEMS[category] ?? [];

export default function Category({ params }: any) {
  const itemList: ItemProps[] = categoryItemList(params?.category);

  return (
    <section className={styles.container}>
      <h1 className={styles.categoryTitle}>{params?.category}</h1>
      {itemList?.map(
        (item: ItemProps): React.JSX.Element => (
          <div className={styles.item} key={item.id}>
            <div className={styles.content}>
              <h1 className={styles.title}>{item.title}</h1>
              <p className={styles.description}>{item.description}</p>
              <Button label="See More" url="#" />
            </div>
            <div className={styles.imageContainer}>
              <Image
                className={styles.image}
                src={item.image}
                fill={true}
                alt="Category cover image"
              />
            </div>
          </div>
        )
      )}
    </section>
  );
}
