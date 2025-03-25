//Arquivo de configuração do CSS do Cabeçalho da página.
import styled from 'styled-components'
import { breakpoints, cores } from '../../global-styles'
import { Link } from 'react-router-dom'

//configuração CSS da barra de fundo.
export const Headerbar = styled.header`
  height: 186px;

  div {
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;

    @media (max-width: ${breakpoints.mobile}) {
      align-items: center;
    }
  }
`
//Configuração CSS do retorno.
export const Textos = styled(Link)`
  color: ${cores.rosa};
  font-size: 18px;
  font-weight: 900;
  text-align: center;
  text-decoration: none;

  @media (max-width: ${breakpoints.tablet}) {
    margin-top: 120px;
  }

  @media (max-width: ${breakpoints.mobile}) {
    margin-top: 120px;
  }
`

//Configuração CSS do carrinho.
export const TextCart = styled.p`
  color: ${cores.rosa};
  font-size: 18px;
  font-weight: bold;
  text-align: center;
  cursor: pointer;

  @media (max-width: ${breakpoints.tablet}) {
    margin-top: 120px;
    font-size: 14px;
  }

  @media (max-width: ${breakpoints.mobile}) {
    margin-top: 120px;
    padding-left: 5%;
    font-size: 14px;
  }
`
