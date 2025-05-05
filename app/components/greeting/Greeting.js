import './greeting.css';

const Greeting = () => {
    return (
        <div className='greeting__container'>
            <div className='index__wrapper'>
                <div className='index__banner'>
                    <span className='index__banner__span'>Your Friend Has Invited You to</span>
                    <span className='index__banner__span super__span'>Unlock Exclusive Rewards With Your Friend's Referral</span>
                    <span className='index__banner__span'>Enjoy extra referee-only rewards on top of the $5,050 from standard <br/>
                        signup, for a total of $6,082!</span>
                    <div className='index__banner__image__wrapper'>
                        <div className='index__banner__singUp singUp'>
                            <div className='singUp__container'>
                                <div className='singUp__container__img'>
                                    <img src='/present.png' alt='present'/>
                                </div>
                                <div className='singUp__container__text'>5000 USDT</div>
                            </div>
                            <div className="singUp__container_bottom">
                                Standart SingUp
                            </div>
                        </div>
                        <div className='index__banner_singUp_Exclusive singUp'>
                            <div className='singUp__container'>
                                <div className='singUp__container__img'>
                                    <img src='/gold_present.png' alt='present'/>
                                </div>
                                <div className='singUp__container__text singUp__exclusive'>6000 USDT</div>
                            </div>
                            <div className='singUp__container_bottom singUp__exclusive'>
                                Exclusive Rewards
                            </div>
                        </div>
                    </div>
                </div>
                <div className='index__registrationAndLogin'>
                    <div className='greetAndChange'>
                        <div className='greet__text greet__rows'>
                            <span>Welcome to ByCoin!</span>
                        </div>
                        <div className='changer greet__rows'>
                            <span>Sing Up</span>
                        </div>
                    </div>
                    <div className='form__container'>
                        <form>
                            <div className='form__login'>
                                <input className='form__login__input' type='text' placeholder='Email'/>
                                <div className='form__login__text'>
                                    Please enter your email address
                                </div>
                            </div>
                            <div className='form__password'>
                                <input className='form__password__input' type='text' placeholder='Email'/>
                                <div className='form__password__text'>
                                    Please enter your password address
                                </div>
                            </div>
                            <div className='form__forgot__password'>
                                <span>Forgot password</span>
                            </div>
                            <button className='form__button'>Log In</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Greeting;