import {SET_VICTIMS, Victims} from '../type'
import firebase from '../../firebase/config'
import 'firebase/firestore'
const db = firebase.firestore()

export const fetchVictimsData = () => async (dispatch: any) => {
    const snapshot = await db.collection('Victims').where('UserId', '==', localStorage.getItem('user')).get()
    if(snapshot) {
        let data:any = []
        snapshot.forEach(doc => {
            let result = doc.data()
            result.id = doc.id
            data.push(result)
        })
        dispatch({
            type: SET_VICTIMS,
            payload: data
        })
    }
}

export const fetchAllData = () => async (dispatch: any) => {
    const snapshot = await db.collection('Victims').get()
    if(snapshot) {
        let data:any = []
        snapshot.forEach(doc => {
            let result = doc.data()
            result.id = doc.id
            data.push(result)
        })
        dispatch({
            type: SET_VICTIMS,
            payload: data
        })
    }
}
export const addNewReport = (payload: Victims) => (dispatch:any) => {
    const obj: any = {...payload}
    obj.UserId = localStorage.getItem('user')
    db.collection('Victims').add(obj)
    // dispatch(fetchVictimsData())
}

export const editReport = (payload: any, id:string) => (dispatch: any) => {
    db.collection('Victims').doc(id).update(payload)
}
export const deleteReport = (id: string) => (dispatch:any) => {
    console.log('test')
    db.collection('Victims').doc(id).delete()
    .then(res => {
        console.log(res)
    })
}