import React, { ReactEventHandler, useState } from 'react';
import { IonPage, IonButton, IonMenu, IonHeader, IonToolbar, IonTitle, IonInput ,IonContent, IonList, IonItem, IonIcon, IonLabel, IonMenuButton } from '@ionic/react';
import { useDispatch } from 'react-redux';
import { addNewReport } from '../redux/actions/victimAction';
import firebase from '../firebase/config'
import * as _ from 'lodash'
import ('firebase/storage')

export const NewReport: React.FC = () => {
  const dispatch = useDispatch()
  const [formInput, setFormInput] = useState({
    name: '',
    age: 0,
    address: '',
    photo: '', 
    gender: '',
    location: ''    
  })
  const handleChange = (e: any) => {
    setFormInput({...formInput, [e.target.name]: e.detail.value})
  }

  const handleUpload = (e: any) => {
    setFormInput({...formInput, photo: _.cloneDeep(e.target.files[0].name)})
    let storageRef= firebase.storage().ref(`images/${e.target.files[0].name}`)
    let uploadPhoto = storageRef.put(e.target.files[0])
    // uploadPhoto.on(firebase.storage.TaskEvent.STATE_CHANGED)
  }
  const handleSubmit = (e: any) => {
    e.preventDefault()
    dispatch(addNewReport(formInput))
  }
  return (
  <>
  <IonContent fullscreen>
    <div>
      <form onSubmit={handleSubmit}>
        <IonItem>
        <IonLabel>Name</IonLabel>
        <IonInput onIonChange={handleChange} type="text" name="name"></IonInput>
        </IonItem>
        <IonItem>
        <IonLabel>Age</IonLabel>
          <IonInput onIonChange={handleChange} type="number" name="age"></IonInput>
        </IonItem>
        <IonItem>
        <IonLabel>address</IonLabel>
          <IonInput onIonChange={handleChange} type="text" name="address"></IonInput>
        </IonItem>
        <IonItem>
        <IonLabel>Photo</IonLabel>
          <input onChange={handleUpload} type="file"></input>
        </IonItem>
        <IonItem>
        <IonLabel>Gender</IonLabel>
          <IonInput onIonChange={handleChange} type="text" name="gender"></IonInput>
        </IonItem>
        <IonItem>
        <IonLabel>Location</IonLabel>
          <IonInput onIonChange={handleChange} type="text" name="location"></IonInput>
        </IonItem>
        <IonItem>
          <IonButton type="submit">Submit</IonButton>
        </IonItem>
      </form>
    </div>
  </IonContent>
  </>
  )
}