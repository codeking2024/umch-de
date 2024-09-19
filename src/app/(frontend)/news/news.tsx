"use client";

import React, { useState, useEffect } from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { PortableText } from "next-sanity";
import { Post as postType } from "@/sanity/types";
import { getPostData } from "@/utils/fetchData";
import { urlFor } from "@/sanity/lib/image";
import { dateConvertorWithYear } from "./../../../utils/dateConvertor";
import eventBus from "@/utils/eventBus";

import "./news.css";

function News() {
    const [newsValues, setNewsValues] = useState<postType[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    const fetchNewsData = async (lang: string) => {
        try {
            const postData = await getPostData(
                `_id,
            title,
            publishedAt,
            coverImage,
            "slug": slug.current,
            "author": author->{name, picture},
            content`, ``, lang);
            setNewsValues(postData);
        } catch (err) {
            setError("Failed to fetch event data.");
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchNewsData('de');
    }, []);

    useEffect(() => {
        const handleLangEvent = (lang: string) => {
            fetchNewsData(lang);
        }

        eventBus.on('change-language', handleLangEvent);

        return () => {
            eventBus.off('change-language', handleLangEvent);
        }
    }, []);

    return (
        <div className="news-container">
            <div className="news-banner">
                <div className="news-title">
                    <h1>News</h1>
                </div>
                <div className="news-banner-bg">
                    <img
                        src="/background/cover-press-area.jpg"
                        alt="cover-press-area.jpg"
                    />
                </div>
            </div>
            <div className="news-list">
                <Row className="news-list-container">
                    {
                        loading && <div className="d-flex justify-content-center">
                            <div className="spinner-border text-secondary" role="status">
                                <span className="visually-hidden">Loading...</span>
                            </div>
                        </div>
                    }
                    {
                        error && <div className="alert alert-danger" role="alert">
                            {error}
                        </div>
                    }

                    {
                        (!loading && newsValues.length == 0) && <div className="alert alert-info text-center" role="alert">
                            There is no news data yet.
                        </div>
                    }

                    {newsValues.length > 0 &&
                        newsValues.map((newz: postType, idx: number) => (
                            <Col sm={12} md={6} lg={4} className="news-list-row" key={idx} >
                                <div className="card news-item" style={{ animationDelay: `${idx * 0.3}s` }}>
                                    {newz?.coverImage ? (
                                        <img
                                            src={urlFor(newz.coverImage).url()}
                                            className="card-img-top"
                                            alt={newz?.coverImage?.alt || ""}
                                        />
                                    ) : (
                                        ""
                                    )}
                                    <div className="card-body">
                                        <h5 className="card-title">{newz.title}</h5>
                                        <div className="card-content">
                                            {newz?.content && newz.content.length > 0 ? (
                                                <PortableText value={newz?.content[0]} />
                                            ) : (
                                                ""
                                            )}
                                        </div>
                                        {newz?.publishedAt ? (
                                            <div className="created-at">
                                                {dateConvertorWithYear(newz.publishedAt)}
                                            </div>
                                        ) : (
                                            ""
                                        )}
                                    </div>
                                </div>
                            </Col>
                        ))}
                </Row>
            </div>
        </div>
    );
}

export default News;
