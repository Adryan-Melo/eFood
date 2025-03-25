import { useGetHomePageQuery } from '../../services/api'
import Header from '../../components/Header/header-index'
import RestaurantsList from '../../components/RestaurantsList/restaurantList-index'

export type Cardapio = {
  foto: string
  preco: number
  id: number
  nome: string
  descricao: string
  porcao: string
}

export type Restaurante = {
  id: number
  titulo: string
  destacado: boolean
  tipo: string
  avaliacao: number
  descricao: string
  capa: string
  cardapio: Cardapio[]
}

//Arquivo de estruturação da página Home do site, usando o React Router Dom.
const Home = () => {
  const { data: lojas } = useGetHomePageQuery()

  if (lojas) {
    return (
      <>
        <Header />
        <RestaurantsList restaurantes={lojas} />
      </>
    )
  }

  return <h4>Carregando...</h4>
}

//Exportações.
export default Home
