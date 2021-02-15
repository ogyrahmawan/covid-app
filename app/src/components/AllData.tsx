import { IonToast, IonContent, IonToolbar, IonHeader, IonTitle} from '@ionic/react';
import {document, personCircle} from 'ionicons/icons'
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import TableData from '../components/Table';
import { fetchAllData } from '../redux/actions/victimAction';
import firebase from '../firebase/config'
import 'firebase/messaging'

const AllData: React.FC = () => {
  const dispatch = useDispatch()
  const data:any = useSelector(state => state)
  const [messages, setMessage] = useState("")
  const [showToast1, setShowToast1] = useState(false);

  useEffect(() => {
    dispatch(fetchAllData())
    receiveNotif()
  },[dispatch])

  useEffect(() => {
    setShowToast1(true)
  }, [messages])

  const receiveNotif = () => {
    const messaging = firebase.messaging()
    messaging.requestPermission().then(token => {
      return messaging.getToken()
    })
    .then(token => {
      console.log("token:", token)
    })
    .catch(err => {
      console.log(err, 'errornya')
    })
    messaging.onMessage((payload) => {
      setMessage(payload.notification.body)
    })
  }

  return (
    <IonHeader>
      <IonToolbar>
        <IonTitle>Covid Victim</IonTitle>
      </IonToolbar>
      <IonContent fullscreen>
        {
          data.victim.length > 0 ?
          <div className="mt-5 ml-3">
            { messages ?
              <IonToast
                position="top"
                isOpen={showToast1}
                onDidDismiss={() => setShowToast1(false)}
                message={messages}
                duration={2000}
              />
              :
              ""
            }
            <TableData ></TableData>
          </div>
          :
          <h1>Loading</h1>
        }
      </IonContent>
    </IonHeader>
  )
};

export default AllData;
