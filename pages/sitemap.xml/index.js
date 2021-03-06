import axios from 'axios';
//import fs from 'fs'
import { baseURL } from "../../helpers/constants";

//https://cheatcode.co/tutorials/how-to-generate-a-dynamic-sitemap-with-next-js open this link to know more about how to create sitemap in next.js

// The first thing you'll notice is that this component is just an empty function component (meaning we're not rendering any markup when the component is rendered by React). This is because, technically speaking, we don't want to render a component at this URL. Instead, we want to hijack the getServerSideProps method (this is called by Next.js as it receives an inbound request on the server) to say "instead of fetching some data and mapping it to the props for our component, override the res object (our response) and instead return the contents of our sitemap."
const SitemapXml = () => { };

export const getServerSideProps = async ({ res }) => {
    
    const resData = await axios.get(`${baseURL}/api/sitemap`);
    const dynamicPages=await resData.data;
    
    const staticPages = [''];
    const categoryPages = ['questions'];

    const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
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

    </urlset>`;

    /**  Set Cache Control in vercel @see https://vercel.com/docs/edge-network/caching#stale-while-revalidate */
    res.setHeader('Cache-Control', 's-maxage=30, stale-while-revalidate');

    res.setHeader("Content-Type", "text/xml");
    res.write(sitemap);
    res.end();

    return {
        props: {},
    };
};

export default SitemapXml;
