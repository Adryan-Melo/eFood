import styled from 'styled-components'
import { breakpoints, cores } from '../../global-styles'


export const Imagem = styled.div`
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  display: block;
  width: 100%;
  height: 280px;
  position: relative;

  &::after {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.3);
    content: '';
  }
`


export const Textos = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  row-gap: 160px;
  padding: 24px 0;
  color: ${cores.branco};
  font-size: 32px;

  span {
    font-size: 32px;
    font-weight: 100;
    z-index: 1;

    @media (max-width: ${breakpoints.tablet}) {
      font-size: 24px;
      margin-left: 20px;
    }

    @media (max-width: ${breakpoints.mobile}) {
      font-size: 24px;
      margin-left: 20px;
    }
  }

  h3 {
    font-size: 32px;
    font-weight: 900;
    z-index: 1;

    @media (max-width: ${breakpoints.tablet}) {
      font-size: 28px;
      margin-left: 20px;
    }

    @media (max-width: ${breakpoints.mobile}) {
      font-size: 28px;
      margin-left: 20px;
    }
  }
`
