import { Constants } from '../constants'
import { NoteObj } from './note-obj'

export function addNote(params) {
    const {
        dispatch
    } = params

    const note = new NoteObj({})

    dispatch({
        type: Constants.ReducerKeys.AddNote,
        payload: {
            note
        }
    })
}