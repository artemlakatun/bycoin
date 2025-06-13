import '../../style/globals.css';
import './homeHeader.css';

import Button from "@/app/components/button/Button";
import SearchCoinForm from "@/app/components/searchCoinForm/SearchCoinForm";

const HomeHeader = () => {
    return (
        <header className="home__header">
            <div className="header__logo">ByCoin</div>
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
                        <div className="assets__dropdown">
                            <div className="assets__dropdown__item">
                                    <div className='balance'>
                                        <div className='message'><span>asset review</span></div>
                                        <div className="balance__sum">0 USDT</div>
                                    </div>
                            </div>
                            <div className="assets__dropdown__item">
                                <div className='payment'>
                                    <Button className='btn__dropdown__payment'>contribute</Button>
                                    <Button className='btn__dropdown__payment'>withdraw</Button>
                                </div>
                            </div>
                            <div className="assets__dropdown__item">
                                <div className='accounts'>
                                    <div className='item__account'>
                                        <a className='account__link' href='#'>Financing account</a>
                                    </div>
                                    <div className='item__account'>
                                        <a className='account__link' href='#'>Single trading account</a>
                                    </div>
                                </div>
                            </div>
                        </div>
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