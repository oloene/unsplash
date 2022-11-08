import type { PhotoResponseType, Topic, TopicResponseType } from "./types";

// I would put this in an environment variable, same with api url
const ACCESS_KEY = "6AvetsP6Us_M4dbY8xvzdwcLRDj1oqsNFr2rmIjeYLs";

export async function getTopics(): Promise<TopicResponseType> {
    const res = await fetch("https://api.unsplash.com/topics", {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
            Authorization: `Client-ID ${ACCESS_KEY}`,
        },
    });

    if (res.status !== 200) {
        console.log({ error: res.statusText }); // monitor in db?

        return {
            error: `${res.status} | ${res.statusText}`,
            topics: [],
        };
    } else {
        return {
            error: "",
            topics: await res.json(),
        };
    }
}

const PHOTO_PAGE_SIZE = 20;

export async function getPhotos(
    topic?: string,
    page?: string
): Promise<PhotoResponseType> {
    const _page = page ? parseInt(page) : 1;

    const url = topic
        ? `https://api.unsplash.com/topics/${topic}/photos?per_page=${PHOTO_PAGE_SIZE}&page=${_page}`
        : `https://api.unsplash.com/photos?per_page=${PHOTO_PAGE_SIZE}&page=${_page}`;

    const res = await fetch(url, {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
            Authorization: `Client-ID ${ACCESS_KEY}`,
        },
    });
    const totalItems = parseInt(res.headers.get("X-Total") || "0");
    const hasMorePages = PHOTO_PAGE_SIZE * _page <= totalItems;

    if (res.status !== 200) {
        console.log({ error: res.statusText }); // monitor in db?

        return {
            error: `${res.status} | ${res.statusText}`,
            photos: [],
            hasMore: hasMorePages,
        };
    } else {
        return {
            error: "",
            photos: await res.json(),
            hasMore: hasMorePages,
        };
    }
}
