export function onAddNote(state, action) {
    const {
        note
    } = action.payload

    const notes = [
        ...state.notes,
        note
    ]

    return {
        ...state,
        notes
    }
}