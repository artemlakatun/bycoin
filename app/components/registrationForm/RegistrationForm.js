import Button from "@/app/components/button/Button";

import './registrationForm.css';

const RegistrationForm = () => {
    return (
        <div className='form__container'>
            <form className='registration__form'>
                <div className='form__login'>
                    <input className='form__login__input input' type='text' placeholder='Email'/>
                    <div className='form__login__text under__input'>
                        Please enter your email address
                    </div>
                </div>
                <div className='form__password'>
                    <input className='form__password__input input' type='text' placeholder='Password'/>
                    <div className='form__password__text under__input'>
                        Please enter your password address
                    </div>
                </div>
                <div className='form__forgot__password'>
                    <span>Forgot password</span>
                </div>
                <Button/>
                <div className='form__social'>
                    <div className='social'></div>
                    <div className='social'></div>
                    <div className='social'></div>
                </div>
            </form>
        </div>
    )
}

export default RegistrationForm;