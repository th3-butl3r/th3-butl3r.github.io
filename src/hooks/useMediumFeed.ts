import { useState, useEffect } from "react";

const FEED_URL = "https://www.medium.com/feed/@th3-butl3r";
const API_URL = `https://api.rss2json.com/v1/api.json?rss_url=${encodeURIComponent(FEED_URL)}`;

export interface MediumPost {
  title: string;
  pubDate: string;
  link: string;
  thumbnail: string;
  description: string;
  categories: string[];
}

const stripHtml = (html: string) =>
  html.replace(/<[^>]*>/g, "").replace(/&[a-z#0-9]+;/gi, " ").replace(/\s+/g, " ").trim();

export const useMediumFeed = (limit = 3) => {
  const [posts, setPosts] = useState<MediumPost[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    fetch(API_URL)
      .then((r) => r.json())
      .then((data) => {
        if (data.status === "ok") {
          const parsed: MediumPost[] = data.items.slice(0, limit).map(
            (item: Record<string, unknown>) => ({
              title: item.title as string,
              pubDate: item.pubDate as string,
              link: item.link as string,
              thumbnail: item.thumbnail as string,
              description: stripHtml((item.description as string) ?? "").slice(0, 160),
              categories: (item.categories as string[]) ?? [],
            })
          );
          setPosts(parsed);
        } else {
          setError(true);
        }
      })
      .catch(() => setError(true))
      .finally(() => setLoading(false));
  }, [limit]);

  return { posts, loading, error };
};
