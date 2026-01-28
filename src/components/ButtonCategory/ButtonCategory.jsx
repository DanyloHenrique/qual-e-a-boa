import s from "./buttonCategory.module.scss";

export function ButtonCategory({ categories = [], active, handleChange }) {

  if (!categories.length) return null;

  return (
    <div className={s.container}>
      {categories.map((category) => {
        const isActive = active === category.value;

        return (
          <button
            key={category.value}
            type="button"
            onClick={() => handleChange(category.value)}
            className={isActive ? s.active : s.button}
          >
            {category.label}
          </button>
        );
      })}
    </div>
  );
}

export default ButtonCategory;

/* 
Teste no App.jsx (baseado no App.jsx fornecido e no vídeo enviado)

import React, { useState } from "react";
import './styles/globalStyle.scss'
import ButtonCategory from "./components/ButtonCategory/ButtonCategory";

function App() {
  const [active, setActive] = useState(1);

  const categories = [
    { label: "Tech", value: 1},
    { label: "Games", value: 2},
    { label: "Geek", value: 3},
  ];

  function handleChange(value) {
    setActive(value);
    console.log("Categoria ativa:", value);
  }

  return (
    <>
      <ButtonCategory 
        categories={categories}
        active={active}
        handleChange={handleChange}
      />
    </>
  )
}

export default App;

*/