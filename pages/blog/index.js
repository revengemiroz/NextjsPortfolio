import React from "react";
import { useQuery } from "@apollo/client";

import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import Layout from "../../components/Layout/Layout";

import styles from "../../styles/pages/blog.module.css";

import QUERY_GET_BLOG from "./queryBlogs.graphql";

import Card from "../../components/Blog/Card";

function blog(props) {
  const { data, loading } = useQuery(QUERY_GET_BLOG);

  const { user } = data ?? {};
  const { publication } = user ?? {};
  const { posts } = publication ?? {};

  return (
    <Layout title="Blog | Miroz Devkota">
      <Header />

      <div className={styles.ghost}>
        <span>
          <strong>ఠ_ఠ</strong>
        </span>
      </div>

      <div className={styles.containers}>
        <>
          {!loading ? (
            <div className={styles.blogContainer}>
              {posts?.map((blog) => {
                return (
                  <a
                    href={`https://revengemiroz.hashnode.dev/${blog.slug}`}
                  >
                    <Card blog={blog} />
                  </a>
                );
              })}
            </div>
          ) : (
            <p className={styles.loader} />
          )}
        </>
      </div>
      <Footer />
    </Layout>
  );
}

export default blog;
