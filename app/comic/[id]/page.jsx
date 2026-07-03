import ComicDetailPage from "@/components/ComicDetailPage";

export default async function ComicPage({ params }) {
  const { id } = await params;

  return <ComicDetailPage id={id} />;
}


