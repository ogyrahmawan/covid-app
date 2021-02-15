import {SET_VICTIMS, Victims, VictimAction} from '../type'

const initialState: Victims[] = []
const victimReducer =  (state = initialState, action: VictimAction) => {
    switch (action.type) {
        case SET_VICTIMS:
            return action.payload          
        default:
            return state
    }
}

export default victimReducer