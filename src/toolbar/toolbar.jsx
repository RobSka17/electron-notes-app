import './toolbar.css'
import { AddNoteButton } from './add-note-button'
import { FilterByColourButton } from './filter-by-colour-button'
import { AddTimerNoteButton } from './add-timer-note-button'

export const Toolbar = () => {
    return (
        <>
            <div className={'Toolbar'}>
                <AddNoteButton />
                <FilterByColourButton />
            </div>
        </>
    )
}