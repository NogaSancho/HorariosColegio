import materias from './materias.js';

function MateriasSemestre1({ selectedColorSemester, letraFiltro, selectedGradoActual }) {
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

  const materias10 = handleSemesterMaterials(selectedColorSemester, selectedGradoActual);
  // Filtra las materias por la letra correspondiente al semestre seleccionado
  const materiasFiltradas = materias10
    ? materias10.filter(([_, materia]) => materia.letra === letraFiltro || _ === null)
    : [];

  return (materias10 === null || materias10 === undefined) ? (
    <>
      <div className="alert alert-danger" role="alert">
        No hay materias disponibles para el semestre seleccionado.
      </div>
    </>
  ) : (
    <select className="form-select" id="inputGroupSelect01">
      <option defaultValue>Elige la materia...</option>
      {materiasFiltradas.map(([id, materia]) => (
        <option key={id} value={materia.letra}>{materia.nombre}</option>
      ))}
    </select>
  )
}

export default MateriasSemestre1;