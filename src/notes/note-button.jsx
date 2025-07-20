export const NoteButton = ({ props, children }) => {
    const {
        onClick
    } = props

    return (
        <>
            <button onClick={onClick} className={'NoteButton'}>{children}</button>
        </>
    )
}