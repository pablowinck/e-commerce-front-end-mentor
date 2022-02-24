import React from "react";

const data = [
  {
    id: 1,
    name: "Collections",
    to: "/collections",
  },
  {
    id: 2,
    name: "Men",
    to: "/men",
  },
  {
    id: 3,
    name: "Women",
    to: "/women",
  },
  {
    id: 4,
    name: "About",
    to: "/about",
  },
  {
    id: 5,
    name: "Contact",
    to: "/contact",
  },
];

const Menus: React.FC = () => {
  return (
    <div className="flex gap-6">
      {data.map(({ id, name, to }) => (
        <div key={id}>
          <a
            className="text-blue-grayish-dark hover:text-blue-very-vark transition-colors duration-300"
            href={to}
          >
            {name}
          </a>
        </div>
      ))}
    </div>
  );
};

export default Menus;
