import React, { useEffect } from "react";
import { Link } from "next/link";
import PageTitle from "@components/pageTitle";
import Layout from "@components/common/layout";
import BoxProcess from "@components/common/BoxProcess";
import ContactSubSection from "@components/common/contactSubSection";
import QuoteSection from "@components/common/quoteSection";
import SEO from "@components/seo";
import Image from "next/image";
import Animation from "@components/common/Animation";
import ogpImage from "assets/images/industries/fintech-app-development.jpg";
import tech from "./tech.module.scss";
import { fetchAPI } from "@lib/api";

const TechStackDetail = ({ industry }) => {
    useEffect(() => {
        const container = document.querySelector(".list-operations");
        const items = container.querySelectorAll(".list-operations__col");
        const maxColumns = 3;

        function updateColumns() {
            const itemCount = items.length;
            const columns = Math.min(itemCount, maxColumns);
            const itemWidth =
                columns > 0 ? `calc((100% - 20px * 2 ) / ${columns})` : `100%`;

            items.forEach((item) => {
                item.style.width = itemWidth;
            });
        }

        updateColumns();
    }, []);

    const keywords = [
        ...industry?.attributes.Category.data.map(
            (keyword) => keyword?.attributes.keyword
        ),
    ];

    const strapiUrl = process.env.NEXT_PUBLIC_STRAPI_SERVER;

    const updatedDescription = (data) => {
        const update = data.replace(/src="(\.\.\/)/g, `src="${strapiUrl}/`);
        return update;
    };

    const seo = {
        metaTitle: `${industry?.attributes.Title} | USA & Vietnam`,
        metaDescription: `${industry?.attributes.metaDescription}`,
        keywords: keywords ? keywords.toString() : "",
        shareImage: `${industry?.attributes.metaImage.data.url}`,
        article: true,
    };
    const processData = industry?.attributes.DataItem;
    return (
        <Layout>
            <SEO seo={seo} />
            <PageTitle
                title={industry?.attributes.Title}
                subtitle={industry?.attributes.subTitle}
                content={<BoxProcess data={processData} />}
            />

            <div className="main">
                {industry?.attributes.DynamicZone.map((section) => {
                    switch (section.__component) {
                        case "industry.title-box":
                            return (
                                <div className="container">
                                    <div className={tech.heading}>
                                        <h2 className={tech.header_lv2}>{section.Title}</h2>
                                        <div
                                            dangerouslySetInnerHTML={{
                                                __html: section.Description,
                                            }}
                                        />
                                    </div>
                                </div>
                            );
                        case "industry.column-box":
                            return section.Reverse ? (
                                <div className="container">
                                    <div
                                        className={`${tech.box_media} ${tech.box_media__direct}`}
                                    >
                                        <Animation className={`${tech.box_media__img}`}>
                                            <Image
                                                src={strapiUrl + section.Image?.data?.attributes.url}
                                                width={section.Image?.data?.attributes.width}
                                                height={section.Image?.data?.attributes.height}
                                                layout="intrinsic"
                                                loading="eager"
                                                alt={section.Image?.data?.attributes.AlterniveText}
                                            />
                                        </Animation>
                                        <Animation className={`${tech.box_media__text}`}>
                                            <h3 className={`${tech.header_lv3}`}>{section.Title}</h3>
                                            <div
                                                dangerouslySetInnerHTML={{
                                                    __html: section.Description,
                                                }}
                                            />
                                        </Animation>
                                    </div>
                                </div>
                            ) : (
                                <div className="container">
                                    <div className={`${tech.box_media}`}>
                                        <Animation className={`${tech.box_media__img}`}>
                                            <Image
                                                src={strapiUrl + section.Image?.data?.attributes.url}
                                                width={section.Image?.data?.attributes.width}
                                                height={section.Image?.data?.attributes.height}
                                                layout="intrinsic"
                                                loading="eager"
                                                alt={section.Image?.data?.attributes.AlterniveText}
                                            />
                                        </Animation>
                                        <Animation className={`${tech.box_media__text}`}>
                                            <h3 className={`${tech.header_lv3}`}>{section.Title}</h3>
                                            <div
                                                dangerouslySetInnerHTML={{
                                                    __html: section.Description,
                                                }}
                                            />
                                        </Animation>
                                    </div>
                                </div>
                            );

                        case "industry.list-section":
                            return (
                                <Animation className="back-office sec-bg">
                                    <div className="container">
                                        {section.Title ? (
                                            <h2 className={tech.header_lv2}>{section.Title}</h2>
                                        ) : (
                                            ""
                                        )}
                                        <div
                                            dangerouslySetInnerHTML={{
                                                __html: section.Description,
                                            }}
                                        />
                                        <div className="list-operations">
                                            {section.ListItem?.map((list) => {
                                                return (
                                                    <Animation className="list-operations__col">
                                                        <div
                                                            dangerouslySetInnerHTML={{
                                                                __html: updatedDescription(list.Description),
                                                            }}
                                                        />
                                                    </Animation>
                                                );
                                            })}
                                        </div>
                                    </div>
                                </Animation>
                            );
                        case "industry.quote-box":
                            return (
                                <QuoteSection title={section.Title} sub={section.Description} />
                            );
                    }
                })}
                <div className="container">
                    <ContactSubSection />
                </div>
            </div>
        </Layout>
    );
};

export async function getServerSideProps({ params }) {
    const slug = params.slug;
    const populate =
        "DynamicZone.Image,DynamicZone.ListItem,DynamicZone.ListItem.Icon,DataItem,Icon,Category,metaImage";
    const [industriesRes] = await Promise.all([
        fetchAPI(`tech-stacks?filters[slug][$eq]=${slug}&populate=*,${populate}`),
    ]);
    const industries = industriesRes?.data ?? [];
    const industry = industries[0];
    return {
        props: {
            industry: industry,
        },
    };
}

export async function getServerSidePaths() {
    const industriesRes = await fetchAPI(
        "industries?pagination[pageSize]=100&fields[0]=slug"
    );
    const data = industriesRes?.data ?? [];

    const listSlug = data.map((industry) => ({
        params: { slug: industry?.attributes?.slug },
    }));

    return {
        paths: listSlug,
        fallback: false, // can also be true or 'blocking'
    };
}

export default TechStackDetail;