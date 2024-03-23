import style from './Watch.module.scss'

interface Props {
    time: number | undefined
}

export default function Watch({ time  = 0 }: Props){
    const minutes = Math.floor(time / 60)
    const seconds = time % 60
    const [minutesDez, MinutesUnid] = String(minutes).padStart(2, '0')
    const [secondsDez, SecondsUnid] = String(seconds).padStart(2, '0')
    return(
        <>
            <span className={style.relogioNumero}>{minutesDez}</span>
            <span className={style.relogioNumero}>{MinutesUnid}</span>
            <span className={style.relogioDivisao}>:</span>
            <span className={style.relogioNumero}>{secondsDez}</span>
            <span className={style.relogioNumero}>{SecondsUnid}</span>
        </>
    )
}