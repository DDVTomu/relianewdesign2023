import { fetchAPI } from "../../lib/api";
import Layout from "../../components/common/layout";
import Link from "next/link";
import ExportedImage from "@components/common/Image";
import Image from "next/image";
import Seo from "@components/seo";
import ogpImage from "assets/images/tech-stack.png";

import styles from "./index.module.scss";
const TechStack = ({ tech }) => {
  const seo = {
    metaTitle:
      tech.metaTitle ||
      "Build Your App With The Right Tech Stack | Relia Software",
    metaDescription:
      tech.description ||
      "Having the right tech stack play a vital role in your project success. Relia's business services are adapted to meet your specific requirements. Let's contact us!",
    shareImage: ogpImage,
    article: true,
  };

  return (
    <Layout>
      <Seo seo={seo} />
      <section className={styles.hero}>
        <div className={` ${"container"} ${styles.hero__container}`}>
          <div className={styles.hero__header_box}>
            {" "}
            <div className={styles.hero__top_header}>
              <h1 className={styles.hero__top_header__heading}>
                <span>Build Your App With Right</span>
                <br />
                Tech Stack
              </h1>
              <p>
                We offer a suite of services tailored to
                <br /> your business needs.
              </p>
              <a href="/contact" className={styles.hero__top_header__button}>
                get started
              </a>
            </div>
          </div>
        </div>
        <div className={styles.hero__bg_ellipse_1}>
          <Image
            src="/images/new-relia/background/services/service-ellipse-1.png"
            width={376}
            height={564}
            objectFit="contain"
            priority={true}
            alt="service ellipse 1"
          />
        </div>
        <div className={styles.hero__bg_ellipse_2}>
          <Image
            src="/images/new-relia/background/services/service-ellipse-2.png"
            width={476}
            height={664}
            objectFit="contain"
            priority={true}
            alt="service ellipse 2"
          />
        </div>
      </section>
      <section className={styles.applications}>
        <div className="container">
          <div className={styles.applications__header}>
            <h2 className="hdg-lv3">
              Our choice of tech stack is motivated by application architecture
              for feasible maintenance.
            </h2>
          </div>
          <div className={styles.applications__apps}>
            {tech?.map((application, index) =>
              application.attributes.Tech.data.length > 0 ? (
                <div key={index}>
                  <h2 className="hdg-lv2">
                    Our {application.attributes.Category} Tech Stack
                  </h2>
                  <ul className={styles.applications__list}>
                    {application.attributes.Tech.data?.map((app, index) => (
                      <li key={index}>
                        <div className={styles.a}>
                          <ExportedImage
                            alt={
                              app?.attributes.Icon.data?.attributes
                                .alternativeText
                            }
                            src={`${app?.attributes.Icon.data?.attributes.url}`}
                            width={22}
                            height={28}
                            objectFit="contain"
                          />
                          <span className={styles.apptitle}>
                            {app.attributes.Tech}
                          </span>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              ) : (
                ""
              )
            )}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export async function getStaticProps({ params }) {
  const tech = await fetchAPI("techstack-categories?populate=*,Tech.Icon");

  const data = tech?.data ?? [];
  if (!data) {
    return {
      props: { tech: [] },
    };
  }

  return {
    props: { tech: data },
  };
}

export default TechStack;
