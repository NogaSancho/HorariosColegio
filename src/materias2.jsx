import materias from './materias.js';

function MateriasSemestre2({ selectedColorSemester, letraFiltro, selectedGradoActual  }) {
    let materias10 = null;
    const handleSemesterMaterials = (colorHorario, selectedGradoActual) => {
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
    
    materias10 = handleSemesterMaterials(selectedColorSemester, selectedGradoActual);
    // Filtra las materias por la letra correspondiente al semestre seleccionado
    const materiasFiltradas = materias10
        ? materias10.filter(([_, materia]) => materia.letra === letraFiltro || _ === null)
        : [];

    return (materias10 === null) ? (
        <>
            <div className="alert alert-danger" role="alert">
                No hay materias disponibles para el semestre seleccionado.
            </div>
        </>
    ) : (
        <select className="form-select" id="inputGroupSelect01">
            <option defaultValue>Elige la materia...</option>
            {materiasFiltradas.map(([id, materia]) => (
                <option key={id} value={id}>{materia.nombre}</option>
            ))}
        </select>
    )
}

export default MateriasSemestre2;