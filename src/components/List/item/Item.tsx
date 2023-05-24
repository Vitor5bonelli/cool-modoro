import style from '../List.module.scss';

interface itemProps {
    tarefa: string;
    tempo: string;
    descricao?: string;
}

export default function Item(props : itemProps){
    return(
        <li className={style.item}>
            <h3>{props.tarefa}</h3>
            <span>{props.tempo}</span>
            <p>{props.descricao}</p>
        </li>
    )
}