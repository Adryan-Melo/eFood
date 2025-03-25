import { ButtonLink } from '../Button/button-styles'
import { TagContainer } from '../Tag/tag-styles'
import {
  Card,
  Estrela,
  Infos,
  Paragrafo,
  Titulo,
  TituloContainer
} from './restaurant-styles'
import estrela from '../../assets/images/icones/star-icon.png'

type Props = {
  name: string
  nota: number
  description: string
  tipo: string
  image: string
  id: number
  destaque: boolean
}

const Restaurant = ({
  id,
  name,
  nota,
  description,
  tipo,
  image,
  destaque
}: Props) => (
  <Card>
    <img src={image} alt={name} />
    <div>
      <Infos>
        {destaque ? (
          <>
            <TagContainer>Destaque da Semana</TagContainer>
            <TagContainer key={tipo}>{tipo}</TagContainer>
          </>
        ) : (
          <TagContainer>{tipo}</TagContainer>
        )}
      </Infos>
      <TituloContainer>
        <Titulo>{name}</Titulo>
        <div>
          <Titulo>{nota}</Titulo>
          <Estrela src={estrela} alt="" />
        </div>
      </TituloContainer>
      <Paragrafo>{description}</Paragrafo>
      <ButtonLink to={`/restaurant/${id}`}>Saiba mais</ButtonLink>
    </div>
  </Card>
)

//Exportações
export default Restaurant
