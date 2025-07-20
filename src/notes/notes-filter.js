export class NotesFilter {
    constructor(params) {
        const {
            colour
        } = params
        this.colour = colour ? colour : []
    }

    addColourFilter(colour) {
        if(this.colour.includes(colour)) return
        let updatedColour = this.colour
        updatedColour.push(colour)
        return new NotesFilter({ colour: updatedColour })
    }

    removeColourFilter(colour) {
        if(!this.colour.includes(colour)) return
        const updatedColour = this.colour.filter(c => c !== colour)
        return new NotesFilter({ colour: updatedColour })
    }

    clearColourFilter() {
        return new NotesFilter({})
    }
}