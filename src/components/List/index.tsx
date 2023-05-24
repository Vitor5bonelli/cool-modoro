import {useState} from 'react';
import style from './List.module.scss';
import Item from './item/Item'

export default function List(){

    const [tasks, setTasks] = useState(
        [{
            tarefa: 'React',
            tempo: '02:00:00',
            descricao: 'Components e sla'
        },
        {
            tarefa: 'Java',
            tempo: '01:00:00',
            descricao: 'Banco de dados SQLITE'
        },
        {
            tarefa: 'Python',
            tempo: '06:00:00',
            descricao: 'Webscrapping'
        }] 
    );

    return(
        <aside className={style.listaTarefas}>
            <h2 onClick={() => {
                console.log('cliquei');
                setTasks([... tasks, {tarefa: "Estudar State", tempo:"00:30:00", descricao: "Ver curso alura"}]);
            }}>
            Daily Studies
            </h2>
            <ul>
                {tasks.map((item, index) => (
                    <Item key={index} {... item}/>
                ))}
            </ul>
        </aside>
    )
}


