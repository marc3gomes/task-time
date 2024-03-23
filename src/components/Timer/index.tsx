import { useEffect, useState } from "react";
import { ITasks } from "../../types/task";
import Button from "../Button";
import Watch from "./Watch";
import style from './Watch.module.scss'
import { timeToSeconds } from "../../common/utils/time";

interface Props {
    select: ITasks | undefined
    finishTask: () => void
}

export default function Timer({ select, finishTask }: Props){
    const [time, setTime] = useState<number>()

    useEffect(() => {
        if(select?.time) {
            setTime(timeToSeconds(select.time))
        }
    }, [select])

    function regressive(accountant: number = 0){
        setTimeout(() => {
            if(accountant > 0) {
                setTime(accountant - 1)
                return regressive(accountant - 1)
            }
            finishTask()
        }, 1000)
    }
    return(
        <div className={style.cronometro}>
            <p className={style.titulo}>Escolha um Card e inicie o cronômetro</p>
            <div className={style.relogioWrapper}>
                <Watch time={time}/>
            </div>
            <Button onClick={() => regressive(time)}>
                Começar!
            </Button>
        </div>
    )
}