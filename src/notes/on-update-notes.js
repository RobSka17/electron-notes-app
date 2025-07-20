export function onUpdateNotes(state, action) {
    const {
        notes
    } = action.payload

    return {
        ...state,
        notes
    }
}