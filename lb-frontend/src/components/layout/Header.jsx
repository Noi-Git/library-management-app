import logo from '../../assets/images/library_logo.png'
import avatar from '../../assets/images/profile.png'
import cart from '../../assets/images/shopping_cart.png'

const Header = () => {
  return (
    <nav className='nav navbar row'>
      <div className='col-12 col-md-3 ps-5'>
        <div className='navbar-brand'>
          <a href='/'>
            <img className='book-logo' src={logo} alt="Noi's library logo" />
          </a>
        </div>
      </div>
      <div className='col-12 col-md-6 mt-2 mt-md-0'>
        <form action='your_search_action_url_here' method='get'>
          <div className='input-group'>
            <input
              type='text'
              id='search_field'
              aria-describedby='search_btn'
              className='form-control'
              placeholder='Search books ...'
              name='keyword'
              value=''
            />
            <button id='search_btn' className='btn' type='submit'>
              <i className='fa fa-search' aria-hidden='true'></i>
            </button>
          </div>
        </form>
      </div>
      <div className='col-12 col-md-3 mt-4 mt-md-0 text-center'>
        <a href='/cart' style={{ textDecoration: 'none' }}>
          <span id='cart' className='ms-3'>
            <img className='shopping-cart' src={cart} alt='shopping cart' />
          </span>
          <span className='ms-1' id='cart_count'>
            0
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
          {/* <div
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
          </div> */}
        </div>

        <a href='/login' className='btn ms-4' id='login_btn'>
          {' '}
          Login{' '}
        </a>
      </div>
    </nav>
  )
}

export default Header
