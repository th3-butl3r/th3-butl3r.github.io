import { useState, useEffect } from "react";

const LOCAL_FEED = "/blog-feed.json";
const FEED_URL = "https://srwatchman.substack.com/feed";
const API_URL = `https://api.rss2json.com/v1/api.json?rss_url=${encodeURIComponent(FEED_URL)}`;

export interface BlogPost {
  title: string;
  pubDate: string;
  link: string;
  thumbnail: string;
  description: string;
  categories: string[];
}

const stripHtml = (html: string) =>
  html.replace(/<[^>]*>/g, "").replace(/&[a-z#0-9]+;/gi, " ").replace(/\s+/g, " ").trim();

type FeedData = { status: string; items: Record<string, unknown>[] };

const parseItems = (data: FeedData, limit: number): BlogPost[] | null => {
  if (data.status !== "ok") return null;
  return data.items.slice(0, limit).map((item) => ({
    title: item.title as string,
    pubDate: item.pubDate as string,
    link: item.link as string,
    // Substack expone la portada en enclosure.link; rss2json a veces la deja en thumbnail.
    thumbnail:
      (item.thumbnail as string) ||
      ((item.enclosure as Record<string, unknown> | undefined)?.link as string) ||
      "",
    description: stripHtml((item.description as string) ?? "").slice(0, 160),
    categories: (item.categories as string[]) ?? [],
  }));
};

export const useBlogFeed = (limit = 3) => {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const loadFromApi = () =>
      fetch(API_URL)
        .then((r) => r.json())
        .then((data: FeedData) => {
          const parsed = parseItems(data, limit);
          if (parsed) setPosts(parsed);
          else setError(true);
        })
        .catch(() => setError(true))
        .finally(() => setLoading(false));

    // Try local static file first (kept fresh by GitHub Actions)
    fetch(`${LOCAL_FEED}?_=${Date.now()}`)
      .then((r) => {
        if (!r.ok) throw new Error("no local feed");
        return r.json();
      })
      .then((data: FeedData) => {
        const parsed = parseItems(data, limit);
        if (parsed && parsed.length > 0) {
          setPosts(parsed);
          setLoading(false);
        } else {
          loadFromApi();
        }
      })
      .catch(() => loadFromApi());
  }, [limit]);

  return { posts, loading, error };
};
