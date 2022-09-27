import Link from "next/link";
import React from "react";
import styles from "./subDestacadas2.module.scss";

export const SubDestacadas2 = ({ subDestacadas2 }) => {
  console.log(subDestacadas2);
  return (
    <ul className={styles.subdestacadas2}>
      {subDestacadas2.edges.map((item) => (
        <li>{item.node.title}</li>
      ))}
    </ul>
  );
};
