import { useContext } from 'react'
import { Button } from 'react-bootstrap'
import Swal from 'sweetalert2'
import { useNavigate } from 'react-router-dom'
import { PokemonesContext } from '../context/PokemonesContext'

const Pokemons = () => {
    const {pokemones, pokemonesSelected, setPokemonesSelected } = useContext (PokemonesContext)
    const navigate = useNavigate()

    const goToPokemonDetails = async () => {
        pokemonesSelected 
        ? navigate (`/pokemons/${pokemonesSelected}`)
        : Swal.fire({
            text: 'You must select a Pokemon',
            icon: 'warning',
            confirmButtonText: 'ok'
          })
    }

    return (
        <div className='mt-5 text-center'>
            <h1>Select your Pokemon</h1>
            <div className='col-5 col-sm-3 col-lg-2 mx-auto'>
                <select
                    value={pokemonesSelected}
                    className="form-select text-center"
                    onChange={({target}) => setPokemonesSelected (target.value)}
                >
                    <option
                        value=""
                        disabled
                    >Pokemons
                    </option>
                    {pokemones.map(({ name }, i) => (
                        <option
                            key={i}
                            value={name}
                        >
                            {name}
                        </option>
                    ))}
                </select>
                <Button
                    onClick={goToPokemonDetails}
                    variant="dark"
                    className='mt-3'
                >
                    Details
                </Button>
            </div>
        </div>
    )
}

export default Pokemons