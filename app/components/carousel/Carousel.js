import './carousel.css';

const Carousel = () => {
    return (
        <section className="carousel__container">
            <div className="carousel__wrapper">
                <div className="carousel__item">
                    <div className="carousel__item__img"></div>
                    <div className="carousel__item__text">Exclusive rewards await you</div>
                </div>
                <div className="carousel__item">
                    <div className="carousel__item__img"></div>
                    <div className="carousel__item__text">Summer airdrop</div>
                </div>
                <div className="carousel__item">
                    <div className="carousel__item__img"></div>
                    <div className="carousel__item__text">The triumph of spread trading</div>
                </div>
                <div className="carousel__item">
                    <div className="carousel__item__img"></div>
                    <div className="carousel__item__text">Exclusive rewards await you</div>
                </div>
                <div className="carousel__item">
                    <div className="carousel__item__img"></div>
                    <div className="carousel__item__text">Open up new trading opportunities</div>
                </div>
                <div className="carousel__item">
                    <div className="carousel__item__img"></div>
                    <div className="carousel__item__text">Enter the world of cryptocurrency with ByCoin</div>
                </div>
            </div>
            <div className='carousel__prog'>
                <div className='prog active'></div>
                <div className='prog'></div>
            </div>
        </section>
    )
}

export default Carousel;