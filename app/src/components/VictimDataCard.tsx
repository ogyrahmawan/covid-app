import { IonCard, IonItem, IonImg, IonThumbnail, IonButton, IonCardContent, IonLabel, IonText } from '@ionic/react';
import firebase from '../firebase/config'
import 'firebase/storage'
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { deleteReport } from '../redux/actions/victimAction';
import EditModal from '../components/EditModal'
interface victim {
  name: string
  age: number
  address: string
  gender: string
  photo?: string
  location: string
  id: string
}

interface victimProps {
  victims: victim
}

const VictimDataCard: React.FC<victimProps>  = ({victims}) => {
  const dispatch = useDispatch()
  const [photoImage, setPhotoImage] = useState('')
  useEffect(() => {
    downloadImage(victims.photo)
  }, [])
  const downloadImage = (imageName:any) => {
    let storage = firebase.storage();
    let storageRef = storage.ref();
    let gsReference = storage.refFromURL(`gs://covid-app-ogy.appspot.com/images/${imageName}`)   
    storageRef.child(`images/${imageName}`).getDownloadURL()
    .then(url => {
      setPhotoImage(url)
    })
  }
  function handleDelete (id: string) {
    dispatch(deleteReport(id))
  }

  return (
    <IonCard>
      <IonCardContent>
        <IonItem >
          <IonThumbnail slot="start">
            <IonImg src={photoImage} />
          </IonThumbnail>
          <IonItem>
            <IonText  >{victims.name}</IonText  >
          </IonItem>
          <IonText>{`${victims.age} year's old`}</IonText>
        </IonItem>
        <IonItem>
          <IonText>
            {`Address ${victims.address}`}
          </IonText>
        </IonItem>
        <IonItem>
          <IonText>
            {`Gender ${victims.gender}`}
          </IonText>
        </IonItem>
        <IonItem>
          <IonText>
            {`Location ${victims.location}`}
          </IonText>
        </IonItem>
      </IonCardContent>
      <div className="d-flex justify-content-center">
        <EditModal data={victims}></EditModal>
        <IonButton onClick={() => handleDelete(victims.id)}>Delete </IonButton>
      </div>
    </IonCard>
  )
}
export default VictimDataCard