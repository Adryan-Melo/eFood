//Arquivo de configuração do CSS dos cards de restaurante.
import styled from 'styled-components'
import { cores } from '../../global-styles'
import { TagContainer } from '../Tag/tag-styles'

//Configuração CSS do container do card.
export const Card = styled.div`
  border: 1px solid ${cores.rosa};
  position: relative;
  margin-top: 80px;
  background-color: ${cores.RosaFundoClaro};

  img {
    width: 100%;
    object-fit: cover;
    max-height: 217px;
  }
  ${TagContainer} {
    margin-right: 8px;
  }
`

//Configuração CSS do titulo do card.
export const TituloContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 8px;

  div {
    display: flex;
  }
`

export const Titulo = styled.h3`
  font-size: 18px;
  font-weight: bold;
  margin-top: 8px;
  margin-bottom: 16px;
`

//Configuração CSS do descritivo do card.
export const Paragrafo = styled.p`
  font-size: 14px;
  line-height: 22px;
  display: block;
  margin: 16px 8px;
`
export const Infos = styled.div`
  position: absolute;
  top: 16px;
  right: 16px;
`

//Configuração CSS do destaque do card.
export const Estrela = styled.img`
  height: 21px;
  width: 21px;
  margin: 8px;
`
export const TagDestaque = styled.span`
  position: absolute;
  top: 16px;
  right: 90px;
  padding: 8px;
  background-color: ${cores.rosa};
  color: white;
  font-size: 12px;
`
