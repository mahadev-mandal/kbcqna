import React from 'react';
import { baseURL } from '../helpers/constants';

const createSitemap = (staticPages,categoryPages,dynamicPages) => `<?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
        ${staticPages.map((page) => {
            return `
                <url>
                    <loc>${baseURL}/${page}</loc>
                    <changefreq>daily</changefreq>
                    <priority>1.0</priority>
                </url>`;
        }).join("")}

        ${categoryPages.map((page) => {
            return `
                <url>
                    <loc>${baseURL}/${page}</loc>
                    <changefreq>daily</changefreq>
                    <priority>0.85</priority>
                </url>`;
        }).join("")}
    
        ${dynamicPages.map(({ slug }) => {
            return `
                <url>
                    <loc>${baseURL}/question/${slug}</loc>
                    <changefreq>daily</changefreq>
                    <priority>0.69</priority>
                </url>`;
        }).join("")}
    </urlset>
    `;

class Sitemap extends React.Component {
  static async getInitialProps({ res }) {
    const request = await fetch(`${baseURL}/api/sitemap`);
    const dynamicPages = await request.json();
    const staticPages = [''];
    const categoryPages = ['questions']
    

    res.setHeader('Content-Type', 'text/xml');
    res.write(createSitemap(staticPages,categoryPages,dynamicPages));
    res.end();
  }
}

export default Sitemap;