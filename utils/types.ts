export type Topic = {
    id: string;
    title: string;
};

export type TopicResponseType = {
    topics?: Topic[];
    error?: string;
};

type urlKey = "full" | "raw" | "regular" | "small" | "small_s3" | "thumb";
type url = Record<urlKey, string>;

export type Photo = {
    id: string;
    urls: url;
    alt_description?: string;
};

export type PhotoResponseType = {
    photos?: Photo[];
    error?: string;
    hasMore?: boolean;
};
