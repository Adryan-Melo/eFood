import { useEffect, useState } from 'react'
import { Navigate, useNavigate } from 'react-router-dom'
import { usePurchaseMutation } from '../../services/api'
import { useDispatch, useSelector } from 'react-redux'
import { RootReducer } from '../../store/store-index'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import { clear } from '../../store/reducers/cart'
import { open } from '../../store/reducers/cart'
import * as S from './checkout-styles'
import { Card } from '../../components/Restaurant/restaurant-styles'
import Button from '../../components/Button/button-index'
import InputMask from 'react-input-mask'
import { getTotalPrice, parseToBrl } from '../../utils/utils-index'


const Checkout = ({ onClose }: { onClose: () => void }) => {
  const [payMethod, setPayMethod] = useState(false)
  const [isOpenCart, setIsOpenCart] = useState(false)
  const navigate = useNavigate()
  const [purchase, { data, isSuccess, isLoading }] = usePurchaseMutation()
  const { items } = useSelector((state: RootReducer) => state.cart)
  const dispatch = useDispatch()

  const form = useFormik({
    initialValues: {
      fullName: '',
      endereco: '',
      cidade: '',
      cep: '',
      numero: '',
      fullComplemento: '',
      cardOwner: '',
      numbCard: '',
      cardCode: '',
      expiresMonth: '',
      expiresYear: ''
    },
    validationSchema: Yup.object({
      fullName: Yup.string()
        .min(5, 'O nome precisa ter pelo menos 5 caracteres')
        .required('O campo é obrigatório'),
      endereco: Yup.string().required('O campo é obrigatório'),
      cidade: Yup.string().required('O campo é obrigatório'),
      cep: Yup.string()
        .length(10, 'O campo precisa ter 10 caracteres')
        .required('O campo é obrigatório'),
      numero: Yup.string().required('O campo é obrigatório'),
      fullComplemento: Yup.string(),

      cardOwner: Yup.string()
        .min(5, 'O nome precisa ter pelo menos 5 caracteres')
        .when((values, schema) =>
          payMethod ? schema.required('O campo é obrigatorio') : schema
        ),
      numbCard: Yup.string().when((values, schema) =>
        payMethod ? schema.required('O campo é obrigatorio') : schema
      ),
      cardCode: Yup.string()
        .max(3, 'São permitidos até 3 dígitos')
        .when((values, schema) =>
          payMethod ? schema.required('O campo é obrigatorio') : schema
        ),
      expiresMonth: Yup.string().when((values, schema) =>
        payMethod ? schema.required('O campo é obrigatorio') : schema
      ),
      expiresYear: Yup.string().when((values, schema) =>
        payMethod ? schema.required('O campo é obrigatorio') : schema
      )
    }),
    onSubmit: (values) => {
      purchase({
        delivery: {
          receiver: values.fullName,
          address: {
            description: values.endereco,
            city: values.cidade,
            zipCode: values.cep,
            number: Number(values.numero),
            complement: values.fullComplemento
          }
        },
        payment: {
          card: {
            name: values.cardOwner,
            number: values.numbCard,
            code: Number(values.cardCode),
            expires: {
              month: Number(values.expiresMonth),
              year: Number(values.expiresYear)
            }
          }
        },
        products: items.map((item) => ({
          id: item.id,
          price: item.preco
        }))
      })
    }
  })


  const checkInputHasError = (fieldName: string) => {
    const isTouched = fieldName in form.touched
    const isInvalid = fieldName in form.errors
    const hasError = isTouched && isInvalid

    return hasError
  }


  const handleContinueToPayment = () => {
    form.setTouched({
      fullName: true,
      endereco: true,
      cidade: true,
      cep: true,
      numero: true,
      cardOwner: true,
      numbCard: true,
      cardCode: true,
      expiresMonth: true,
      expiresYear: true
    })

    const isDeliveryValid =
      !form.errors.fullName &&
      !form.errors.endereco &&
      !form.errors.cidade &&
      !form.errors.cep &&
      !form.errors.numero &&
      form.values.fullName !== '' &&
      form.values.endereco !== '' &&
      form.values.cidade !== '' &&
      form.values.cep !== '' &&
      form.values.numero !== ''

    if (isDeliveryValid) {
      setPayMethod(true)
    }
  }

  
  useEffect(() => {
    if (isSuccess) {
      dispatch(clear())
    }
  }, [isSuccess, dispatch])


  const openCart = () => {
    dispatch(open())
  }

  const handleConclude = () => {
    setIsOpenCart(true)
    onClose()
    navigate('/')
  }

  const handleVoltar = () => {
    setIsOpenCart(true)
    onClose()
    openCart()
  }

  if (items.length === 0 && !isSuccess) {
    return <Navigate to="/" />
  }

  return (
    <S.CheckoutBox>
      {!isOpenCart && isSuccess && data ? (
        <Card>
          <>
            <S.TitleH3>Pedido realizado - {data.orderId} </S.TitleH3>
            <S.Paragrafo>
                Seu pedido está a caminho! 🏍 Estamos finalizando a preparação
                para que chegue fresquinho até você.🍽
            </S.Paragrafo>
            <br />
            <S.Paragrafo>
                Vale lembrar que nossos entregadores não realizam cobranças adicionais.💸
            </S.Paragrafo>
            <br />
            <S.Paragrafo>
                Para sua segurança, sugerimos higienizar as mãos ao receber seu pedido.🧼🤲
            </S.Paragrafo>
            <br />
            <S.Paragrafo>
                Desejamos uma ótima refeição e uma experiência deliciosa. 😋 Bom apetite! 🍴
            </S.Paragrafo>
            <S.TabButton>
              <Button type="button" title="Concluir" onClick={handleConclude}>
                Concluir
              </Button>
            </S.TabButton>
          </>
        </Card>
      ) : (
        <Card>
          <div>
            {!payMethod ? (
              <>
                <S.Row>
                  <S.TitleH3>Entrega</S.TitleH3>
                  <S.InputGroup>
                    <label htmlFor="fullName">Quem irá receber</label>
                    <input
                      type="text"
                      id="fullName"
                      name="fullName"
                      value={form.values.fullName}
                      onChange={form.handleChange}
                      onBlur={form.handleBlur}
                      className={checkInputHasError('fullName') ? 'error' : ''}
                    />
                  </S.InputGroup>
                  <S.InputGroup>
                    <label htmlFor="endereco">Endereço</label>
                    <input
                      type="text"
                      id="endereco"
                      name="endereco"
                      value={form.values.endereco}
                      onChange={form.handleChange}
                      onBlur={form.handleBlur}
                      className={checkInputHasError('endereco') ? 'error' : ''}
                    />
                  </S.InputGroup>
                  <S.InputGroup>
                    <label htmlFor="cidade">Cidade</label>
                    <input
                      type="text"
                      id="cidade"
                      name="cidade"
                      value={form.values.cidade}
                      onChange={form.handleChange}
                      onBlur={form.handleBlur}
                      className={checkInputHasError('cidade') ? 'error' : ''}
                    />
                  </S.InputGroup>
                  <S.InputGroup className="InputFlex">
                    <div>
                      <label htmlFor="cep">CEP</label>
                      <InputMask
                        type="text"
                        id="cep"
                        name="cep"
                        value={form.values.cep}
                        onChange={form.handleChange}
                        onBlur={form.handleBlur}
                        className={checkInputHasError('cep') ? 'error' : ''}
                        mask="99.999-999"
                      />
                    </div>
                    <div>
                      <label htmlFor="numero">Número</label>
                      <input
                        type="number"
                        id="numero"
                        name="numero"
                        value={form.values.numero}
                        onChange={form.handleChange}
                        onBlur={form.handleBlur}
                        className={checkInputHasError('numero') ? 'error' : ''}
                      />
                    </div>
                  </S.InputGroup>
                  <S.InputGroup>
                    <label htmlFor="fullComplemento">
                      Complemento (opcional)
                    </label>
                    <input
                      type="text"
                      id="fullComplemento"
                      name="fullComplemento"
                      value={form.values.fullComplemento}
                      onChange={form.handleChange}
                      onBlur={form.handleBlur}
                      className={
                        checkInputHasError('fullComplemento') ? 'error' : ''
                      }
                    />
                  </S.InputGroup>
                </S.Row>
                <S.TabButton>
                  <Button
                    type="button"
                    title="Continuar com o pagamento"
                    onClick={handleContinueToPayment}
                    disabled={isLoading}
                  >
                    {isLoading
                      ? 'Continuar com ...'
                      : 'Continuar com o pagamento'}
                  </Button>
                  <Button
                    type="button"
                    title="Voltar para o carrinho"
                    onClick={handleVoltar}
                  >
                    Voltar para o carrinho
                  </Button>
                </S.TabButton>
              </>
            ) : (
              <form onSubmit={form.handleSubmit}>
                <>
                  <S.Row>
                    <S.TitleH3>
                      Pagamento - Valor a pagar
                      <span>{parseToBrl(getTotalPrice(items))}</span>
                    </S.TitleH3>
                    <S.InputGroupPaymentBlock>
                      <label htmlFor="cardOwner">Nome no cartão</label>
                      <input
                        type="text"
                        id="cardOwner"
                        name="cardOwner"
                        value={form.values.cardOwner}
                        onChange={form.handleChange}
                        onBlur={form.handleBlur}
                        className={
                          checkInputHasError('cardOwner') ? 'error' : ''
                        }
                      />
                    </S.InputGroupPaymentBlock>
                    <S.InputGroupPaymentFlex className="InputFlexpayment">
                      <div className="InputNumbCard">
                        <label htmlFor="numbCard">Número do cartão</label>
                        <InputMask
                          type="text"
                          id="numbCard"
                          name="numbCard"
                          value={form.values.numbCard}
                          onChange={form.handleChange}
                          onBlur={form.handleBlur}
                          className={
                            checkInputHasError('numbCard') ? 'error' : ''
                          }
                          mask="9999 9999 9999 9999"
                        />
                      </div>
                      <div className="InputCvv">
                        <label htmlFor="cardCode">CVV</label>
                        <input
                          type="text"
                          id="cardCode"
                          name="cardCode"
                          value={form.values.cardCode}
                          onChange={form.handleChange}
                          onBlur={form.handleBlur}
                          className={
                            checkInputHasError('cardCode') ? 'error' : ''
                          }
                          maxLength={3}
                          pattern="\d{1,3}"
                        />
                      </div>
                    </S.InputGroupPaymentFlex>
                    <S.InputGroup className="InputFlex">
                      <div>
                        <label
                          className="Label-margin-top"
                          htmlFor="expiresMonth"
                        >
                          Mês
                        </label>
                        <InputMask
                          type="text"
                          id="expiresMonth"
                          name="expiresMonth"
                          value={form.values.expiresMonth}
                          onChange={form.handleChange}
                          onBlur={form.handleBlur}
                          className={
                            checkInputHasError('expiresMonth') ? 'error' : ''
                          }
                          mask="99"
                        />
                      </div>
                      <div>
                        <label
                          className="Label-margin-top"
                          htmlFor="expiresYear"
                        >
                          Ano
                        </label>
                        <InputMask
                          type="text"
                          id="expiresYear"
                          name="expiresYear"
                          value={form.values.expiresYear}
                          onChange={form.handleChange}
                          onBlur={form.handleBlur}
                          className={
                            checkInputHasError('expiresYear') ? 'error' : ''
                          }
                          mask="9999"
                        />
                      </div>
                    </S.InputGroup>
                  </S.Row>
                  <S.TabButton>
                    <Button
                      type="button"
                      title="Finalizar compra"
                      onClick={form.handleSubmit}
                      disabled={isLoading}
                    >
                      {isLoading
                        ? 'Finalizando compra ...'
                        : 'Finalizar compra'}
                    </Button>
                    <Button
                      type="button"
                      title=""
                      onClick={() => setPayMethod(false)}
                    >
                      Voltar para a edição de endereço
                    </Button>
                  </S.TabButton>
                </>
              </form>
            )}
          </div>
        </Card>
      )}
    </S.CheckoutBox>
  )
}


export default Checkout