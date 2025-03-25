import { Restaurante } from '../../pages/Home/home-index'
import Restaurant from '../Restaurant/restaurant-index'
import { Container, List } from './restaurantsList-styles'

export type Props = {
  restaurantes: Restaurante[]
}

const RestaurantsList = ({ restaurantes }: Props) => (
  <Container>
    <div className="container">
      <List>
        {restaurantes.map((restaurante) => (
          <Restaurant
            key={restaurante.id}
            id={restaurante.id}
            nota={restaurante.avaliacao}
            description={restaurante.descricao}
            image={restaurante.capa}
            tipo={restaurante.tipo}
            name={restaurante.titulo}
            destaque={restaurante.destacado}
          />
        ))}
      </List>
    </div>
  </Container>
)

export default RestaurantsList
