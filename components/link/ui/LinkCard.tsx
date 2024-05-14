import { Link } from "@/types/link";
import React from "react";
import styles from "@/components/link/styles/linkCard.module.css";
import Image from "next/image";
import { formatDate } from "@/utils/date";

interface LinkCardProps {
  link?: Link;
}

const LinkCard = ({ link }: LinkCardProps) => {
  return (
    <button className={styles.container}>
      <Image
        className={styles.image}
        src={
          link?.image_source ||
          "https://ssl.pstatic.net/sstatic/search/common/og_v3.png"
        }
        alt="img"
        width={325}
        height={192}
      />
      <div className={styles.content}>
        <p className={styles.timesAgo}>10 minutes ago</p>
        <p className={styles.description}>{link?.description}</p>
        <p className={styles.createdAt}>{formatDate(link?.created_at!)}</p>
      </div>
    </button>
  );
};

export default LinkCard;
