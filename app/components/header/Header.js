import './header.css';

const Header = () => {
    return (
        <header className='header'>
            <div className='header__logo'>ByCoin</div>
            <div className='navigate__menu'>
                <div className='menu__element'>Buy Crypto</div>
                <div className='menu__element'>Market</div>
                <div className='menu__element'>Trade</div>
                <div className='menu__element'>Tools</div>
                <div className='menu__element'>Finance</div>
            </div>
        </header>
    )
}

export default Header;