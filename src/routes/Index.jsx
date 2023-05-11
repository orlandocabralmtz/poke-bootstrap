import { Routes, Route } from 'react-router-dom'
import Home from '../pages/Home'
import About from '../pages/About'
import PokemonDetail from '../pages/PokemonDetail'

const RoutesIndex = () => {
  return (
    <Routes>
      <Route path='/' element={<Home />} /> {/* el elemento Home se renderiza cuando la ruta es / */}
      <Route path='/about' element={<About />} /> {/* el elemento h1 se renderiza cuando la ruta es /about */}
      <Route path='/pokemon/:id' element={<PokemonDetail />} />
    </Routes>
  )
}
export default RoutesIndex
