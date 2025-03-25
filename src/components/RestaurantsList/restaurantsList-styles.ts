
import styled from 'styled-components'
import { Props } from './restaurantList-index'
import { breakpoints } from '../../global-styles'


export const Container = styled.section<Omit<Props, 'restaurantes'>>`
  padding: 32px 0;
  margin-bottom: 120px;
`

export const List = styled.ul`
  display: grid;
  grid-template-columns: 1fr 1fr;
  column-gap: 80px;

  @media (max-width: ${breakpoints.tablet}) {
    grid-template-columns: 1fr 1fr;
  }

  @media (max-width: ${breakpoints.mobile}) {
    grid-template-columns: 1fr;
  }
`

export const Title = styled.h2`
  font-size: 18px;
  font-weight: bold;
`
