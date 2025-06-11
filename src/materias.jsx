import materias from './materias.js';

function Materias ({ selectedColorSemester, letraFiltro, selectedGradoActual, semestre }) {
    const handleSemesterMaterials = (colorHorario) => {
        if (selectedGradoActual === "8") {
            switch (semestre) {
                case 1:
                    switch (colorHorario) {
                        case 'verde':
                            return Object.entries(materias.materias8verde1);
                        case 'azul':
                            return Object.entries(materias.materias8azul1);
                        default:
                            return null;
                    }
                case 2:
                    switch (colorHorario) {
                        case 'verde':
                            return Object.entries(materias.materias8verde2);
                        case 'azul':
                            return Object.entries(materias.materias8azul2);
                        default:
                            return null;
                    }
            }
        } else if (selectedGradoActual === "9") {
            switch (semestre) {
                case 1:
                    switch (colorHorario) {
                        case 'verde':
                            return Object.entries(materias.materias9verde1);
                        case 'azul':
                            return Object.entries(materias.materias9azul1);
                        default:
                            return null;
                    }
                case 2:
                    switch (colorHorario) {
                        case 'verde':
                            return Object.entries(materias.materias9verde2);
                        case 'azul':
                            return Object.entries(materias.materias9azul2);
                        default:
                            return null;
                    }
            }
        } else if (selectedGradoActual === "10") {
            switch (semestre) {
                case 1:
                    switch (colorHorario) {
                        case 'verde':
                            return Object.entries(materias.materias10verde1);
                        case 'azul':
                            return Object.entries(materias.materias10azul1);
                        default:
                            return null;
                    }
                case 2:
                    switch (colorHorario) {
                        case 'verde':
                            return Object.entries(materias.materias10verde2);
                        case 'azul':
                            return Object.entries(materias.materias10azul2);
                        default:
                            return null;
                    }
            }
        } else if (selectedGradoActual === "11") {
            switch (semestre) {
                case 1:
                    switch (colorHorario) {
                        case 'verde':
                            return Object.entries(materias.materias11verde1);
                        case 'azul':
                            return Object.entries(materias.materias11azul1);
                        default:
                            return null;
                    }
                case 2:
                    switch (colorHorario) {
                        case 'verde':
                            return Object.entries(materias.materias11verde2);
                        case 'azul':
                            return Object.entries(materias.materias11azul2);
                        default:
                            return null;
                    }
            }
        }
    }

    const materias10 = handleSemesterMaterials(selectedColorSemester);
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
                <option key={id} value={materia.letra}>{materia.nombre}</option>
            ))}
        </select>
    )
}

export default Materias;