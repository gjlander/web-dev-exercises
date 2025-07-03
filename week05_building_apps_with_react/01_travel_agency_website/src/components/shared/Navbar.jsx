import { Link, NavLink } from 'react-router';

const Navbar = () => {
  return (
    <div className='navbar bg-base-200 shadow-sm'>
      <div className='flex-1'>
        <Link to='/' className='btn btn-ghost text-xl'>
          daisyUI
        </Link>
      </div>
      <div className='navbar-end'>
        <ul className='menu menu-horizontal items-baseline gap-2'>
          <li>
            <NavLink to='/' className={({ isActive }) => (isActive ? 'menu-active' : '')}>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to='/about' className={({ isActive }) => (isActive ? 'menu-active' : '')}>
              About
            </NavLink>
          </li>
          <li>
            <NavLink to='/destinations' className={({ isActive }) => (isActive ? 'menu-active' : '')}>
              Destinations
            </NavLink>
          </li>
          <li>
            <NavLink to='/contact' className={({ isActive }) => (isActive ? 'menu-active' : '')}>
              Contact
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
