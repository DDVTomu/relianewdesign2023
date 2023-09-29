import { fetchAPI } from "@lib/api";
import Layout from "@components/common/layout";
import Seo from "@components/seo";
import ExportedImage from "next/image";
import BlogMain from "@components/common/BlogMain/BlogMain";
import _ from "lodash";
import ogpImage from "/assets/images/blog.jpg";
import styles from "./blog.module.scss";

function groupArrayIntoChunksWithKeys(bigArray) {
  const groupedArrays = [];
  const chunkSize = 9;
  let page = 0;
  for (let i = 0; i < bigArray.length; i += chunkSize) {
    const chunk = bigArray.slice(i, i + chunkSize);
    page = page + 1; // Create a key for each chunk
    const chunkWithKey = { page, data: chunk }; // Add a key-value pair to the chunk
    groupedArrays.push(chunkWithKey);
  }

  return groupedArrays;
}

function groupByCategory(data = []) {
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
        items: blogs,
      };
    }
  );
}

function groupByCategoryPaged(data = []) {
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
}

const Blog = ({
  blogs,
  allBlogs,
  pagedAllBlogs,
  pagedBlogs,
}) => {
  const seo = {
    metaTitle: "Discover Up-To-Date Technology Blogs | Relia Software",
    metaDescription:
      "With the rapid pace at which technology is developing and new trends appearing in the industry, it is vital to update your knowledge regularly. Visit our up-to-date tech blogs!",
    shareImage: ogpImage,
    article: true,
  };

  return (
    <Layout>
      <Seo seo={seo} />
      <section className={styles.hero}>
        <div className={styles.hero__bg_ellipse_1}>
          <ExportedImage
            src="/images/new-relia/background/services/service-ellipse-1.png"
            width={376}
            height={564}
            objectFit="contain"
            priority={true}
            alt="bg service ellipse 1"
          />
        </div>
        <div className={styles.hero__bg_ellipse_2}>
          <ExportedImage
            src="/images/new-relia/background/services/service-ellipse-2.png"
            width={476}
            height={664}
            objectFit="contain"
            priority={true}
            alt="bg service ellipse 2"
          />
        </div>
        <div className={` ${"container"} ${styles.hero__container}`}>
          <div className={styles.hero__header_box}>
            {" "}
            <div className={styles.hero__top_header}>
              <h1 className={styles.hero__top_header__heading}>Blog</h1>
              <p>We share and review inspriring content</p>
            </div>
          </div>
        </div>
      </section>
      <BlogMain
        expertises={blogs}
        blogs={allBlogs}
        pagedBlogs={pagedBlogs}
        pagedAllBlogs={pagedAllBlogs}
      />
    </Layout>
  );
};

export async function getServerSideProps({ params }) {
  const blogs = await fetchAPI(
    "blogs?pagination[pageSize]=1000&pagination[page]=1&populate=*&sort[0]=publishedAt:DESC"
  );

  const data = blogs?.data ?? [];

  if (!data) {
    return {
      props: { blogs: [] },
    };
  }

  const blogsData = groupByCategory(data);
  const pagedBlogs = groupByCategoryPaged(data);
  const pagedAllBlogs = groupArrayIntoChunksWithKeys(data);
  return {
    props: {
      blogs: blogsData,
      allBlogs: data,
      pagedBlogs,
      pagedAllBlogs,
    },
  };
}

export default Blog;
