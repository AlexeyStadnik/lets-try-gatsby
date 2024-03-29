import * as React from 'react';
import {Link, useStaticQuery, graphql} from 'gatsby';
import {
    container,
    heading,
    navLinks,
    navLinkItem,
    navLinkText,
    siteTitle,
} from './layout.module.css';

const Layout = ({
    pageTitle,
    children,
}) => {

    const data = useStaticQuery(graphql`    
    query {
      site {
        siteMetadata {
          title
        }
      }
    }
    `);
    return (
        <main className={container}>
            <title>{pageTitle} | {data.site.siteMetadata.title}</title>
            <header className={siteTitle}>{data.site.siteMetadata.title}</header>
            <nav>
                <ul className={navLinks}>
                    <li className={navLinkItem}>
                        <Link className={navLinkText} to="/">Home</Link>
                    </li>
                    <li className={navLinkItem}>
                        <Link className={navLinkText} to="/about">About</Link>
                    </li>
                    <li className={navLinkItem}>
                        <Link className={navLinkText} to="/blog">Blog</Link>
                    </li>
                </ul>
            </nav>
            <h1 className={heading}>{pageTitle}</h1>
            {children}
        </main>
    );
};
export default Layout;