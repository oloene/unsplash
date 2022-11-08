import Head from "next/head";

type PropTypes = {
    title?: string;
    keywords?: string;
    description?: string;
};

const Meta = ({
    title = "Home",
    keywords = "Web development, Next js, React js, Assignment, Unsplash",
    description = "Todo.. Add good meta description",
}: PropTypes): JSX.Element => {
    return (
        <Head>
            <meta
                name="viewport"
                content="width=device-width, initial-scale=1"
            />
            <meta name="keywords" content={keywords} />
            <meta name="description" content={description} />
            <meta charSet="utf-8" />
            <link rel="icon" href="/favicon.ico" />
            <title>{title}</title>
        </Head>
    );
};

export default Meta;
