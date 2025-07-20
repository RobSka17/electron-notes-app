import './App.css'
import { createContext, useContext, useReducer } from 'react'
import { Notes } from './notes/notes'
import { Toolbar } from './toolbar/toolbar'
import { Constants } from './constants'
import { onUpdateNotes } from './notes/on-update-notes'
import { onAddNote } from './notes/on-add-note'
import { onUpdateNotesFilter } from './notes/on-update-notes-filter'
import { onUpdateShowColourFilter } from './toolbar/on-update-show-colour-filter'
import { NotesFilter } from './notes/notes-filter'
import { onUpdateNote } from './notes/on-update-note'

const AppContext = createContext()
export const UseAppContext = () => useContext(AppContext)

function App() {
  const initialState = {
    notes: [],
    notesFilter: new NotesFilter({}),
    showColourFilter: false
  }
  const [state, dispatch] = useReducer(rootReducer, initialState)

  function rootReducer(state, action) {
    const reducerMap = new Map([
      [Constants.ReducerKeys.UpdateNotes, onUpdateNotes],
      [Constants.ReducerKeys.AddNote, onAddNote],
      [Constants.ReducerKeys.UpdateNote, onUpdateNote],
      [Constants.ReducerKeys.UpdateNotesFilter, onUpdateNotesFilter],
      [Constants.ReducerKeys.UpdateShowColourFilter, onUpdateShowColourFilter]
    ])

    const reducer = reducerMap.get(action.type)
    return reducer(state, action)
  }

  return (
    <>
      <AppContext.Provider value={{
        dispatch,
        notes: state.notes,
        notesFilter: state.notesFilter,
        showColourFilter: state.showColourFilter
      }}>
        <div className={'App'}>
          <span className={'AppHeading'}>Sticking It</span>
          <Toolbar />
          <Notes />
        </div>
      </AppContext.Provider>
    </>
  )
}

export default App
