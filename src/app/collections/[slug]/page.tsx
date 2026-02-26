import { collections, getCollection } from "@/data/collections";
import { CollectionDetail } from "@/components/CollectionDetail";
import { notFound } from "next/navigation";
import type { Metadata } from "next";

export function generateStaticParams() {
  return collections.map(function(c) {
    return { slug: c.slug };
  });
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const collection = getCollection(params.slug);
  if (!collection) return { title: "Not Found" };
  return {
    title: collection.name + " | Saola Collections",
    description: collection.description,
  };
}

export default function CollectionPage({ params }: { params: { slug: string } }) {
  const collection = getCollection(params.slug);
  if (!collection) return notFound();
  return <CollectionDetail collection={collection} />;
}