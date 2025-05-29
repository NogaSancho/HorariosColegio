import materias from './materias.js';

function Materias () {
    return (
        <select className="form-select" id="inputGroupSelect01">
            <option defaultValue>Elige la materia...</option>
            {materias.map((materia, index) => (
                <option key={index} value={materia.area}>{materia.name}</option>
            ))}
        </select>
    )
}

export default Materias;