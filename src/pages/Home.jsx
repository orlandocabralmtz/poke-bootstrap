import { useState, useEffect } from 'react'

const Home = () => {
  const [pokemons, setPokemons] = useState([]) // lista de pokemon
  const [searchTerm, setSearchTerm] = useState('') // palabra a buscar

  useEffect(() => { // el useEffect se ejecuta cuando el componente se monta para hacer una petición a la API
    fetch('https://pokeapi.co/api/v2/pokemon?limit=151') // fetch es una función de JS que hace una petición a una API y devuelve una promesa
      .then(response => response.json()) // response.json() es una función que devuelve una promesa con los datos de la API
      .then(data => { // data es el objeto que devuelve la promesa
        setPokemons(data.results) // setPokemons es una función que actualiza el estado de pokemons
      }).catch(error => console.error(error)) // catch es una función que captura el error en caso de que la promesa falle
  }, []) // se deja el array vacío para que el useEffect se ejecute solo una vez

  const handleSearch = (event) => { // esta función se ejecuta cada vez que se escribe en el input. guarda el valor del input en el estado searchTerm
    setSearchTerm(event.target.value)
  }

  const filteredPokemons = pokemons.filter(pokemon => {
    return pokemon.name.toLowerCase().includes(searchTerm.toLowerCase()) // filter es una función que recorre un array y devuelve un nuevo array con los elementos que cumplan la condición - includes es una función que devuelve true si el string que se le pasa como parámetro está incluido en el string sobre el que se ejecuta la función
  })

  return (
    <div className='container'>
      <h1>Home</h1>

      <form className='form-inline my-2 w-100'>
        <input
          type='text'
          className='form-control'
          placeholder='¿Que Pokemon buscas?'
          id='search'
          value={searchTerm}
          onChange={handleSearch}
        />
      </form>

      <div className='row'>
        {
        filteredPokemons.map(pokemon => ( // map es una función que recorre un array y devuelve un nuevo array
          <div className='col-sm-4 mb-4' key={pokemon.name}>
            <div className='card'>
              <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.url.split('/')[6]}.png`} alt='' /> {/* split es una función que separa un string en un array. */}
              <div className='card-body'>
                <h5 className='card-title'>{pokemon.name}</h5>
              </div>
            </div>
          </div>

        ))
      }
      </div>
    </div>
  )
}
export default Home
