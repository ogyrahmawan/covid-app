
export const SET_VICTIMS = 'SET_VICTIMS'


export interface Victims {
    name: string,
    age: number,
    address: string,
    photo: string,
    gender: string,
    location: string
}

interface SetVictimsAction {
    type: typeof SET_VICTIMS
    payload: any
}

export type VictimAction = SetVictimsAction