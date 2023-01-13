import './button.styles.css';

const Button = ({children})=> {
    return(
        <button className='btn'>{children}</button>
    )
}


export default Button;