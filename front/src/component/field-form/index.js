import { useState } from "react";

import "./index.css";
// placeholder
// тут у нас є отримання пропсів placeholder, button, onSubmit
export default function Component({ placeholder, button, onSubmit }) {
  const [value, setValue] = useState(""); //відповідає за значення і нашому полі

  const handleChange = (e) => setValue(e.target.value); //для того щоб задавати значення нашого поля (textarea)

  const handleSubmit = () => {
    if (value.length === 0) return null; // якщо символів в полі не має то функція припиняється

    //якщо значення є то пісдя перевірки передаємо його у функцію onSubmit
    if (onSubmit) {
      onSubmit(value);
    } else {
      throw new Error("onSubmit props on undefined");
    }

    setValue(""); //в кінці очистка поля, щоб не було текста який був введений
  };

  const isDisabled = value.length === 0; //генерується в моменті, для того щоб показати чи кнопка активна чи ні

  return (
    <div className="field-form">
      <textarea
        onChange={handleChange}
        value={value}
        rows={2} //для того щоб textarea мав дві колонки
        placeholder={placeholder}
        className="field-form__field"
      ></textarea>
      <button
        disabled={isDisabled}
        onClick={handleSubmit}
        className="field-form__button"
      >
        {button}
      </button>
    </div>
  );
}
