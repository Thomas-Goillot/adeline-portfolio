import React, { useState, useEffect } from 'react';
import HTMLFlipBook from 'react-pageflip';

const LandscapeBookPortfolio = ({ portfolio }) => {
  const [flipWidth, setFlipWidth] = useState(0);
  const [flipHeight, setFlipHeight] = useState(0);
  const [currentPage, setCurrentPage] = useState(0);
  const totalPages = portfolio.pages.length;

  useEffect(() => {
    function handleResize() {
      if (window.innerWidth >= 1600) {
        setFlipWidth(700);
        setFlipHeight(500);
      } else if (window.innerWidth >= 1200) {
        setFlipWidth(600);
        setFlipHeight(400);
      } else if (window.innerWidth >= 768) {
        setFlipWidth(500);
        setFlipHeight(350);
      } else {
        setFlipWidth(300);
        setFlipHeight(200);
      }
    }
    window.addEventListener('resize', handleResize);
    handleResize();

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const onFlip = (e) => {
    setCurrentPage(e.data);
  };

  const CoverPage = ({ page }) => (
    <div className="w-full h-full flex items-center justify-center bg-cover bg-center" style={{ backgroundImage: `url(${page.image})` }}>
    </div>
  );

  const ContentPage = ({ page }) => (
    <div className="w-full h-full flex items-center justify-center p-8 bg-cover bg-center" style={{
      backgroundImage: `url(${page.image})`,
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat'
    }}>
    </div>
  );

  const BackCoverPage = ({ page }) => (
    <div className="w-full h-full flex items-center justify-center bg-cover bg-center" style={{ backgroundImage: `url(${page.image})` }}>
    </div>
  );

  return (
    <div className="w-full h-full">
          <div className="relative w-full h-full">
            <HTMLFlipBook
              width={flipWidth}
              height={flipHeight}
              size="stretch"
              maxShadowOpacity={0.2}
              showCover={true}
              mobileScrollSupport={true}
              onFlip={onFlip}
              className="shadow-xl"
            >
              {portfolio.pages.map((page, index) => {
                if (index === 0) {
                  return (
                    <div key={index}>
                      <CoverPage page={page} />
                    </div>
                  );
                } else if (index === totalPages - 1) {
                  return (
                    <div key={index}>
                      <BackCoverPage page={page} />
                    </div>
                  );
                } else {
                  return (
                    <div key={index}>
                      <ContentPage page={page} />
                    </div>
                  );
                }
              })}
            </HTMLFlipBook>
          </div>
        </div>
  );
};

export default LandscapeBookPortfolio;
