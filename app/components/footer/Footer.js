import './footer.css';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer__info">
                <div className="footer__socials footer__columns">
                    <div className="footer__logo">ByCoin</div>
                    <div className="footer__socials__img">

                    </div>
                </div>
                <div className="footer__about footer__colums footer__columns">
                    <p>About</p>
                    <div className='footer__aboute_info footer__links'>
                        <a href='#'>About ByCoin</a>
                        <a href='#'>Press Room</a>
                        <a href='#'>ByCoin Community</a>
                        <a href='#'>Careers</a>
                    </div>
                </div>
                <div className="footer__support footer__columns">
                    <p>Support</p>
                    <div className='footer__support_info footer__links'>
                        <a href='#'>Submit a Request</a>
                        <a href='#'>Help Center</a>
                        <a href='#'>User Feedback</a>
                        <a href='#'>ByCoin Learn</a>
                    </div>
                </div>
                <div className="footer__products footer__columns">
                    <p>Products</p>
                    <div className='footer__products_info footer__links'>
                        <a href='#'>Trading</a>
                        <a href='#'>Trading View</a>
                        <a href='#'>Earn</a>
                    </div>
                </div>
            </div>
            <div className="footer__rights">
                <p>© 2018-2025 Bycoin.com. All rights reserved.</p>
            </div>
        </footer>
    )
}

export default Footer;