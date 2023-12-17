import { useState } from "react";
import Card from "./Cards";
import img1 from "../assets/latest-img1.svg";
import img2 from "../assets/latest-img2.svg";
import img3 from "../assets/latest-img3.svg";
import img4 from "../assets/latest-img4.svg";
import img5 from "../assets/latest-img5.svg";
import img6 from "../assets/latest-img6.svg";
import { ChevronRight } from "lucide-react";
import { ChevronLeft } from "lucide-react";

const pageSize = 3;

const Articles = () => {
  const allItems = [
    {
      id: 1,
      title: "Grilled Tomatoes at Home",
      src: img1,
    },
    {
      id: 2,
      title: "Snacks for Travel",
      src: img2,
    },
    {
      id: 3,
      title: "Post-workout Recipes",
      src: img3,
    },
    {
      id: 4,
      title: "How To Grill Corn",
      src: img4,
    },
    {
      id: 5,
      title: "Crunchwrap Supreme",
      src: img5,
    },
    {
      id: 6,
      title: "Broccoli Cheese Soup",
      src: img6,
    },
  ];

  const [currentPage, setCurrentPage] = useState(1);
  const indexOfLastItem = currentPage * pageSize;
  const indexOfFirstItem = indexOfLastItem - pageSize;
  const currentItems = allItems.slice(indexOfFirstItem, indexOfLastItem);

  const nextPage = () => {
    setCurrentPage(currentPage + 1);
  };

  const prevPage = () => {
    setCurrentPage(currentPage - 1);
  };

  return (
    <div className="px-[6.25rem] pt-[9.88rem]">
      <h1 className="fontSource text-[3.5rem] font-semibold leading-[2.625rem] text-[#0e2368] mb-10 h-[5.25rem]">
        Latest Articles
      </h1>

      <div className="flex gap-10">
        {currentItems.map((item) => (
          <Card title={item.title} url={item.src} key={item.id} />
        ))}
      </div>

      <div className="my-16 flex justify-center gap-3.5">
        <button
          onClick={prevPage}
          disabled={currentPage === 1}
          className="p-[0.06rem] rounded-[0.31rem] border border-[#424961] disabled:opacity-40 disabled:cursor-not-allowed"
        >
          <ChevronLeft />
        </button>
        <p className="text-[#424961] text-[1.375rem] leading-7 fontSource font-normal">
          {currentPage}/{allItems.length / pageSize}
        </p>
        <button
          onClick={nextPage}
          disabled={currentPage === allItems.length / pageSize}
          className="p-[0.06rem] rounded-[0.31rem] border border-[#424961] disabled:opacity-40 disabled:cursor-not-allowed "
        >
          <ChevronRight />
        </button>
      </div>
    </div>
  );
};

export default Articles;
