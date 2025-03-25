import Product from '../Product/product-index'
import { Container, List } from './productslist-styles'
import { Cardapio } from '../../pages/Home/home-index'

export type Props = {
  pratos: Cardapio[]
}

const ProductsList = ({ pratos }: Props) => {
  return (
    <Container>
      <div className="container">
        <List>
          {pratos.map((prato) => (
            <Product
              key={prato.id}
              id={prato.id}
              descricao={prato.descricao}
              nome={prato.nome}
              foto={prato.foto}
              porcao={prato.porcao}
              preco={prato.preco}
            />
          ))}
        </List>
      </div>
    </Container>
  )
}

export default ProductsList
