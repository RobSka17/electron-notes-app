import addTimerIcon from '../assets/alarm_add.svg'
import { UseAppContext } from '../App'
import { NoteButton } from '../notes/note-button'
import { Constants } from '../constants'

export const AddTimerNoteButton = ({props}) => {
    const {
        id
    } = props

    const {
        dispatch,
        notes
    } = UseAppContext()

    function onClick() {
        dispatch({
            type: Constants.ReducerKeys.UpdateNote,
            payload: {
                note: notes.find(n => n.id === id).addTimer(0, 0, 5)
            }
        })
    }

    return (
        <>
            <NoteButton props={{
                onClick
            }}>
                <img src={addTimerIcon} />
            </NoteButton>
        </>
    )
}