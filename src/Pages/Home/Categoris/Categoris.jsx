import { useEffect, useState } from "react";

const Categoris = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetch("cetagoris.json")
      .then((res) => res.json())
      .then((data) => setCategories(data))
      .catch((error) => console.error(error));
  }, []);

  return (
    <>
      <ul className="ps-5 bg-white w-full space-y-3 pt-5 pb-3">
        {categories.map((category) => (
          <li key={category.id} className="w-full  bg-white">
            {category.name} <span className="text-black w-3 "></span>
            <hr className="border-x-8 my-4 " />
          </li>
        ))}
      </ul>
    </>
  );
};

export default Categoris;
