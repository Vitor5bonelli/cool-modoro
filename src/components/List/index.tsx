import style from './List.module.scss';
import Item from './item/Item'

export default function List(){

    const tarefas = [{
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

    return(
        <aside className={style.listaTarefas}>
            <h2>Daily Studies</h2>
            <ul>
                {tarefas.map((item, index) => (
                    <Item key={index} {... item}/>
                ))}
            </ul>
        </aside>
    )
}