import React from 'react';
import HTMLFlipBook from 'react-pageflip';

const BookPortfolio = ({ portfolio }) => {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold text-center mb-6">{portfolio.title}</h1>
      <div className="flex justify-center">
        <HTMLFlipBook 
          width={500} 
          height={650} 
          showCover={true}
          className="shadow-xl"
        >
          {portfolio.pages.map((page, index) => (
            <div 
              key={index} 
              className="page bg-white p-8 flex flex-col justify-center items-center rounded-lg"
            >
              <h2 className="text-2xl font-semibold mb-4">{page.title}</h2>
              <p className="text-base text-gray-700">{page.content}</p>
            </div>
          ))}
        </HTMLFlipBook>
      </div>
    </div>
  );
};

export default BookPortfolio;
