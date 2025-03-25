
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { RootReducer } from '../../store/store-index'
import { Headerbar, Textos, TextCart } from './headerCart.styles'
import effodLogo from '../../assets/images/efood-logo.png'
import background from '../../assets/images/background.png'
import { open } from '../../store/reducers/cart'

const HeaderCart = () => {
  const dispatch = useDispatch()
  const { items } = useSelector((state: RootReducer) => state.cart)

  const openCart = () => {
    dispatch(open())
  }

  return (
    <Headerbar style={{ backgroundImage: `url(${background})` }}>
      <div className="container">

        <Textos to="/">Restaurantes</Textos>

        <Link to="/">
          <img src={effodLogo} alt="Efood" />
        </Link>

        <TextCart onClick={openCart}>
          {items.length} produto(s) no carrinho
        </TextCart>
      </div>
    </Headerbar>
  )
}

//Exportações
export default HeaderCart
