import { Link } from 'react-router-dom'
import { Headerbar, Slogan } from './header-styles'
import effodLogo from '../../assets/images/efood-logo.png'
import background from '../../assets/images/background.png'

const Header = () => (
  <Headerbar style={{ backgroundImage: `url(${background})` }}>
    <div className="container">
      <Link to="/">
        <img src={effodLogo} alt="Efood" />
      </Link>

      <Slogan>Viva experiências gastronômicas no conforto da sua casa</Slogan>
    </div>
  </Headerbar>
)

export default Header
