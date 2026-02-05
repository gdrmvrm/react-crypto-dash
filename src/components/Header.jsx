import { Link } from 'react-router';

const Header = () => {
  return (
    <div className='top-nav'>
      <h1>
        <img
          src='/cryptoDash.png'
          alt='Crypto Dash'
          className='crypto-dash-logo'
        />
        Crypto Dash
      </h1>
      <Link to='/'>Home</Link>
      <Link to='/about'>About</Link>
    </div>
  );
};

export default Header;
