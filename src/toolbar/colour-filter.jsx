import { UseAppContext } from '../App'
import { Constants } from '../constants'
import cancelIcon from '../assets/cancel.svg'

export const ColourFilter = () => {
    const {
        showColourFilter
    } = UseAppContext()

    if(!showColourFilter) return (<></>)

    return (
        <>
            <span className={'ColourFilter'}>
                <ColourFilterCancelButton />
                {
                    Object.values(Constants.NoteColours).map((c) => {
                        return (
                            <ColourFilterButton key={`colour-filter-button-${c}`} props={{
                                colour: c
                            }} />
                        )
                    })
                }
            </span>
        </>
    )
}

const ColourFilterButton = ({props}) => {
    const {
        colour
    } = props

    const {
        dispatch,
        notesFilter
    } = UseAppContext()

    function onClick() {
        notesFilter.colour.includes(colour) ?
            removeColourFromFilter() :
            addColourToFilter()
    }

    function addColourToFilter() {
        dispatch({
            type: Constants.ReducerKeys.UpdateNotesFilter,
            payload: {
                notesFilter: notesFilter.addColourFilter(colour)
            }
        })
    }

    function removeColourFromFilter() {
        dispatch({
            type: Constants.ReducerKeys.UpdateNotesFilter,
            payload: {
                notesFilter: notesFilter.removeColourFilter(colour)
            }
        })
    }

    return (
        <>
            <span onClick={onClick} className={`ColourFilterOption ${colour}`} />
        </>
    )
}

const ColourFilterCancelButton = () => {
    const {
        dispatch,
        notesFilter
    } = UseAppContext()

    function onClick() {
        dispatch({
            type: Constants.ReducerKeys.UpdateNotesFilter,
            payload: {
                notesFilter: notesFilter.clearColourFilter()
            }
        })
    }

    return (
        <>
            <span onClick={onClick} className={`ColourFilterOption`}>
                <img src={cancelIcon} />
            </span>
        </>
    )
}