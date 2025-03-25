import {
  Container,
  Copyright,
  FooterSection,
  Link,
  Links
} from './footer-styles'
import efoodLogo from '../../assets/images/efood-logo.png'
import instagramIcon from '../../assets/images/icones/instagram-icon.png'
import facebookIcon from '../../assets/images/icones/facebook-icon.png'
import twitterIcon from '../../assets/images/icones/twitter-icon.png'

const currentYear = new Date().getFullYear()


const Footer = () => (
  <Container>
    <div className="container">
      <FooterSection>
        <img src={efoodLogo} alt="Efood" />
        <Links>
          <li>
            <Link>
              <img src={instagramIcon} alt="Icone instagram" />
            </Link>
          </li>
          <li>
            <Link>
              <img src={facebookIcon} alt="Icone facebook" />
            </Link>
          </li>
          <li>
            <Link>
              <img src={twitterIcon} alt="Icone twitter" />
            </Link>
          </li>
        </Links>
        <Copyright>
          A efood é uma plataforma para divulgação de estabelecimentos, a
          responsabilidade pela entrega, qualidade dos produtos é toda do
          estabelecimento contratado.
        </Copyright>
      </FooterSection>
    </div>
  </Container>
)


export default Footer
