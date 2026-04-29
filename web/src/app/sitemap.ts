import type { MetadataRoute } from "next";
import { PRODUCTS } from "@/lib/site-config";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://salesbooster.app";
  const now = new Date();
  const flat = [
    "",
    "/products",
    "/pricing",
    "/about",
    "/roi",
    "/integrations",
    "/waitlist",
    "/apply",
    "/legal/privacy",
    "/legal/terms",
  ];
  const productRoutes = PRODUCTS.map((p) => `/products/${p.slug}`);
  return [...flat, ...productRoutes].map((path) => ({
    url: `${base}${path}`,
    lastModified: now,
    changeFrequency: "weekly",
    priority: path === "" ? 1 : path.startsWith("/products/") ? 0.8 : 0.7,
  }));
}
