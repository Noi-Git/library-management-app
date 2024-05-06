import { Link, useNavigate } from 'react-router-dom'
import avatar from '../../assets/images/profile.png'
import cart from '../../assets/images/shopping_cart.png'
import Search from './Search'
import { useSelector } from 'react-redux'
// import { cartSlice } from '../../redux/features/cartSlice'

const Header = () => {
  const navigate = useNavigate()

  const { cartItems } = useSelector((state) => state.cart)

  return (
    <nav className='nav navbar row'>
      <div className='col-12 col-md-3 ps-5'>
        <div className='navbar-brand'>
          <Link to={'/'} className='logo'>
            Noi's Library App
          </Link>{' '}
          <span>
            <Link to={'/'} className='btn-home'>
              Home
            </Link>
          </span>
        </div>
      </div>
      <div className='col-12 col-md-6 mt-2 mt-md-0'>
        <Search />
      </div>
      <div className='col-12 col-md-3 mt-4 mt-md-0 text-center'>
        <a href='/cart' style={{ textDecoration: 'none' }}>
          <span id='cart' className='ms-3'>
            <img className='shopping-cart' src={cart} alt='shopping cart' />
          </span>
          <span className='ms-1' id='cart_count'>
            {cartItems?.length}
          </span>
        </a>

        <div className='ms-4 dropdown'>
          <button
            className='btn dropdown-toggle text-white'
            type='button'
            id='dropDownMenuButton'
            data-toggle='dropdown'
            aria-haspopup='true'
            aria-expanded='false'
          >
            <figure className='avatar avatar-nav'>
              <img src={avatar} alt='User Avatar' className='rounded-circle' />
            </figure>
            <span>User</span>
          </button>
        </div>

        <Link to={'/login'} className='btn ms-4 login-btn'>
          {' '}
          Login{' '}
        </Link>
      </div>
    </nav>
  )
}

export default Header
