import { v4 as uuidv4 } from 'uuid'
import { Constants } from '../constants'

export class NoteObj {
    constructor(params) {
        const {
            id,
            body,
            colour,
            timer
        } = params
        this.id = id ? id : uuidv4()
        this.body = body ? body : Constants.NewNoteBody
        this.colour = colour ? colour : this.getRandomColour()
        this.timer = timer ? timer : undefined
    }

    getRandomColour() {
        const colours = Object.values(Constants.NoteColours)
        const selector = Math.floor(Math.random(0, 1) * colours.length)
        return colours[selector]
    }

    updateNoteBody(noteBody) {
        return new NoteObj({
            id: this.id,
            body: noteBody,
            colour: this.colour,
            timer: this.timer
        })
    }

    addTimer(hours, minutes, seconds) {
        const note = new NoteObj({
            id: this.id,
            body: this.body,
            colour: this.colour,
            
        })
        note.timer = { hours, minutes, seconds }
        return note
    }
}