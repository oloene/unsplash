import type { PhotoResponseType, Topic, TopicResponseType } from "./types";

// I would put this in an environment variable, same with api url
const ACCESS_KEY = "6AvetsP6Us_M4dbY8xvzdwcLRDj1oqsNFr2rmIjeYLs";

export async function getTopics(): Promise<TopicResponseType> {
    let response = {} as TopicResponseType;

    try {
        const res = await fetch("https://api.unsplash.com/topics", {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                Authorization: `Client-ID ${ACCESS_KEY}`,
            },
        });

        if (res.status !== 200) {
            console.log({ error: res.statusText }); // log db?

            response.error = `${res.status} | ${res.statusText}`;

            throw new Error();
        }

        response.topics = (await res.json()) as Topic[];
    } catch (_) {}

    return response;
}

const PHOTO_PAGE_SIZE = 20;

export async function getPhotos(
    topic?: string,
    page?: string
): Promise<PhotoResponseType> {
    let response = {} as PhotoResponseType;

    const url = topic
        ? `https://api.unsplash.com/topics/${topic}/photos?per_page=${PHOTO_PAGE_SIZE}&page=${
              page || 1
          }`
        : `https://api.unsplash.com/photos?per_page=20&page=&page=${page || 1}`;

    try {
        const res = await fetch(url, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                Authorization: `Client-ID ${ACCESS_KEY}`,
            },
        });

        if (res.status !== 200) {
            console.log({ error: res.statusText }); // log db?

            response.error = `${res.status} | ${res.statusText}`;

            throw new Error();
        }

        const totalItems = parseInt(res.headers.get("X-Total") || "0");
        const hasMorePages =
            PHOTO_PAGE_SIZE * parseInt(page || "1") <= totalItems;

        if (!totalItems || !hasMorePages) response.hasMore = false;
        else response.hasMore = true;

        response.photos = await res.json();
    } catch (_) {}

    return response;
}
