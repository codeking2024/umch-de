'use client';

import React, { useState, useEffect } from 'react'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { PortableText } from 'next-sanity';
import { News as newsType } from "@/sanity/types";
import { getNewsData } from "@/utils/fetchData";
import { urlFor } from "@/sanity/lib/image";
import { dateConvertorWithYear } from "./../../../utils/dateConvertor";

import "./news.css";

function News() {
    const [newsValues, setNewsValues] = useState<newsType[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchNewsData = async () => {
            try {
                const newsData = await getNewsData("title, createdAt, mainImage, content", "");
                setNewsValues(newsData);
            } catch (err) {
                setError('Failed to fetch event data.');
            } finally {
                setLoading(false);
            }
        };

        fetchNewsData();
    }, []);

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>{error}</div>;
    }

    return (
        <div className="news-container">
            <div className='news-banner'>
                <div className='news-title'>
                    <h1>News</h1>
                </div>
                <div className='news-banner-bg'>
                    <img src="/background/cover-press-area.jpg" alt='cover-press-area.jpg' />
                </div>
            </div>
            <div className='news-list'>
                <Row className='news-list-container'>
                    {
                        newsValues.length > 0 && newsValues.map((newz: newsType, idx: number) => (
                            <Col sm={12} md={6} lg={4} className='news-list-row' key={idx}>
                                <div className="card news-item">
                                    {
                                        newz?.mainImage ? <img src={urlFor(newz.mainImage).url()} className="card-img-top" alt={newz?.mainImage?.alt || ''} /> : ""
                                    }
                                    <div className="card-body">
                                        <h5 className="card-title">{newz.title}</h5>
                                        <div className='card-content'>
                                            {newz?.content ? <PortableText value={newz?.content} /> : ""}
                                        </div>
                                        {
                                            newz?.createdAt ? <div className='created-at'>{dateConvertorWithYear(newz.createdAt)}</div> : ""
                                        }
                                    </div>
                                </div>
                            </Col>
                        ))
                    }
                </Row>
            </div>
        </div >
    )
}

export default News