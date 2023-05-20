import React from 'react';
import style from './Button.module.scss';

export default function Button({children}: {children:React.ReactNode}){
    return(
        <button className={style.botao}>
            {children}
        </button>
    )
}