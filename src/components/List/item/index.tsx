import { ITasks } from '../../../types/task'
import style from './Item.module.scss'

interface Props extends ITasks{
    selectTask: (taskSelect: ITasks) => void
}

export default function Item({ task, time, select, completed, id, selectTask}: Props) {
    return (
        <li className={
            `
                ${style.item}
                ${select ? style.itemSelecionado : ''}
                ${completed ? style.itemCompletado : ''}
            `
        } onClick={() => !completed && selectTask({
            task,
            time,
            select,
            completed,
            id
        })}>
            <h3>{task} </h3>
            <span>{time}</span>
            {completed && <span className={style.concluido} aria-label='Tarefa completada'></span>}
        </li>
    )
}