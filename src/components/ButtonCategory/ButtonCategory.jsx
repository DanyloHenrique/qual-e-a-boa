import { useState } from "react";
import s from "./buttonCategory.module.scss";

export function ButtonCategory({ categories = [] }) {
  const [active, setActive] = useState(categories[0]);

  if (!categories.length) return null;

  return (
    <div className={s.container}>
      {categories.map((label) => {
        const isActive = active === label;

        return (
          <button
            key={label}
            type="button"
            onClick={() => setActive(label)}
            className={isActive ? s.active : s.button}
          >
            {label}
          </button>
        );
      })}
    </div>
  );
}

export default ButtonCategory;

/* 
Teste no App.jsx

import ButtonCategory from "./components/ButtonCategory/ButtonCategory";


function App() {
  const categories = ["Todos", "Games", "Música", "Artes", "Comédia", "Food", "Workshop", "Tech"];
  return(
    <div>
      <p>Renderizado</p>
      <ButtonCategory categories={categories} />
    </div>
  );
  // return <h1>Hello World!</h1>;
}


*/