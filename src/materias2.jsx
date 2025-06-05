import materias from './materias.js';
import { aguamarina } from './aguamarina.js';
import React, { useState } from 'react';

function MateriasSemestre2({ selectedColorSemester, letraFiltro, selectedGradoActual }) {
  const [aguamarinaSelected, setAguamarinaSelected] = useState(null);
  console.log("Aguamarina semestre 2 check? => ", aguamarinaSelected);
    const handleAguamarinaChange = (event) => {
      const isChecked = event.target.checked;
      setAguamarinaSelected(isChecked);
    }
  const handleSemesterMaterials = (colorHorario, selectedGradoActual) => {
    if (colorHorario === null || colorHorario === undefined) {
      return null;
    }
    switch (selectedGradoActual) {
      case "8":
        return colorHorario === 'verde2' ? Object.entries(materias.materias8verde2) : Object.entries(materias.materias8azul2);
      case "9":
        return colorHorario === 'verde2' ? Object.entries(materias.materias9verde2) : Object.entries(materias.materias9azul2);
      case "10":
        return colorHorario === 'verde2' ? Object.entries(materias.materias10verde2) : Object.entries(materias.materias10azul2);
      case "11":
        return colorHorario === 'verde2' ? Object.entries(materias.materias11verde2) : Object.entries(materias.materias11azul2);
      default:
        return null;
    }
  }

  const materias10 = handleSemesterMaterials(selectedColorSemester, selectedGradoActual);
  // Filtra las materias por la letra correspondiente al semestre seleccionado
  const materiasFiltradas = materias10
    ? materias10.filter(([_, materia]) => materia.letra === letraFiltro || _ === null)
    : [];

    const materiasAguamarina = (aguamarinaSelected) => {
    return materiasFiltradas.map(([_, materia]) => {
      if (aguamarinaSelected) {
        const { newMateria, newColor } = aguamarina(materia, selectedColorSemester);
        return handleSemesterMaterials(newColor, selectedGradoActual);
      }
      return materia;
    });
  };

  const materiasFinal = materiasAguamarina(aguamarinaSelected)

  return (materias10 === null) ? (
    <>
      <div className="alert alert-danger" role="alert">
        No hay materias disponibles para el semestre seleccionado.
      </div>
    </>
  ) : (
    <>
      <select className="form-select" id="inputGroupSelect02">
        <option defaultValue>Elige la materia...</option>
        {materiasFinal.map(([id, materia]) => (
          <option key={id} value={materia.letra}>{materia.nombre}</option>
        ))}
      </select>
      <div className="form-check">
        <input className="form-check-input" type="checkbox" value="aguaSelected" id={`checkAguamarinaMateria ${letraFiltro}`} onClick={handleAguamarinaChange} />
        <label className="form-check-label" htmlFor={`checkAguamarinaMateria ${letraFiltro}`}>
          Aguamarina
        </label>
      </div>
    </>
  )
}

export default MateriasSemestre2;