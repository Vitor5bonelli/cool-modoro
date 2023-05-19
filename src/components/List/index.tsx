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
        <aside>
            <h2>Daily Studies</h2>
            <ul>
                {tarefas.map((item, index) => (
                <li key={index}>
                    <h3>{item.tarefa}</h3>
                    <span>{item.tempo}</span>
                    <p>{item.descricao}</p>
                </li>
                ))}
            </ul>
        </aside>
    )
}