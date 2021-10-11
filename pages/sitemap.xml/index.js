import axios from 'axios';
import fs from 'fs'
import { baseURL } from "../../helpers/constants";

//https://cheatcode.co/tutorials/how-to-generate-a-dynamic-sitemap-with-next-js open this link to know more about how to create sitemap in next.js

// The first thing you'll notice is that this component is just an empty function component (meaning we're not rendering any markup when the component is rendered by React). This is because, technically speaking, we don't want to render a component at this URL. Instead, we want to hijack the getServerSideProps method (this is called by Next.js as it receives an inbound request on the server) to say "instead of fetching some data and mapping it to the props for our component, override the res object (our response) and instead return the contents of our sitemap."
const SitemapXml = () => { };

export const getServerSideProps = async ({ res }) => {
    
    const resData = await axios.get(`${baseURL}/api/questions`);
    const dynamicPages=await resData.data
    
    const staticPages = fs
        .readdirSync({
            development: 'pages',
            production: './',
        }[process.env.NODE_ENV])
        .filter((staticPage) => {
            return ![
                "_app.js",
                "_document.js",
                "_error.js",
                "sitemap.xml",
                "admin",
                "api",
            ].includes(staticPage);
        })
        .map((staticPagePath) => {
            return `${baseURL}/${staticPagePath}`;
        });

    const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
        <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
            ${staticPages.map((url) => {
                return `
                    <url>
                        <loc>${url}</loc>
                        <lastmod>${new Date().toISOString()}</lastmod>
                        <changefreq>monthly</changefreq>
                        <priority>1.0</priority>
                    </url>`;
            }).join("")}
           
            ${dynamicPages.map(({ _id, date }) => {
                return `
                    <url>
                    <loc>${baseURL}/question/${_id}</loc>
                        <lastmod>${new Date(date).toString()}</lastmod>

                        <priority>1.0</priority>
                    </url>`;
            }).join("")}

    </urlset>`;



    res.setHeader("Content-Type", "application/xml");
    res.write(sitemap);
    res.end();

    return {
        props: {},
    };
};

export default SitemapXml;
