import React from 'react'
import { Card } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'

const PokeCard = ({pokemon}) => {
  const { name, stats, src, type } = pokemon

  const navigate = useNavigate()

  const handleClick = () => {
    navigate(`/pokemons`)
  }

  return (
    <>
      <section className='poke-card'>
        <Card style={{ width: '37rem' }}
          className='mt-5 mx-auto text-center shadow-lg  p-3 mb-1 bg-dark rounded text-white'
        >
          <Card.Img
            height="200"
            src={src} />
          <Card.Body>
            <Card.Title className='fw-bold'>{name}</Card.Title>
            <span className='list-unstyled text-start'>
              <Card.Text className='fw-bold text-center'>
                {stats?.map((stat, i) => (
                  <li key={i}>
                    {stat.name}: {stat.base}
                  </li>
                ))}
              </Card.Text>
            </span>
            <Card.Text className='bg-danger text-white p-2 rounded fw-bold text-center text-capitalize mt-3'>
              {type}
            </Card.Text>
          </Card.Body>
        </Card>
        <button
          onClick={handleClick}
          className='btn btn-info btn-m btn-block mt-1'
        >
          {''}
          Back{''}
        </button>
      </section>
    </>
  )
}

export default PokeCard