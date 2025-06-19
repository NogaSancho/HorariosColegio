import React, { useState } from 'react'
import Header from './Header.jsx'
import HorariosForm from './HorariosForm.jsx'
import Footer from './Footer.jsx'

function App() {
  const [selectedColorSemester1, setSelectedColorSemester1] = useState(null);
  const [selectedColorSemester2, setSelectedColorSemester2] = useState(null);
  const [selectedGradoActual, setSelectedGradoActual] = useState(null);


  return (
    <>
      <Header />
      <HorariosForm selectedColorSemester1={selectedColorSemester1} setSelectedColorSemester1={setSelectedColorSemester1} selectedColorSemester2={selectedColorSemester2} setSelectedColorSemester2={setSelectedColorSemester2} selectedGradoActual={selectedGradoActual} setSelectedGradoActual={setSelectedGradoActual} />
      <Footer />
    </>
  )
}

export default App
