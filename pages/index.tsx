import PhotoGrid from "../components/ui/PhotoGrid";
import TopicList from "../components/ui/TopicList";
import { getPhotos, getTopics } from "../utils/api";
import PageNavButton from "../components/ui/PageNavButton";
import { useRouter } from "next/router";
import type { GetServerSideProps } from "next";
import type { PhotoResponseType, TopicResponseType } from "../utils/types";

type PropTypes = {
    topicsData: TopicResponseType;
    photosData: PhotoResponseType;
};

const Home = ({ topicsData, photosData }: PropTypes): JSX.Element => {
    const { topics, error: topicsError } = topicsData;
    const { photos, error: photosError, hasMore } = photosData;
    const router = useRouter();
    const currentPage = Number(router.query.page) || 1;

    const handlePageChange = (nextPage: boolean) => {
        if (!hasMore && nextPage) return;

        const { query } = router;

        let next = 1;

        if (nextPage) {
            next = currentPage + 1;
        } else {
            next = Math.max(currentPage - 1, 1);
        }

        router.push(`/?page=${next}&topic=${query.topic || ""}`);
    };

    return (
        <>
            <section className="px-4 py-4 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
                <div className="max-w-7xl mx-auto text-center text-white">
                    <h1 className="font-bold text-xl tracking-wide">
                        Unsplash Topics
                    </h1>
                    {topicsError ? (
                        <div className="mt-2 flex items-center justify-center gap-1 py-2">
                            <span>🔺</span>
                            <p>{topicsError}</p>
                        </div>
                    ) : (
                        <TopicList topics={topics} />
                    )}
                </div>
            </section>
            <section className="bg-slate-300 flex-1 relative">
                {photosError ? (
                    <div className="flex gap-1 absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
                        <span>🔺</span>
                        <p className="text-gray-700">{photosError}</p>
                    </div>
                ) : (
                    <PhotoGrid photos={photos} />
                )}
            </section>
            <PageNavButton
                disabled={currentPage === 1}
                onClick={() => handlePageChange(false)}
            />
            <PageNavButton
                disabled={!hasMore}
                onClick={() => handlePageChange(true)}
                right
            />
        </>
    );
};

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
    const topic = Array.isArray(query.topic) ? query.topic[0] : query.topic;
    const page = Array.isArray(query.page) ? query.page[0] : query.page;

    const [topicsData, photosData] = await Promise.all([
        getTopics(),
        getPhotos(topic, page),
    ]);

    return {
        props: {
            topicsData,
            photosData,
        },
    };
};

export default Home;
