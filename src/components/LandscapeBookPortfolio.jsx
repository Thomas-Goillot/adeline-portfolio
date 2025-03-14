import React, { useState, useEffect } from 'react';
import HTMLFlipBook from 'react-pageflip';

const LandscapeBookPortfolio = ({ portfolio }) => {
  const [flipWidth, setFlipWidth] = useState(0);
  const [flipHeight, setFlipHeight] = useState(0);
  const [currentPage, setCurrentPage] = useState(0);
  const totalPages = portfolio.pages.length;

  // 1) Listen to window resize, set width/height based on breakpoints
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
        // Mobile or very narrow
        setFlipWidth(300);
        setFlipHeight(200);
      }
    }
    window.addEventListener('resize', handleResize);
    handleResize();

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // 2) Page flip event
  const onFlip = (e) => {
    setCurrentPage(e.data);
  };

  // 3) Stacks (optional)
  const leftStackCount = currentPage;
  const rightStackCount = totalPages - currentPage - 1;

  const renderStack = (count, side) => {
    const stack = [];
    if (count === 0) return stack;
    for (let i = 0; i < count; i++) {
      const offset = i * 3;
      const style = {
        position: 'absolute',
        width: '10px',
        height: '100%',
        backgroundImage: 'linear-gradient(to right, #f8f8f8, #e8e8e8)',
        boxShadow: '2px 2px 4px rgba(0,0,0,0.2)',
      };
      if (side === 'left') {
        style.left = `-${10 + offset}px`;
      } else {
        style.right = `-${10 + offset}px`;
      }
      stack.push(<div key={i} style={style} />);
    }
    return stack;
  };

  // 4) Page components
  const CoverPage = ({ page }) => (
    <div className="w-full h-full flex items-center justify-center bg-cover bg-center" style={{ backgroundImage: `url(${page.image})` }}>
      {/* Example: <h2 className="text-2xl text-white">{page.title}</h2> */}
    </div>
  );

  const ContentPage = ({ page }) => (
    <div className="w-full h-full flex items-center justify-center p-8 bg-cover bg-center" style={{
      backgroundImage: `url(${page.image})`,
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat'
    }}>
      {/* Example: <p>{page.content}</p> */}
    </div>
  );

  const BackCoverPage = ({ page }) => (
    <div className="w-full h-full flex items-center justify-center bg-cover bg-center" style={{ backgroundImage: `url(${page.image})` }}>
      {/* Example: <h2 className="text-2xl text-white">Back Cover</h2> */}
    </div>
  );

  // 5) Render
  return (
    <div className="w-full h-full">
      <div className="relative">
        <div
          className="absolute inset-0"
          style={{
            background: 'linear-gradient(90deg, #062093 0%, #062093 50%)',
            borderRadius: '8px',
            boxShadow: '2px 2px 4px rgba(0,0,0,0.2)',
          }}
        />
        <div className="relative m-5 bg-dark-blue z-10 rounded" style={{ width: flipWidth * 2, height: flipHeight }}>
          <div className="relative w-full h-full">
            {/* {renderStack(rightStackCount, 'right')} */}
            <HTMLFlipBook
              width={flipWidth}
              height={flipHeight}
              size="fixed"
              maxShadowOpacity={0.2}
              showCover={true}
              mobileScrollSupport={true}
              onFlip={onFlip}
              className="shadow-xl w-full h-full"
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
      </div>
    </div>
  );
};

export default LandscapeBookPortfolio;
