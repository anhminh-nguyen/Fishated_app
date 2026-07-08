import ComicDetailPage from "@/components/ComicDetailPage";
import { COMICS } from "@/lib/comics";


export default async function ComicPage({ params }) {
  const { id } = await params;
  const comic = COMICS.find((c) => String(c.id) === String(id));

  if (!comic) {
    return <div>Comic not found</div>;
  }

  const chapterNumber = comic.sl || 0;
  const title = comic.title || "";
  const secondTitle = comic.secondTitle || "";

  return <ComicDetailPage 
  id={id} 
  chapterCount={chapterNumber} 
  chapterName={comic?.id || ""}  
  title={title}
  secondTitle={secondTitle}
  mainDesc={comic?.mainDesc || ""}
  secondDesc={comic?.secondDesc || ""}
  lightDesc={comic?.lightDesc || ""}
  poster = {comic?.poster || "" }
  chapter = {comic?.chapter || [] }
  author = {comic?.author || ""}
  translator = {comic?.translator || ""}

  />;
}

