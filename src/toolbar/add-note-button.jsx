import { ToolbarButton } from './toolbar-button'
import addNoteIcon from '../assets/note_add.svg'
import { addNote } from '../notes/add-note'
import { UseAppContext } from '../App'

export const AddNoteButton = () => {
    const {
        dispatch
    } = UseAppContext()

    function onClick() {
        addNote({
            dispatch
        })
    }

    return (
        <>
            <ToolbarButton props={{
                onClick
            }}>
                <img src={addNoteIcon} />
            </ToolbarButton>
        </>
    )
}