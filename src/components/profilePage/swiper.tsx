import React, { useState, useEffect } from "react";
interface CardProps {
  id: number;
  title: string;
  Jabatan: string;
  content: string;
  sosmed: { assets: string }[];
}
const cards: CardProps[] = [
  { id: 1, title: "Fauzan Azima",Jabatan: "CHIEF TECHNOLOGY OFFICER", content: "Lorem ipsum dolor sit amet consectetur.", sosmed: [
    {
      assets: '/assets/icons/fiverr.png'
    },
    {
      assets:'/assets/icons/GitHub1.png'
    }
  ] },
  { id: 2, title: "Fauzan Azima",Jabatan: "CHIEF TECHNOLOGY OFFICER", content: "Lorem ipsum dolor sit amet consectetur.", sosmed: [
    {
      assets: '/assets/icons/fiverr.png'
    },
    {
      assets:'/assets/icons/GitHub1.png'
    }
  ] },
  { id: 3, title: "Fauzan Azima",Jabatan: "CHIEF TECHNOLOGY OFFICER", content: "Lorem ipsum dolor sit amet consectetur.", sosmed: [
    {
      assets: '/assets/icons/fiverr.png'
    },
    {
      assets:'/assets/icons/GitHub1.png'
    }
  ] },
  { id: 4, title: "Fauzan Azima",Jabatan: "CHIEF TECHNOLOGY OFFICER", content: "Lorem ipsum dolor sit amet consectetur.", sosmed: [
    {
      assets: '/assets/icons/fiverr.png'
    },
    {
      assets:'/assets/icons/GitHub1.png'
    }
  ] },
  { id: 5, title: "Fauzan Azima",Jabatan: "CHIEF TECHNOLOGY OFFICER", content: "Lorem ipsum dolor sit amet consectetur.", sosmed: [
    {
      assets: '/assets/icons/fiverr.png'
    },
    {
      assets:'/assets/icons/GitHub1.png'
    }
  ] },
  { id: 6, title: "Fauzan Azima",Jabatan: "CHIEF TECHNOLOGY OFFICER", content: "Lorem ipsum dolor sit amet consectetur.", sosmed: [
    {
      assets: '/assets/icons/fiverr.png'
    },
    {
      assets:'/assets/icons/GitHub1.png'
    }
  ] },
  { id: 7, title: "Fauzan Azima",Jabatan: "CHIEF TECHNOLOGY OFFICER", content: "Lorem ipsum dolor sit amet consectetur.", sosmed: [
    {
      assets: '/assets/icons/fiverr.png'
    },
    {
      assets:'/assets/icons/GitHub1.png'
    }
  ] },
];
const DotCarousel: React.FC = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const [slideDirection, setSlideDirection] = useState<"left" | "right" | null>(
    null
  );
  const [isTransitioning, setIsTransitioning] = useState(false);
  const itemsPerPage = 4;
  const totalPages = Math.ceil(cards.length / itemsPerPage);
  const changePage = (newPage: number) => {
    if (newPage === currentPage || isTransitioning) return;

    
    const direction = newPage > currentPage ? "left" : "right";
    setSlideDirection(direction);
    setIsTransitioning(true);

    
    setTimeout(() => {
      setCurrentPage(newPage);
      setIsTransitioning(false);
    }, 300); 
  };

  
  const getCurrentPageItems = () => {
    const startIndex = currentPage * itemsPerPage;
    const endIndex = Math.min(startIndex + itemsPerPage, cards.length);
    const pageItems = cards.slice(startIndex, endIndex);
    
    
    const paddingCount = itemsPerPage - pageItems.length;
    if (paddingCount > 0 && currentPage === totalPages - 1) {
      for (let i = 0; i < paddingCount; i++) {
        pageItems.push({ id: -i - 1, title: "",Jabatan:"", content: "", sosmed: [] });
      }
    }
    
    return pageItems;
  };

  useEffect(() => {
    const interval = setInterval(() => {
      changePage((currentPage + 1) % totalPages);
    }, 3000);
    return () => clearInterval(interval);
  }, [currentPage, totalPages]);

  return (
    <div className="flex flex-col items-center gap-4 w-full mx-auto overflow-hidden">
      <div className="w-full overflow-hidden relative">
        <div
          className="flex justify-between w-full gap-4"
          style={{
            transform: isTransitioning
              ? `translateX(${slideDirection === "left" ? "-100%" : "100%"})`
              : "translateX(0)",
            transition: isTransitioning
              ? "transform 300ms ease-in-out"
              : "none",
          }}
        >
          {getCurrentPageItems().map((card) => (
            <div 
              key={card.id} 
              className={`flex flex-col gap-5 p-4 flex-1 max-w-[calc(25%-1rem)] min-w-[calc(25%-1rem)] text-center box-border ${card.id < 0 ? "opacity-0" : ""}`}
            >
              <div className="flex items-center justify-center">
                <div className="2xl:size-[15rem] lg:size-[10rem] rounded-full overflow-hidden flex items-center">
                  <img src="/assets/icons/Pio.jpg" alt="avatar" className="w-full h-full"/>
                </div>
              </div>
              <h3 className="font-semibold text-blue-950 2xl:text-4xl lg:text-2xl">{card.title}</h3>
              <h4 className="text-blue-950 opacity-50 2xl:text-2xl lg:text-lg">{card.Jabatan}</h4>
              <p className="text-[#102B5B] 2xl:text-xl">{card.content}</p>
              <div className="flex justify-center gap-2">
                {card.sosmed.map((sosmed, index) => (
                  <img key={index} src={sosmed.assets} alt="sosmed" className="w-6 h-6"/>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="flex items-center justify-center w-full gap-4">
        <div className="flex gap-2">
          {Array.from({ length: totalPages }).map((_, index) => (
            <button
              key={index}
              onClick={() => changePage(index)}
              className={`w-2.5 h-2.5 rounded-full cursor-pointer ${
                currentPage === index ? "border-2 border-blue-950" : "bg-[#114390] opacity-50"
              } ${isTransitioning ? "opacity-50" : ""}`}
              disabled={isTransitioning}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default DotCarousel;