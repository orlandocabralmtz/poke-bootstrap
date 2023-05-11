
const Navbar = () => {
  return (

    <nav className='navbar navbar-expand-sm navbar-light bg-warning d-flex justify-content-between px-4'>
      <nav className='navbar-brand' to='#'>Pokédex</nav>

      <ul className='navbar-nav mr-auto mt-2 mt-lg-0'>
        <li className='nav-item px-2'>
          <nav className='nav-link' to='/'>Home</nav>
        </li>
        <li className='nav-item px-2'>
          <nav className='nav-link' to='/about'>Acerca de Pokémon</nav>
        </li>
      </ul>

    </nav>
  )
}
export default Navbar
