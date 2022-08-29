import React, { useState } from "react";

function EnableOnInputChange() {
  const [text, enableButton] = useState("");

  const handleTextChange = (event) => {
    enableButton(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    alert(`El valor de tu estado es: \n 
            texto: ${text}`);
  };

  return (
    <form className="formulario" onSubmit={handleSubmit}>
      <div className="texto">
        <label>Ingresa un texto</label>
        <input
          type="text"
          name="text"
          placeholder="Ingresa un texto"
          onChange={handleTextChange}
          value={text}
        />
      </div>
      <div className="texto2">
        <button className="texto1" type="submit" disabled={!text}>
          Habilitado
        </button>
      </div>
    </form>
  );
}

export default EnableOnInputChange;
