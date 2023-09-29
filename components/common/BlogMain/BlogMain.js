import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import IconArrowRight from "@components/common/Icon/IconArrowRight";
import CloudImg from "@components/common/Image";
import FormatDate from "@components/common/FormatDate/FormatDate";
import _, { forEach } from "lodash";
import styles from "./blog.module.scss";

const BlogMain = ({ expertises = [], total, blogs = [], totalBlogsData }) => {
  const groupArrayIntoChunksWithKeys = (bigArray) => {
    const groupedArrays = [];
    const chunkSize = 12;
    let page = 0;
    for (let i = 0; i < bigArray.length; i += chunkSize) {
      const chunk = bigArray.slice(i, i + chunkSize);
      page = page + 1; // Create a key for each chunk
      const chunkWithKey = { page, attributes: chunk }; // Add a key-value pair to the chunk
      groupedArrays.push(chunkWithKey);
    }

    return groupedArrays;
  };

  const groupByCategoryPaged = (data = []) => {
    if (!data?.length) {
      return [];
    }
    const formattedData = data.map((item) => {
      const attributes = item.attributes;
      const category = attributes?.category?.data?.attributes?.name;
      const thumnail = attributes?.thumnail?.data?.attributes;
      const tags = attributes?.tags?.data?.map?.((tag) => {
        return tag?.attributes?.name;
      });

      return {
        ...attributes,
        category,
        tags,
        thumnail,
      };
    });
    return _.map(
      _.groupBy(formattedData, (blog) => blog.category),
      (blogs, category) => {
        return {
          expert: category,
          items: groupArrayIntoChunksWithKeys(blogs),
        };
      }
    );
  };
  const allData = groupArrayIntoChunksWithKeys(blogs);
  const allDataRender = [];
  allData.forEach((itm, key) => {
    const subArr = itm.attributes;
    let reFormat = [];
    subArr.forEach((subArr, index) => {
      reFormat.push(subArr.attributes);
    });
    allDataRender.push({ attributes: reFormat });
  });
  const [dataCurrent, setDataCurrent] = useState(allDataRender);
  const [pageRender, setPageRender] = useState(allDataRender[0]);
  const [catActive, setCatActive] = useState(-1);
  const [pagedAllBlogs, setPagedAllBlogs] = useState(
    groupByCategoryPaged(blogs)
  );
  const [page, setPage] = useState(0);
  const isBrowser = () => typeof window !== "undefined"; //The approach recommended by Next.js

  function scrollToTop() {
    if (!isBrowser()) return;
    window.scrollTo({ top: 0, behavior: "smooth" });
  }
  function scrollToBlog() {
    if (!isBrowser()) return;
    const element = document.getElementById("blog-main");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  }
  const handleChangePage = (page) => {
    setPage(page);
    setPageRender(dataCurrent[page].attributes);
    scrollToTop();
  };
  const handleChangeCategory = (cat) => {
    setPage(0);
    setCatActive(cat);
    if (cat === -1) {
      setDataCurrent(allDataRender);
    } else {
      setDataCurrent(pagedAllBlogs[cat].items);
    }
    scrollToBlog();
  };
  useEffect(() => {
    setPageRender(dataCurrent[page].attributes);
  }, [dataCurrent]);
  const featuredBlog = pagedAllBlogs.filter(
    (item) => item.expert === "featured"
  );
  return (
    <section className={styles.expertise}>
      <div className="container">
        <div className={styles.tab}>
          <div className={styles.tab_item}>
            <div
              className={` ${"blog_tab"} ${styles.tab_title} ${
                catActive === -1 ? styles.tab_title_active : ""
              }`}
              onClick={() => handleChangeCategory(-1)}
            >
              Latest blogs [{total}]
            </div>
          </div>
          {expertises.map((cat, key) => {
            if (cat.expert != "featured") {
              return (
                <div
                  className={styles.tab_item}
                  key={key}
                  onClick={() => handleChangeCategory(key)}
                >
                  <div
                    className={` ${"blog_tab"} ${styles.tab_title} ${
                      catActive === key ? styles.tab_title_active : ""
                    }`}
                  >
                    <span>{cat.expert}</span> [{cat.items.length}]
                  </div>
                </div>
              );
            }
          })}
        </div>
        <div id="blog-main">
          {featuredBlog[0].items[0].attributes?.map((item, key) => (
            <Link href={`/blog/${item.slug}`} prefetch={false} key={key}>
              <a className={styles.highlight}>
                <div className={styles.highlight_img}>
                  <CloudImg
                    src={item.thumnail?.url}
                    width={item.thumnail?.width}
                    height={item.thumnail?.height}
                    alt={
                      item.thumnail?.alternativeText
                        ? item.thumnail.alternativeText
                        : "blog thumnail"
                    }
                    layout="fill"
                  />
                </div>
                <div className={styles.highlight_desc}>
                  <h2>{item.title}</h2>
                  <div
                    dangerouslySetInnerHTML={{
                      __html: item.description,
                    }}
                  />
                  <div className={styles.post_tag}></div>

                  <p>
                    {item.author?.data?.attributes.name}
                    <span className={styles.date}>
                      <FormatDate dateString={item.publishedAt} />
                    </span>
                  </p>
                </div>
              </a>
            </Link>
          ))}
          <div className={styles.list}>
            {pageRender.map?.((item, index) => (
              <Link
                href={`/blog/${item.slug}`}
                prefetch={false}
                key={`${index}`}
              >
                <a className={styles.post}>
                  <div className={styles.post_img}>
                    <CloudImg
                      src={
                        item.thumnail?.data?.attributes?.url ||
                        item.thumnail?.url
                      }
                      alt={
                        item.thumnail?.data?.attributes?.alternativeText ||
                        "Relia Blog Img"
                      }
                      width={item.thumnail?.data?.attributes?.width}
                      height={item.thumnail?.data?.attributes?.height}
                      layout="fill"
                    />
                  </div>
                  <h2>{item.title}</h2>
                  <div
                    dangerouslySetInnerHTML={{
                      __html: item.description,
                    }}
                  />
                  <div className={styles.post_tag}>
                    <p>
                      {item.author?.data?.attributes.name}
                      <span className={styles.date}>
                        <FormatDate dateString={item.publishedAt} />
                      </span>
                    </p>
                  </div>
                </a>
              </Link>
            ))}
          </div>
          <div id="pagination-numbers" className={styles.paginate}>
            {dataCurrent.map?.((blogs, index) => (
              <button
                className={index === page ? styles.paginate_current : ""}
                page-index={blogs.page}
                key={index}
                onClick={() => handleChangePage(index)}
              >
                {index + 1}
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogMain;
