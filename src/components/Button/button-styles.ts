import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { cores } from '../../global-styles'
import { Props } from '../Tag/tag-index'

export const ButtonContainer = styled.button<Props>`
  border: 2px solid ${cores.branco};
  color: ${cores.rosa};
  border: none;
  font-size: 14px;
  font-weight: bold;
  padding: 4px;
`
export const ButtonLink = styled(Link)`
  border: 2px solid ${cores.rosa};
  background-color: ${cores.rosa};
  text-decoration: none;
  color: ${cores.bege};
  font-size: 12px;
  font-weight: bold;
  padding: 4px 6px;
  display: inline-block;
  margin-left: 8px;
  margin-bottom: 8px;
`
