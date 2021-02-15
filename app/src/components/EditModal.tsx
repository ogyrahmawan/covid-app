import React, { useState, useEffect } from 'react';
import { IonPage, IonThumbnail, IonImg, IonText, IonButton, IonModal, IonHeader, IonToolbar, IonTitle, IonInput ,IonContent, IonList, IonItem, IonIcon, IonLabel, IonMenuButton } from '@ionic/react';
import firebase from '../firebase/config'
import * as _ from 'lodash'
import { useDispatch } from 'react-redux';
import { editReport } from '../redux/actions/victimAction';
import ('firebase/storage')

interface victim {
    name: string
    age: number
    address: string
    gender: string
    photo?: string
    location: string
    id: string
}
interface DataProp {
    data: victim
}
const EditModal: React.FC<DataProp> = ({data}) => {
  const dispatch = useDispatch()
  const [showModal, setShowModal] = useState(false);
  const [formInput, setFormInput] = useState({
    name: data.name,
    age: data.age,
    address: data.address,
    photo: data.photo, 
    gender: data.gender,
    location: data.location    
  })
  const [photoImage, setPhotoImage] = useState('')
  useEffect(() => {
    downloadImage(data.photo)
  }, [])

  const handleChange = (e: any) => {
    setFormInput({...formInput, [e.target.name]: e.detail.value})
  }
  const downloadImage = (imageName:any) => {
    let storage = firebase.storage();
    let storageRef = storage.ref();
    let gsReference = storage.refFromURL(`gs://covid-app-ogy.appspot.com/images/${imageName}`)   
    storageRef.child(`images/${imageName}`).getDownloadURL()
    .then(url => {
      setPhotoImage(url)
    })
  }

  const handleUpload = (e: any) => {
    setFormInput({...formInput, photo: _.cloneDeep(e.target.files[0].name)})
    let storageRef= firebase.storage().ref(`images/${e.target.files[0].name}`)
    let uploadPhoto = storageRef.put(e.target.files[0])
    // uploadPhoto.on(firebase.storage.TaskEvent.STATE_CHANGED)
  }
  const handleSubmit = (e: any) => {
    e.preventDefault()
    dispatch(editReport(formInput, data.id))
    setShowModal(false)
  }

  return (
      <>
      <IonModal isOpen={showModal}>
      <div>
      <IonItem >
          <IonThumbnail slot="start">
            <IonImg src={photoImage} />
          </IonThumbnail>
          <IonItem>
          <IonLabel>Change Photo</IonLabel>
            <input onChange={handleUpload} type="file"></input>
          </IonItem>
        </IonItem>  
      <form onSubmit={handleSubmit}>
        <IonItem>
        <IonLabel>Name</IonLabel>
        <IonInput onIonChange={handleChange} type="text" value={formInput.name}   name="name"></IonInput>
        </IonItem>
        <IonItem>
        <IonLabel>Age</IonLabel>
          <IonInput onIonChange={handleChange} type="number"  value={formInput.age}  name="age"></IonInput>
        </IonItem>
        <IonItem>
        <IonLabel>address</IonLabel>
          <IonInput onIonChange={handleChange} type="text"  value={formInput.address}  name="address"></IonInput>
        </IonItem>
        <IonItem>
        <IonLabel>Gender</IonLabel>
          <IonInput onIonChange={handleChange} type="text"  value={formInput.gender}  name="gender"></IonInput>
        </IonItem>
        <IonItem>
        <IonLabel>Location</IonLabel>
          <IonInput onIonChange={handleChange} type="text"  value={formInput.location}  name="location"></IonInput>
        </IonItem>
        <IonButton   className="btn-block" style={{marginTop: '100px'}} type="submit">Save</IonButton>
        </form>
        </div>
        <IonButton  onClick={() => setShowModal(false)}>Close Modal</IonButton>
      </IonModal>
      <IonButton onClick={() => setShowModal(true)}>Edit</IonButton>
      </>
  );
};

export default EditModal