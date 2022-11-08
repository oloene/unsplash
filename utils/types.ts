export type Topic = {
    id: string;
    title: string;
};

export type TopicResponseType = {
    topics: Topic[];
    error: string;
};

type UrlKey = "full" | "raw" | "regular" | "small" | "small_s3" | "thumb";
type Url = Record<UrlKey, string>;

export type Photo = {
    id: string;
    urls: Url;
    alt_description?: string;
};

export type PhotoResponseType = {
    photos: Photo[];
    error: string;
    hasMore: boolean;
};
