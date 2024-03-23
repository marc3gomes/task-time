import { ITasks } from '../../types/task';
import style from './List.module.scss'
import Item from "./item";

interface Props {
    tasks: ITasks[],
    selectTask: (taskSelect: ITasks) => void
}

function List({ tasks, selectTask }: Props) {
    return(
        <aside className={style.listaTarefas}>
            <h2>Estudos do dia</h2>
            <ul>
                {tasks.map((item) => (
                    <Item
                        selectTask={selectTask}
                        key={item.id}
                        {...item}
                    />
                ))}
            </ul>
        </aside>
    )
}

export default List