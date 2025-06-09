import '../../style/globals.css';
import './homeHeader.css';

import Button from "@/app/components/button/Button";

import SearchCoinForm from "@/app/components/searchCoinForm/SearchCoinForm";

const HomeHeader = () => {
    return (
        <header className="home__header">
            <div className="header__logo">BuyCrypto</div>
            <nav className="header__nav__menu">
                <ul className="header__nav__menu__list">
                    <li className="header__nav__menu__list__item">
                        <a href="#" className="header__nav__link">Buy crypto</a>
                    </li>
                    <li className="header__nav__menu__list__item dropdown__container">
                        <a href="#" className="header__nav__link">Market <span className="arrow"></span></a>
                        <ul className="dropdown">
                            <li><a href="#">Spot</a></li>
                            <li><a href="#">Futures</a></li>
                            <li><a href="#">Launchpad</a></li>
                        </ul>
                    </li>
                    <li className="header__nav__menu__list__item dropdown__container">
                        <a href="#" className="header__nav__link">Trade <span className="arrow"></span></a>
                        <ul className="dropdown">
                            <li><a href="#">Spot</a></li>
                            <li><a href="#">Futures</a></li>
                            <li><a href="#">Launchpad</a></li>
                        </ul>
                    </li>
                    <li className="header__nav__menu__list__item header__nav__menuSearch__form">
                        <SearchCoinForm/>
                    </li>
                </ul>
            </nav>
            <nav className="header__profile__nav__menu">
                <ul className="header__profile__nav__menu__list">
                    <li className="header__profile__nav__menu__list__item">
                        <Button>Contribute</Button>
                    </li>
                    <li className="header__profile__nav__menu__list__item">
                        <a href="#" className="header__profile__nav__link">Assets <span className="arrow"></span></a>
                    </li>
                    <li className="header__profile__nav__menu__list__item">
                        <a href="#" className="header__profile__nav__link">Profile</a>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default HomeHeader;