//Arquivo de configuração do CSS das tags.
import styled from 'styled-components'
import { cores } from '../../global-styles'
import { Props } from './tag-index'

//configuração CSS do container.
export const TagContainer = styled.div<Props>`
  background-color: ${cores.rosa};
  color: ${cores.bege};
  font-size: 12px;
  font-weight: bold;
  padding: 4px 6px;
  display: inline-block;
`
