import { NavLink } from 'react-router-dom' // NavLink es un componente de react-router-dom que se utiliza para crear links en la aplicación. reemplaza a la etiqueta <a> de HTML

const Navbar = () => {
  return (

    <nav className='navbar navbar-expand-sm navbar-light bg-warning d-flex justify-content-between px-4'>
      <NavLink className='navbar-brand' to='#'>Pokédex</NavLink>  {/* to es el atributo que indica a donde va el link. Reemplaza la etiqueta href de HTML */}

      <ul className='navbar-nav mr-auto mt-2 mt-lg-0'>
        <li className='nav-item px-2'>
          <NavLink className='nav-link' to='/'>Home</NavLink>
        </li>
        <li className='nav-item px-2'>
          <NavLink className='nav-link' to='/about'>Acerca de Pokémon</NavLink>
        </li>
      </ul>

    </nav>
  )
}
export default Navbar
