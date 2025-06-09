import './button.css';

const Button = ({children, className = '', onClick, type = 'button'}) => {
    return (
        <button
            type={type}
            onClick={onClick}
            className={`btn ${className}`}
        >
            {children}
        </button>
    )
}

export default Button;