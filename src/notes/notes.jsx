import './notes.css'
import { Note } from './note'
import { UseAppContext } from '../App'
import { Constants } from '../constants'

export const Notes = () => {
    const {
        notes,
        notesFilter
    } = UseAppContext()

    const filterNotes = () => {
        let filteredNotes = notes
        filteredNotes = filterByColour(notes)
        return filteredNotes
    }

    const filterByColour = (notes) => {
        if(notesFilter.colour.length < 1) return notes
        return notes.filter(n => notesFilter.colour.includes(n.colour))
    }

    const filteredNotes = filterNotes()

    if(!notes) return (<></>)

    if(Object.keys(notesFilter).length > 0) return (
        <>
            <div className={'Notes'}>
                {   
                    filteredNotes.length > 0 ?
                        filteredNotes.map((n, i) => {
                            return (
                                <Note key={`note-${i}`} props={{
                                    id: n.id,
                                    body: n.body,
                                    colour: n.colour,
                                    timer: n.timer
                                }}/>
                            )
                        }) :
                        <NoNotesToShowMessage />
                }
            </div>
        </>
    )

    return (
        <>
            <div className={'Notes'}>
                {
                    notes.length > 0 ?
                        notes.map((n, i) => {
                            return (
                                <Note key={`note-${i}`} props={{
                                    id: n.id,
                                    body: n.body,
                                    colour: n.colour
                                }}/>
                            )
                        }) :
                        <NoNotesToShowMessage />
                }
            </div>
        </>
    )
}

const NoNotesToShowMessage = () => {
    return (
        <>
            <span>{Constants.NoNotes}</span>
        </>
    )
}