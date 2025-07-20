export function onUpdateNote(state, action) {
    const {
        note
    } = action.payload

    let updatedNotes = state.notes
    const index = updatedNotes.findIndex(n => n.id === note.id)
    updatedNotes[index] = note

    return {
        ...state,
        notes: updatedNotes
    }
}