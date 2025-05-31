import materias from './materias.js';

function Materias () {
    const materias11verde = Object.entries(materias.materias10verde1);

    return (
        <select className="form-select" id="inputGroupSelect01">
            <option defaultValue>Elige la materia...</option>
            {materias11verde.map(([id, materia]) => (
                <option key={id} value={materia.area}>{materia.nombre}</option>
            ))}
        </select>
    )
}

export default Materias;