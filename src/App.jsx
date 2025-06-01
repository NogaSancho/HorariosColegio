import React, { useState } from 'react'
import Header from './Header.jsx'
import HorariosForm from './HorariosForm.jsx'
import Footer from './Footer.jsx'

function App() {
  const [selectedSemester, setSelectedSemester] = useState(null);

  return (
    <>
      <Header />
      <HorariosForm selectedSemester={selectedSemester} setSelectedSemester={setSelectedSemester} />
      <Footer />
    </>
  )
}

export default App
