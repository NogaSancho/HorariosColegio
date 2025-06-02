import React, { useState } from 'react'
import Header from './Header.jsx'
import HorariosForm from './HorariosForm.jsx'
import Footer from './Footer.jsx'

function App() {
  const [selectedColorSemester, setSelectedColorSemester] = useState(null);
  const [selectedGradoActual, setSelectedGradoActual] = useState(null);

  return (
    <>
      <Header />
      <HorariosForm selectedColorSemester={selectedColorSemester} setSelectedColorSemester={setSelectedColorSemester} selectedGradoActual={selectedGradoActual} setSelectedGradoActual={setSelectedGradoActual} />
      <Footer />
    </>
  )
}

export default App
