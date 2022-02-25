import React, { useState } from "react";

const data = [
  {
    id: 1,
    img: "/images/image-product-1.jpg",
  },
  {
    id: 2,
    img: "/images/image-product-2.jpg",
  },
  {
    id: 3,
    img: "/images/image-product-3.jpg",
  },
  {
    id: 4,
    img: "/images/image-product-4.jpg",
  },
];

const Images: React.FC = () => {
  const [selected, setSelected] = useState<string>(data[0].img);
  return (
    <div className="w-full h-full flex flex-col gap-6 items-end justify-center">
      <div className="w-72 h-72 rounded-lg overflow-hidden">
        <img src={selected} alt="selected image" />
      </div>
      <div className="w-72 flex gap-4">
        {data.map(({ id, img }) => (
          <div
            onClick={() => setSelected(img)}
            key={id}
            className="cursor-pointer h-14 w-full rounded-lg overflow-hidden hover:brightness-50 transition-all duration-300"
          >
            <img src={img} alt={`img${id}`} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Images;
