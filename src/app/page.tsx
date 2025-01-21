import Link from "next/link";

const mockUrls = 
[
  "https://kdc53co42g.ufs.sh/f/OHO8ZxqbYkvgrGcGtb1YeDT9icswJazCKuQVrhG7oRtPbq4N",
  "https://kdc53co42g.ufs.sh/f/OHO8ZxqbYkvgIOXZzER2YF8BMWyq97Nar64SDUAnGRevo3zJ",
  "https://kdc53co42g.ufs.sh/f/OHO8ZxqbYkvg4DLV27gt7CiQxwNsUlJDqFZ0EWH5XvPS8Ig1" 
]

const mockImages = mockUrls.map((url, index) => ({
  id: index +1,
  url,
}));

export default function HomePage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-[#2e026d] to-[#15162c] text-white">
        <div className="flex flex-wrap gap-4">
            {mockImages.map((image) => (
              <div key={image.id} className="w-48">
              <img src={image.url}></img>
              </div>
            ))}
        </div>
    </main>
  );
}
