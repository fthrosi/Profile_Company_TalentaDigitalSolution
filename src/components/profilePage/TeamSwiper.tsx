import React, { useState, useEffect } from "react";
import cards from "../../data/member.json";

const TeamSwiper: React.FC = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const [slideDirection, setSlideDirection] = useState<"left" | "right" | null>(null);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const itemsPerPage = { xs: 1, sm: 2, md: 3, lg: 4 };
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const getItemsPerPage = () => {
    if (windowWidth < 640) return itemsPerPage.xs;
    if (windowWidth < 768) return itemsPerPage.sm;
    if (windowWidth < 1024) return itemsPerPage.md;
    return itemsPerPage.lg;
  };

  const totalPages = Math.ceil(cards.length / getItemsPerPage());

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
    const currentItemsPerPage = getItemsPerPage();
    const startIndex = currentPage * currentItemsPerPage;
    const endIndex = Math.min(startIndex + currentItemsPerPage, cards.length);
    const pageItems = cards.slice(startIndex, endIndex);
    const paddingCount = currentItemsPerPage - pageItems.length;
    if (paddingCount > 0 && currentPage === totalPages - 1) {
      for (let i = 0; i < paddingCount; i++) {
        pageItems.push({ id: -i - 1, title: "", jabatan: "", content: "", sosmed: [] });
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
    <div className="flex flex-col items-center gap-4 sm:gap-6 w-full mx-auto overflow-hidden">
      <div className="w-full overflow-hidden relative">
        <div
          className="flex justify-center w-full gap-2 sm:gap-4"
          style={{
            transform: isTransitioning
              ? `translateX(${slideDirection === "left" ? "-100%" : "100%"})`
              : "translateX(0)",
            transition: isTransitioning ? "transform 300ms ease-in-out" : "none",
          }}
        >
          {getCurrentPageItems().map((card) => (
            <div
              key={card.id}
              className={`flex flex-col gap-2 p-2 sm:p-3 md:p-4 flex-1 max-w-full sm:max-w-[calc(50%-1rem)] md:max-w-[calc(33.33%-1rem)] lg:max-w-[calc(25%-1rem)] text-center box-border ${card.id < 0 ? "opacity-0" : ""}`}
            >
              <div className="flex items-center justify-center">
                <div className="size-[6rem] sm:size-[8rem] md:size-[10rem] lg:size-[10rem] xl:size-[12rem] 2xl:size-[15rem] rounded-full overflow-hidden flex items-center">
                  <img
                    src={card.foto || "/assets/icons/foto-saya.png"} // Gunakan foto dari JSON atau fallback
                    alt={card.title}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              <h3 className="font-semibold text-blue-950 text-lg sm:text-xl md:text-2xl lg:text-2xl xl:text-3xl 2xl:text-4xl">
                {card.title}
              </h3>
              <h4 className="uppercase text-blue-950 opacity-50 text-sm sm:text-base md:text-lg lg:text-lg xl:text-xl 2xl:text-2xl">
                {card.jabatan}
              </h4>
              <p className="text-[#102B5B] text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl 2xl:text-xl">
                {card.content}
              </p>
              <div className="flex justify-center mt-2 sm:mt-3 md:mt-4 gap-1 sm:gap-2">
                {card.sosmed.map((sosmed, index) => (
                  <a
                    key={index}
                    href={card.linksosmed?.[0]?.[index === 0 ? "instagram" : "linkedin"]} // Ambil link dari linksosmed
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img
                      src={sosmed.assets}
                      alt="social media"
                      className="w-4 sm:w-5 md:w-6 h-4 sm:h-5 md:h-6 bg-cover"
                    />
                  </a>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="flex items-center justify-center w-full gap-2 sm:gap-4">
        <div className="flex gap-1 sm:gap-2">
          {Array.from({ length: totalPages }).map((_, index) => (
            <button
              key={index}
              onClick={() => changePage(index)}
              className={`w-2 sm:w-2.5 h-2 sm:h-2.5 rounded-full cursor-pointer ${
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

export default TeamSwiper;