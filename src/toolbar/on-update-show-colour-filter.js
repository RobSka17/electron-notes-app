export function onUpdateShowColourFilter(state, action) {
    const {
        showColourFilter
    } = action.payload

    return {
        ...state,
        showColourFilter
    }
}