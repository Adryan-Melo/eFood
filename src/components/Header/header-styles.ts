import styled from 'styled-components'
import { breakpoints } from '../../global-styles'

export const Headerbar = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 384px;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;

  div {
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
  }

  img {
    margin-top: 64px;

    @media (max-width: ${breakpoints.tablet}) {
      margin-top: 40px;
      margin-bottom: 0;
    }

    @media (max-width: ${breakpoints.mobile}) {
      margin-top: 40px;
      margin-bottom: 0;
    }
  }
`

export const Slogan = styled.h2`
  font-size: 36px;
  margin-bottom: 40px;
  width: 539px;
  height: 84px;
  text-align: center;

  @media (max-width: ${breakpoints.tablet}) {
    width: 100%;
    height: 100%;
    font-size: 28px;
    font-weight: 900;
    line-height: 42.19px;
    margin-top: 138.5px;
    font-size: 28px;
  }

  @media (max-width: ${breakpoints.mobile}) {
    width: 100%;
    height: 100%;
    font-size: 36px;
    font-weight: 900;
    line-height: 42.19px;
    margin-top: 138.5px;
    font-size: 28px;
  }
`
