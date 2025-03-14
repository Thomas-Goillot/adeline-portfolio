import React, { useRef } from 'react';

function HorizontalScrollCarousel({ items }) {
  const scrollRef = useRef(null);

  const scrollLeft = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: -200, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: 200, behavior: 'smooth' });
    }
  };

  return (
    <div className="relative group">
      <button
        onClick={scrollLeft}
        className="absolute left-0 top-1/2 -translate-y-1/2 bg-gray-200/50 p-2 rounded z-10 opacity-0 group-hover:opacity-100 transition-opacity"
      >
        &lt;
      </button>

      <div ref={scrollRef} className="overflow-x-auto">
        <div className="flex space-x-8 py-2">
          {items.map((item, i) => (
            <div
              key={i}
              className="min-w-[80px] flex flex-col items-center text-center"
            >
              <img
                src={item.icon}
                alt={item.name}
                className="w-12 h-12 object-contain mb-2"
              />
              <p className="text-gray-700">{item.name}</p>
            </div>
          ))}
        </div>
      </div>

      <button
        onClick={scrollRight}
        className="absolute right-0 top-1/2 -translate-y-1/2 bg-gray-200/50 p-2 rounded z-10 opacity-0 group-hover:opacity-100 transition-opacity"
      >
        &gt;
      </button>
    </div>
  );
}

export default HorizontalScrollCarousel;
