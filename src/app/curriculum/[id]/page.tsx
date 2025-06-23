import { CurriculumItem } from "@/data/curriculum";
import Image from "next/image";
import { notFound } from "next/navigation";
import NewsSidebar from "@/components/NewsSidebar";

export default function CurriculumDetailPage({
  params,
}: {
  params: { id: string };
}) {
  const item = CurriculumItem.find((i) => i.id === Number(params.id));
  if (!item) return notFound();

  return (
    <section className="pt-16 px-4 max-w-screen-xl mx-auto">
      <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center">
        CHI TIẾT CHƯƠNG TRÌNH
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-[3fr_1fr] gap-10 bg-white p-6 rounded-lg shadow">
        <div>
          <div className="border-b pb-4 mb-4">
            <h1 className="text-2xl font-bold">{item.title}</h1>
            <div className="text-gray-500 mb-1">{item.createAt}</div>
            <p className="text-gray-500">Tác giả: {item.author}</p>
          </div>

          <div className="text-gray-700 whitespace-pre-line my-4">
            {item.content}
          </div>

          {item.image && (
            <div className="relative w-full aspect-video mt-4 rounded overflow-hidden">
              <Image
                src={item.image}
                alt={item.title}
                fill
                className="object-cover"
              />
            </div>
          )}
        </div>

        <div className="space-y-6">
          <NewsSidebar />
        </div>
      </div>
    </section>
  );
}
