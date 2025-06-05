import './Bootstrap/css/bootstrap.min.css';
import './Bootstrap/js/bootstrap.bundle.min.js';
import './Bootstrap/js/color-modes.js';
import MateriasSemestre1 from './materias.jsx';
import MateriasSemestre2 from './materias2.jsx';

function HorariosForm({ selectedColorSemester1, setSelectedColorSemester1, selectedColorSemester2, setSelectedColorSemester2, selectedGradoActual, setSelectedGradoActual }) {
  console.log("Color horario semestre 1 seleccionado: "+selectedColorSemester1);
  const handleColorSemester1Change = (event) => {
    const value = event.target.value;
    setSelectedColorSemester1(value);
  }
  console.log("Color horario semestre 2 seleccionado: "+selectedColorSemester2);
  const handleColorSemester2Change = (event) => {
    const value = event.target.value;
    setSelectedColorSemester2(value);
  }

  console.log("Grado actual seleccionado: "+selectedGradoActual);
  const handleGradoActualChange = (event) => {
    const value = event.target.value;
    setSelectedGradoActual(value);
  }

  return (
    <div className="container my-5">
      <div className="bg-body-tertiary p-5 rounded">
        <div className="row justify-content-center">
          <div className="col-md-3" id="Año-Horario">
            <div className="nav-link" style={{ textAlign: "center" }}>Año Horario:
              <div className="input-group mb-3">
                <select className="form-select" id="inputGroupSelectAño">
                  <option defaultValue>Elije el año actual...</option>
                  <option value="2025">2025</option>
                  <option value="2026">2026</option>
                  <option value="2027">2027</option>
                </select>
              </div>
            </div>
          </div>
          <div className="col-md-3" id="Alumno">
            <div className="nav-link" style={{ textAlign: "center" }}>Alumno:
              <div className="input-group mb-3">
                <select className="form-select" id="inputGroupSelectAlumno">
                  <option defaultValue>Elije tu nombre...</option>
                  <option value="Usuario">Usuario</option>
                  <option value="Usuario 2">Usuario 2</option>
                  <option value="Usuario 3">Usuario 3</option>
                </select>
              </div>
            </div>
          </div>
          <div className="col-md-3" id="Grado-Actual">
            <div className="nav-link" style={{ textAlign: "center" }}>Grado Actual:
              <div className="input-group mb-3">
                <select className="form-select" id="inputGroupSelectGrado" value={selectedGradoActual} onChange={handleGradoActualChange}>
                  <option defaultValue>Elije tu Grado Actual...</option>
                  <option value="8">8</option>
                  <option value="9">9</option>
                  <option value="10">10</option>
                  <option value="11">11</option>
                </select>
              </div>
            </div>
          </div>
        </div>

        <div className="row justify-content-center py-4 mx-auto">
          <div className="col-sm-5">
            <h1 className="display-9 fw-normal" style={{ textAlign: "center" }}>Semestre 1</h1>
            <p style={{ textAlign: "center" }}>Horario</p>
            <div className="row" style={{ marginLeft: "38%" }}>
              <div className="col-sm-3">
                <div className="input-group" id="horario-verde">
                  <div className="input-group-text">
                    <input className="form-check-input mt-0" type="radio" name="color" value="verde" onClick={handleColorSemester1Change}
                      aria-label="Radio button for following text input" />
                  </div>
                </div>
                <p>Verde</p>
              </div>

              <div className="col-sm-3">
                <div className="input-group" id="horario-azul">
                  <div className="input-group-text">
                    <input className="form-check-input mt-0" type="radio" name="color" value="azul" onClick={handleColorSemester1Change}
                      aria-label="Radio button for following text input" />
                  </div>
                </div>
                <p>Azul</p>
              </div>
            </div>
            <div className="row">
              <div className="col-sm-14" id="materias-As">
                <div className="input-group mb-3">
                  <label className="input-group-text" htmlFor="inputGroupSelect01">A</label>
                  <MateriasSemestre1 selectedColorSemester={selectedColorSemester1} letraFiltro="A" selectedGradoActual={selectedGradoActual} />
                </div>
              </div>
              <div className="col-sm-14">
                <div className="input-group mb-3" id="materias-Bs">
                  <label className="input-group-text" htmlFor="inputGroupSelect01">B</label>
                  <MateriasSemestre1 selectedColorSemester={selectedColorSemester1} letraFiltro="B" selectedGradoActual={selectedGradoActual} />
                </div>
              </div>
              <div className="col-sm-14">
                <div className="input-group mb-3" id="materias-Cs">
                  <label className="input-group-text" htmlFor="inputGroupSelect01">C</label>
                  <MateriasSemestre1 selectedColorSemester={selectedColorSemester1} letraFiltro="C" selectedGradoActual={selectedGradoActual} />
                </div>
              </div>
              <div className="col-sm-14">
                <div className="input-group mb-3" id="materias-Ds">
                  <label className="input-group-text" htmlFor="inputGroupSelect01">D</label>
                  <MateriasSemestre1 selectedColorSemester={selectedColorSemester1} letraFiltro="D" selectedGradoActual={selectedGradoActual} />
                </div>
              </div>
              <div className="col-sm-14">
                <div className="input-group mb-3" id="materias-Es">
                  <label className="input-group-text" htmlFor="inputGroupSelect01">E</label>
                  <MateriasSemestre1 selectedColorSemester={selectedColorSemester1} letraFiltro="E" selectedGradoActual={selectedGradoActual} />
                </div>
              </div>
              <div className="col-sm-14">
                <div className="input-group mb-3" id="materias-Fs">
                  <label className="input-group-text" htmlFor="inputGroupSelect01">F</label>
                  <MateriasSemestre1 selectedColorSemester={selectedColorSemester1} letraFiltro="F" selectedGradoActual={selectedGradoActual} />
                </div>
              </div>
              <div className="col-sm-14">
                <div className="input-group mb-3" id="materias-Gs">
                  <label className="input-group-text" htmlFor="inputGroupSelect01">G</label>
                  <MateriasSemestre1 selectedColorSemester={selectedColorSemester1} letraFiltro="G" selectedGradoActual={selectedGradoActual} />
                </div>
              </div>
              <div className="col-sm-14">
                <div className="input-group mb-3" id="materias-Hs">
                  <label className="input-group-text" htmlFor="inputGroupSelect01">H</label>
                  <MateriasSemestre1 selectedColorSemester={selectedColorSemester1} letraFiltro="H" selectedGradoActual={selectedGradoActual} />
                </div>
              </div>
              <div className="col-sm-14">
                <div className="input-group mb-3" id="materias-Is">
                  <label className="input-group-text" htmlFor="inputGroupSelect01">I</label>
                  <MateriasSemestre1 selectedColorSemester={selectedColorSemester1} letraFiltro="I" selectedGradoActual={selectedGradoActual} />
                </div>
              </div>
              <div className="col-sm-14">
                <div className="input-group mb-3" id="materias-Js">
                  <label className="input-group-text" htmlFor="inputGroupSelect01">J</label>
                  <MateriasSemestre1 selectedColorSemester={selectedColorSemester1} letraFiltro="J" selectedGradoActual={selectedGradoActual} />
                </div>
              </div>
            </div>
          </div>
          <div className="col-sm-5">
            <h1 className="display-9 fw-normal" style={{ textAlign: "center" }}>Semestre 2</h1>
            <p style={{ textAlign: "center" }}>Horario</p>
            <div className="row" style={{ marginLeft: "38%" }}>
              <div className="col-sm-2">
                <div className="input-group" id="horario-verde">
                  <div className="input-group-text">
                    <input className="form-check-input mt-0" type="radio" name="color2" value="verde2" onClick={handleColorSemester2Change}
                      aria-label="Radio button for following text input" />
                  </div>
                </div>
                <p>Verde</p>
              </div>

              <div className="col-sm-2">
                <div className="input-group" id="horario-azul">
                  <div className="input-group-text">
                    <input className="form-check-input mt-0" type="radio" name="color2" value="azul2" onClick={handleColorSemester2Change}
                      aria-label="Radio button for following text input" />
                  </div>
                </div>
                <p>Azul</p>
              </div>
            </div>
            <div className="row">
              <div className="col-sm-14">
                <div className="input-group mb-3" id="materias-A2s">
                  <label className="input-group-text" htmlFor="inputGroupSelect01">A</label>
                  <MateriasSemestre2 selectedColorSemester={selectedColorSemester2} letraFiltro="A" selectedGradoActual={selectedGradoActual} />
                </div>
              </div>
              <div className="col-sm-14">
                <div className="input-group mb-3" id="materias-B2s">
                  <label className="input-group-text" htmlFor="inputGroupSelect01">B</label>
                  <MateriasSemestre2 selectedColorSemester={selectedColorSemester2} letraFiltro="B" selectedGradoActual={selectedGradoActual} />
                </div>
              </div>
              <div className="col-sm-14">
                <div className="input-group mb-3" id="materias-C2s">
                  <label className="input-group-text" htmlFor="inputGroupSelect01">C</label>
                  <MateriasSemestre2 selectedColorSemester={selectedColorSemester2} letraFiltro="C" selectedGradoActual={selectedGradoActual} />
                </div>
              </div>
              <div className="col-sm-14">
                <div className="input-group mb-3" id="materias-D2s">
                  <label className="input-group-text" htmlFor="inputGroupSelect01">D</label>
                  <MateriasSemestre2 selectedColorSemester={selectedColorSemester2} letraFiltro="D" selectedGradoActual={selectedGradoActual} />
                </div>
              </div>
              <div className="col-sm-14">
                <div className="input-group mb-3" id="materias-E2s">
                  <label className="input-group-text" htmlFor="inputGroupSelect01">E</label>
                  <MateriasSemestre2 selectedColorSemester={selectedColorSemester2} letraFiltro="E" selectedGradoActual={selectedGradoActual} />
                </div>
              </div>
              <div className="col-sm-14">
                <div className="input-group mb-3" id="materias-F2s">
                  <label className="input-group-text" htmlFor="inputGroupSelect01">F</label>
                  <MateriasSemestre2 selectedColorSemester={selectedColorSemester2} letraFiltro="F" selectedGradoActual={selectedGradoActual} />
                </div>
              </div>
              <div className="col-sm-14">
                <div className="input-group mb-3" id="materias-G2s">
                  <label className="input-group-text" htmlFor="inputGroupSelect01">G</label>
                  <MateriasSemestre2 selectedColorSemester={selectedColorSemester2} letraFiltro="G" selectedGradoActual={selectedGradoActual} />
                </div>
              </div>
              <div className="col-sm-14">
                <div className="input-group mb-3" id="materias-H2s">
                  <label className="input-group-text" htmlFor="inputGroupSelect01">H</label>
                  <MateriasSemestre2 selectedColorSemester={selectedColorSemester2} letraFiltro="H" selectedGradoActual={selectedGradoActual} />
                </div>
              </div>
              <div className="col-sm-14">
                <div className="input-group mb-3" id="materias-I2s">
                  <label className="input-group-text" htmlFor="inputGroupSelect01">I</label>
                  <MateriasSemestre2 selectedColorSemester={selectedColorSemester2} letraFiltro="I" selectedGradoActual={selectedGradoActual} />
                </div>
              </div>
              <div className="col-sm-14">
                <div className="input-group mb-3" id="materias-J2s">
                  <label className="input-group-text" htmlFor="inputGroupSelect01">J</label>
                  <MateriasSemestre2 selectedColorSemester={selectedColorSemester2} letraFiltro="J" selectedGradoActual={selectedGradoActual} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HorariosForm;