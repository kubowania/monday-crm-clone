import { useNavigate } from 'react-router-dom'
import logo from '../images/crm-logo.png'

const Nav = () => {

  const navigate = useNavigate()

  return (
    <nav>
      <div className="logo-container" onClick={() => navigate('/')}>
        <img src={logo} alt="logo"/>
      </div>
      <div className="controls-container">
        <div className="icon" onClick={() => navigate('/ticket')}>➕</div>
        <div className="icon" onClick={() => navigate('/')}>❮❮</div>
      </div>
    </nav>
  )
}

export default Nav