import React from "react";
import { useQuery } from "@apollo/client";

import styles from "./card.module.css";

import QUERY_POST_TAGS from "../../../pages/blog/queryPostTags.graphql";

const Index = ({ blog }) => {
  const { data, loading, error } = useQuery(QUERY_POST_TAGS, {
    variables: {
      slug: blog?.slug
    }
  });

  return (
    <div className={styles.container}>
      <div className={styles.imgContainer}>
        <img src={blog.coverImage} />
      </div>

      <div className={styles.details}>
        <p className={styles.title}>{blog.title}</p>
        <p className={styles.desc}>{blog.brief}</p>
        <div className={styles.tagsContainer}>
          {data?.post?.tags.map((tag) => {
            return <span className={styles.tags}>{tag.name}</span>;
          })}
        </div>
      </div>
    </div>
  );
};

export default Index;
