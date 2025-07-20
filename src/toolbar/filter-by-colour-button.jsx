import { UseAppContext } from '../App'
import filterByColourIcon from '../assets/layers.svg'
import { Constants } from '../constants'
import { ColourFilter } from './colour-filter'
import { ToolbarButton } from './toolbar-button'

export const FilterByColourButton = () => {
    const {
        dispatch,
        showColourFilter
    } = UseAppContext()

    function onClick() {
        dispatch({
            type: Constants.ReducerKeys.UpdateShowColourFilter,
            payload: {
                showColourFilter: !showColourFilter
            }
        })
    }

    return (
        <>
            <span className={'FilterByColourContainer'}>
                <ToolbarButton props={{
                    onClick
                }}>
                    <img src={filterByColourIcon} />
                </ToolbarButton>
                <ColourFilter />
            </span>
        </>
    )
}