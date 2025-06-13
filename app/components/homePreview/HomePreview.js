import Button from "@/app/components/button/Button";

import './homePreview.css';


const HomePreview = () => {
    return(
        <section className="home__preview__container">
            <div className='home__preview'>
                <div className='home__preview__content'>
                    <p className='home__preview__content__text'>
                        Earn money every day!
                    </p>
                    <p className='home__preview__content__text orange__text'>
                        Trade, follow coins, market, watch the best traders! Join us!
                    </p>
                    <div className='button__container'>
                        <Button className='btn__home__preview'>More</Button>
                        <Button className='btn__home__preview'>Demo trading</Button>
                    </div>
                </div>
                <div className='home__img'></div>
            </div>
        </section>
    )
}

export default HomePreview;