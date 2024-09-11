import { Children } from 'react';
import './button.css'

const Button = ({children, functions }) =>  {

    return(

        <>
            <button onClick={functions} className="style-button">
                {children}
            </button>
        </>
    )
}

export default Button;