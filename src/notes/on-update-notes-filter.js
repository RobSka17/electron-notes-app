export function onUpdateNotesFilter(state, action) {
    const {
        notesFilter
    } = action.payload

    return {
        ...state,
        notesFilter
    }
}