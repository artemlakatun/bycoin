import './header.css';

const Header = () => {
    return (
        <header className='header'>
            <div className='header__logo'>ByCoin</div>
            <nav className='navigate__menu'>
                <ul className='navigate__menu__list'>
                    <li className='navigate__menu__list-item'>
                        <a href="#" className="nav__link">Buy Crypto</a>
                    </li>
                    <li className='navigate__menu__list-item'>
                        <a href="#" className="nav__link">Market</a>
                    </li>
                    <li className='navigate__menu__list-item'>
                        <a href="#" className="nav__link">Trade</a>
                    </li>
                    <li className='navigate__menu__list-item'>
                        <a href="#" className="nav__link">Tools</a>
                    </li>
                    <li className='navigate__menu__list-item'>
                        <a href="#" className="nav__link">Finance</a>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default Header;