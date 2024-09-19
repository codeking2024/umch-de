import { client } from "../sanity/lib/client";
import { eventType, navigationType } from "@/utils/interface";
import { Post } from "../sanity/types";

const lang: string = "de";

export async function getNavigationData(types: string, limit: string) {
  const query: string = `*[_type == 'navigation' && language == '${lang}']${limit} | order(sort asc) {${types}}`;
  const navigationData: navigationType[] = await fetchData(query);
  return navigationData;
}

export async function getEventData(types: string, limit: string) {
  const query: string = `*[_type == 'event' && language == '${lang}']${limit} | order(onSiteDate.startDate desc) {${types}}`;
  const eventData: eventType[] = await fetchData(query);
  return eventData;
}

export async function getPostData(types: string, limit: string) {
  const query: string = `*[_type == "post" && language == '${lang}']${limit} | order(date desc, _updatedAt desc) {${types}}`;
  const postData: Post[] = await fetchData(query);
  return postData;
}

export async function fetchData(query: string) {
  try {
    const data = await client.fetch(query);
    return data;
  } catch (error) {
    console.error("Failed to fetch data from Sanity:", error);
    throw new Error("Data fetch failed"); // Rethrow a new error with a user-friendly message
  }
}
