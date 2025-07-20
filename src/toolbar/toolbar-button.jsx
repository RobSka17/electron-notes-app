export const ToolbarButton = ({ props, children }) => {
    const {
        onClick
    } = props

    return (
        <>
            <button onClick={onClick} className={'ToolbarButton'}>{children}</button>
        </>
    )
}