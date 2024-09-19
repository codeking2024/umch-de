"use client"; // Add this line to mark the component as a Client Component

import React, { useEffect, useState } from "react";
import styles from "./mainNavbar.module.css";
import { navigationItemType, navigationType } from "@/utils/interface";
import { getNavigationData } from "@/utils/fetchData";

const MainNavbar: React.FC = () => {
    const [navigationData, setNavigationData] = useState<navigationType[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchNavigationData = async () => {
            try {
                const navDataList = await getNavigationData("title, sort, items", "");
                setNavigationData(navDataList);
            } catch (err) {
                setError('Failed to fetch event data.');
            } finally {
                setLoading(false);
            }
        };

        fetchNavigationData();
    }, []);

    return (
        <>
            <nav className="navbar navbar-expand-lg bg-body-tertiary navbar-white">
                <div className="container-fluid">
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0 w-100 d-flex justify-content-center gap-5">
                            {
                                navigationData && navigationData.map((navigation: any, idx: number) => (
                                    <li className="nav-item dropdown" key={idx}>
                                        <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                            {navigation.title}
                                        </a>
                                        <ul className={`dropdown-menu ${styles.cursorPointer}`}>
                                            <li><a className="dropdown-item" aria-disabled="true">{navigation.title}</a></li>
                                            <li><hr className="dropdown-divider" /></li>
                                            {
                                                navigation && navigation.items && navigation.items.length > 0 && navigation.items.map((subItem: navigationItemType, idx: number) => (
                                                    <li key={idx}><a className={`dropdown-item`} href={subItem.link} >{subItem.title}</a></li>
                                                ))
                                            }
                                        </ul>
                                    </li>
                                ))
                            }
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    );
}

export default MainNavbar;