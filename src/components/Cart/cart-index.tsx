import { useDispatch, useSelector } from 'react-redux'
import { RootReducer } from '../../store/store-index'
import { close, remove } from '../../store/reducers/cart'
import { useState } from 'react'
import {
  CartContainer,
  Overlay,
  Sidebar,
  CartItem,
  Prices
} from './cart-styles'
import { getTotalPrice, parseToBrl } from '../../utils/utils-index'
import Button from '../Button/button-index'
import Checkout from '../../pages/Checkout/checkout-index'

const Cart = () => {

  const { isOpen, items } = useSelector((state: RootReducer) => state.cart)
  const dispatch = useDispatch()
  const [showCheckout, setShowCheckout] = useState(false)

  const closeCart = () => {
    dispatch(close())
  }

  const removeItem = (id: number) => {
    dispatch(remove(id))
  }

  const goToCheckout = () => {
    setShowCheckout(true)
  }

  return (
    <>
      <CartContainer className={isOpen ? 'isOpen' : ''}>

        <Overlay onClick={closeCart} />
        <Sidebar>
          {items.length === 0 && (
            <p className="empty-text">
              O carrinho está vazio, adicione pelo menos um produto para
              continuar com a compra
            </p>
          )}
          {!showCheckout && items.length > 0 && (
            <>
              <ul>
                {items.map((item) => (
                  <CartItem key={item.id}>
                    <img src={item.foto} alt={item.nome} />
                    <div>
                      <h3>{item.nome}</h3>
                      <span>{parseToBrl(item.preco)}</span>
                    </div>
                    <button onClick={() => removeItem(item.id)} type="button" />
                  </CartItem>
                ))}
              </ul>
              <Prices>
                Valor Total <span>{parseToBrl(getTotalPrice(items))}</span>
              </Prices>

             <Button 
                onClick={goToCheckout}
                type="button"
                title="Clique aqui para continuar com a compra"> 
             Continuar com a entrega
             </Button>
            </>
          )}
          {showCheckout && <Checkout onClose={() => setShowCheckout(false)} />}
        </Sidebar>
      </CartContainer>
    </>
  )
}

export default Cart
