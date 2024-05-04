import { Link, useNavigate } from 'react-router-dom'
import avatar from '../../assets/images/profile.png'
import cart from '../../assets/images/shopping_cart.png'
import Search from './Search'
import { useSelector } from 'react-redux'
import { cartSlice } from '../../redux/features/cartSlice'

const Header = () => {
  const navigate = useNavigate()

  const { cartItems } = useSelector((state) => state.cart)
  // console.log('00--', cartItem.length)
  // console.log('state.cart in header--', cartSlice)

  return (
    <nav className='nav navbar row'>
      <div className='col-12 col-md-3 ps-5'>
        <div className='navbar-brand'>
          <Link to={'/'} className='logo'>
            Noi's Library App
          </Link>
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
          <div
            className='dropdown-menu w-100'
            aria-labelledby='dropdownMenuButton'
          >
            <a className='dropdown-item' href='/admin/dashboard'>
              Dashboard
            </a>
            <a className='dropdown-item' href='/me/orders'>
              Orders
            </a>
            <a className='dropdown-item' href='/me/profile'>
              Profile
            </a>
            <a className='dropdown-item' href='/'>
              Logout
            </a>
          </div>
          <div
            className='dropdown-menu w-100'
            aria-labelledby='dropDownMenuButton'
          >
            <a className='dropdown-item' href='/admin/dashboard'>
              Dashboard{' '}
            </a>

            <a className='dropdown-item' href='/me/orders'>
              {' '}
              Orders{' '}
            </a>

            <a className='dropdown-item' href='/me/profile'>
              {' '}
              Profile{' '}
            </a>

            <a className='dropdown-item text-danger' href='/'>
              {' '}
              Logout{' '}
            </a>
          </div>
        </div>

        <a href='/login' className='btn ms-4 login_btn'>
          {' '}
          Login{' '}
        </a>
      </div>
    </nav>
  )
}

export default Header
