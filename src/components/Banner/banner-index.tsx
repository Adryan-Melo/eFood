import { useParams } from 'react-router-dom'
import { useGetFeatureEfoodQuery } from '../../services/api'
import { Imagem, Textos } from './banner-styles'


const Banner = () => {
  const { id } = useParams()
  const { data: restaurant, isLoading } = useGetFeatureEfoodQuery(id || '')

  if (!restaurant) {
    return (
      <div className="container">
        <h3>Carregando...</h3>
      </div>
    )
  }

  return (
    <Imagem style={{ backgroundImage: `url(${restaurant?.capa})` }}>
      <Textos className="container">
        <span>{restaurant?.tipo}</span>
        <h3>{restaurant?.titulo}</h3>
      </Textos>
    </Imagem>
  )
}

//Exportações
export default Banner
