import React, { useState } from "react";

const SistemaCobros = () => {
  const [mes, setMes] = useState("");
  const [cuotas, setCuotas] = useState("");
  const [responsablePago, setResponsablePago] = useState("");

  const handleMesChange = (e) => {
    setMes(e.target.value);
  };

  const handleCuotasChange = (e) => {
    setCuotas(e.target.value);
  };

  const handleResponsablePagoChange = (e) => {
    setResponsablePago(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Lógica para registrar el pago

    setMes("");
    setCuotas("");
    setResponsablePago("");
  };

  return (
    <div className="sistema-cobros">
      <h2>Sistema de Cobros</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="mes">Mes:</label>
          <input type="text" id="mes" value={mes} onChange={handleMesChange} />
        </div>
        <div>
          <label htmlFor="cuotas">Cuotas por Mes:</label>
          <input
            type="text"
            id="cuotas"
            value={cuotas}
            onChange={handleCuotasChange}
          />
        </div>
        <div>
          <label htmlFor="responsablePago">Responsable de Pago:</label>
          <input
            type="text"
            id="responsablePago"
            value={responsablePago}
            onChange={handleResponsablePagoChange}
          />
        </div>
        <button type="submit">Registrar</button>
      </form>
    </div>
  );
};

export default SistemaCobros;
