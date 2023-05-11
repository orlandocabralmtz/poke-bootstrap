import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom' // use params es un hook de react-router-dom que se utiliza para obtener los parámetros de la ruta

const PokemonDetail = () => {
  const { id } = useParams() // useParams devuelve un objeto con los parámetros de la ruta. En este caso, devuelve un objeto con el parámetro id
  const [pokemon, setPokemon] = useState(null) // useContext es un hook de react que se utiliza para acceder al contexto. En este caso, se utiliza para acceder al contexto de pokemon

  useEffect(() => { // el useEffect se ejecuta cuando el componente se monta para hacer una petición a la API
    fetch(`https://pokeapi.co/api/v2/pokemon/${id}`) // fetch es una función de JS que hace una petición a una API y devuelve una promesa
      .then(response => response.json()) // response.json() es una función que devuelve una promesa con los datos de la API
      .then(data => { // data es el objeto que devuelve la promesa
        setPokemon(data) // setPokemons es una función que actualiza el estado de pokemons
      }).catch(error => console.error(error)) // catch es una función que captura el error en caso de que la promesa falle
  }, [id]) // se deja el array vacío para que el useEffect se ejecute solo una vez

  if (!pokemon) {
    return <div>Cargando....</div>
  } // si pokemon es null, se devuelve null (no se renderiza nada
  return (
    <div className='container mt-3'>
      <div className='card'>
        <div className='card-header'>
          <h3>{pokemon.name}</h3>
        </div>
        <div className='card-body'>
          <div className='row'>
            <div className='col-md-4'>
              <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`} alt={pokemon.name} className='img-fluid' />
            </div>
            <div className='col-md-8'>
              <table className='table'>
                <thead>
                  <tr>
                    <th>Stat</th>
                    <th>Value</th>
                  </tr>
                </thead>
                <tbody>
                  {pokemon.stats.map(stat => (
                    <tr key={stat.stat.name}>
                      <td>{stat.stat.name}</td>
                      <td>{stat.base_stat}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
export default PokemonDetail
