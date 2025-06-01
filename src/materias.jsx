import materias from './materias.js';

function Materias ({ selectedSemester, letraFiltro }) {
    const handleSemesterMaterials = (colorHorario) => {
        switch (colorHorario) {
            case 'verde':
                return Object.entries(materias.materias10verde1);
            case 'azul':
                return Object.entries(materias.materias10azul1);
            default:
                return null;
        }
    }

    const materias10 = handleSemesterMaterials(selectedSemester);

    // Filtra las materias por la letra correspondiente al semestre seleccionado
    const materiasFiltradas = materias10
        ? materias10.filter(([_, materia]) => materia.letra === letraFiltro)
        : [];

    return materias10 === null ? (
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

export default Materias;