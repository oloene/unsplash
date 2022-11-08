import { useRouter } from "next/router";
import type { Topic } from "../../utils/types";

type PropTypes = {
    topics?: Topic[];
};

const TopicList = ({ topics }: PropTypes): JSX.Element => {
    const router = useRouter();

    const handleTopicChange = (id: string) => {
        router.push(`/?page=1&topic=${id}`);
    };

    if (!topics || topics?.length === 0)
        return <div className="mt-4 text-center">No topics found</div>;

    return (
        <ul className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 items-center justify-center mt-6 mb-2">
            {topics.map((topic) => (
                <li
                    className="bg-slate-100 text-slate-800 text-sm font-bold rounded-xl"
                    key={topic.id}
                >
                    <button
                        className="px-2 py-1 w-full h-full"
                        onClick={() => handleTopicChange(topic.id)}
                    >
                        {topic.title}
                    </button>
                </li>
            ))}
        </ul>
    );
};

export default TopicList;
