import materias from './materias.js';
import { aguamarina } from './aguamarina.js';
import { useState, useEffect } from 'react';

function MateriasSemestre1({ selectedColorSemester, letraFiltro, selectedGradoActual }) {
  const [useAguamarina, setUseAguamarina] = useState(false);
  const [currentLetraFiltro, setCurrentLetraFiltro] = useState(letraFiltro);
  const [currentColorSemester, setCurrentColorSemester] = useState(selectedColorSemester);

  useEffect(() => {
    if (useAguamarina) {
      const result = aguamarina(letraFiltro, selectedColorSemester);
      if (result) {
        setCurrentLetraFiltro(result.letraFiltro);
        setCurrentColorSemester(result.colorHorario);
      }
    } else {
      setCurrentLetraFiltro(letraFiltro);
      setCurrentColorSemester(selectedColorSemester);
    }
  }, [useAguamarina, letraFiltro, selectedColorSemester]);

  const handleAguamarinaChange = (event) => {
    setUseAguamarina(event.target.checked);
  }

  const handleSemesterMaterials = (colorHorario, selectedGradoActual) => {
    if (colorHorario === null || colorHorario === undefined) {
      return null;
    }
    switch (selectedGradoActual) {
      case "8":
        return colorHorario === 'verde' ? Object.entries(materias.materias8verde1) : Object.entries(materias.materias8azul1);
      case "9":
        return colorHorario === 'verde' ? Object.entries(materias.materias9verde1) : Object.entries(materias.materias9azul1);
      case "10":
        return colorHorario === 'verde' ? Object.entries(materias.materias10verde1) : Object.entries(materias.materias10azul1);
      case "11":
        return colorHorario === 'verde' ? Object.entries(materias.materias11verde1) : Object.entries(materias.materias11azul1);
      default:
        return null;
    }
  }

  const materias10 = handleSemesterMaterials(currentColorSemester, selectedGradoActual);

  // Filtra las materias por la letra correspondiente al semestre seleccionado
  const materiasFiltradas = materias10
    ? materias10.filter(([_, materia]) => materia.letra === currentLetraFiltro || _ === null)
    : [];

  console.log(`Letra filtro: ${currentLetraFiltro}, colorHorario: ${currentColorSemester}`);

  return (materias10 === null || materias10 === undefined) ? (
    <>
      <div className="alert alert-danger" role="alert">
        No hay materias disponibles para el semestre seleccionado.
      </div>
    </>
  ) : (
    <>
        <div className="col-sm-14">
          <div className="input-group mb-3" id={`materias-${currentLetraFiltro}s`}>
            <label className="input-group-text" htmlFor="inputGroupSelect01">{currentLetraFiltro} style={currentColorSemester == "azul2" ? {backgroundColor: 'blue'} : {backgroundColor: 'green'}}</label>
            <select className="form-select" id="inputGroupSelect01">
              <option defaultValue>Elige la materia...</option>
              {materiasFiltradas.map(([id, materia]) => (
                <option key={id} value={materia.letra}>{materia.nombre}</option>
              ))}
            </select>
            <div className="form-check">
              <input
                className="form-check-input"
                type="checkbox"
                checked={useAguamarina}
                onChange={handleAguamarinaChange}
                id={`checkAguamarinaMateria ${currentLetraFiltro}`}
              />
              <label className="form-check-label" htmlFor={`checkAguamarinaMateria ${currentLetraFiltro}`}>
                Aguamarina
              </label>
            </div>
          </div>
        </div>
    </>
  )
}

export default MateriasSemestre1;