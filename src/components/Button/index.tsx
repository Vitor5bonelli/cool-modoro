import style from './Button.module.scss';

export default function Button({texto}: {texto: string}){
    return(
        <button className={style.botao}>
            {texto}
        </button>
    )
}