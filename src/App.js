import { useState } from "react";

const mockDiscussions = [
  {
    id: 1,
    title: "Tartışma konusu 1",
    author: "Namık Korona",
    timeAgo: "2 gün önce",
  },
  {
    id: 2,
    title: "Tartışma konusu 2",
    author: "Ahmet Kaya",
    timeAgo: "3 gün önce",
  },
];

let count = 0;
// Görevler:
// - Global count değişkeni yerine useState veya useReducer hook'unu kullanarak tartışma numaralarını güvenli şekilde yönetin.
// - Tartışma listesi (Discussions) ve tartışma kartı (Discussion) bileşenlerini modüler hale getirip ayrı dosyalara taşıyın.
// - Mock bir veri seti oluşturarak tartışma kartlarını dinamik hale getirin ve veri tabanından geliyormuş gibi yapı kurun.
// - Hem React temellerine hem de Tailwind CSS yapısına bağlı kalarak bileşenlerinizi geliştirin.
// - Uygulamanın beklenen çıktısını görmek için public klasöründe yer alan preview.png dosyasını inceleyebilirsiniz.

export default function Discussions() {
  const [count, setCount] = useState(0);

  const handleAddDiscussion = () => {
    setCount((pre) => pre + 1);
  };

  return (
    <div className="container mx-auto">
      <button
        className=" px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
        onClick={handleAddDiscussion}
      >
        Yeni tartışma ekle
      </button>
      <ul className="discussions">
        {mockDiscussions.map((discussion) => (
          <Discussion
            key={discussion.id}
            discussion={discussion}
            count={count + 1}
          />
        ))}
      </ul>
    </div>
  );
}

function Discussion({ discussion, count }) {
  return (
    <div className="container mx-auto ">
      <li className="gap-x-6 gap-y-4 py-5 sm:flex-nowrap border-b">
        <div>
          <p className="text-sm font-semibold leading-6 text-gray-900">
            <a href="#" className="hover:underline">
              {discussion.title} (Tartışma #{count})
            </a>
          </p>
          <div className="mt-1 flex items-center gap-x-2 text-xs leading-5 text-gray-500">
            <p>
              <a href="#" className="hover:underline">
                {discussion.author}
              </a>
            </p>
            <svg viewBox="0 0 2 2" className="h-0.5 w-0.5 fill-current">
              <circle cx={1} cy={1} r={1} />
            </svg>
            <p>
              <time>{discussion.timeAgo}</time>
            </p>
          </div>
        </div>
      </li>
    </div>
  );
}
