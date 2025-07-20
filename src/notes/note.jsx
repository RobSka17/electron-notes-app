import { UseAppContext } from '../App'
import { Constants } from '../constants'
import { AddTimerNoteButton } from '../toolbar/add-timer-note-button'

export const Note = ({props}) => {
    const {
        id,
        body,
        colour,
        timer
    } = props

    const {
        dispatch,
        notes
    } = UseAppContext()

    function updateNoteBody(noteBody) {
        dispatch({
            type: Constants.ReducerKeys.UpdateNote,
            payload: {
                note: notes.find(n => n.id === id).updateNoteBody(noteBody)
            }
        })
    }

    if(timer) {
        const formatTimer = () => {
            const {
                hours,
                minutes,
                seconds
            } = timer

            const formatted = {
                hours: hours > 9 ? `${hours}` : `0${hours}`,
                minutes: minutes > 9 ? `${minutes}` : `0${minutes}`,
                seconds: seconds > 9 ? `${seconds}` : `0${seconds}`
            }

            return `Timer: ${formatted.hours}:${formatted.minutes}:${formatted.seconds}`
        }

        return (
        <>
            <div className={`Note ${colour}`}>
                <span className={'NoteButtons'}>
                    <AddTimerNoteButton props={{ id }}/>
                </span>
                <span className={'NoteTimer'}>{formatTimer()}</span>
                <textarea onChange={(e) => updateNoteBody(e.target.value)} value={body}/>
            </div>
        </>
    )
    }

    return (
        <>
            <div className={`Note ${colour}`}>
                <span className={'NoteButtons'}>
                    <AddTimerNoteButton props={{ id }}/>
                </span>
                <textarea onChange={(e) => updateNoteBody(e.target.value)} value={body}/>
            </div>
        </>
    )
}