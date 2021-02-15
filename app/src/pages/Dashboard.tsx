import { IonLabel, IonTabs, IonRouterContext, IonRouterOutlet, IonTabBar, IonTabButton, IonIcon, IonToast, IonContent,  IonPage} from '@ionic/react';
import {document, personCircle} from 'ionicons/icons'
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import TableData from '../components/Table';
import { fetchAllData } from '../redux/actions/victimAction';
import firebase from '../firebase/config'
import 'firebase/messaging'
import {Route} from 'react-router-dom'
import AllData from '../components/AllData';

import Profile from './Profil'

const Dashboard: React.FC = () => {
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
      <IonContent fullscreen>
      <IonTabs>
        <IonRouterOutlet>
          <Route path="/data" component={AllData}  />
          <Route path="/profil" component={Profile}  />
        </IonRouterOutlet>
        <IonTabBar slot="bottom">
          <IonTabButton tab="data" href="/data">
            <IonIcon icon={document} />
            <IonLabel>Data</IonLabel>
          </IonTabButton>
          <IonTabButton tab="profil" href="/profil">
            <IonIcon icon={personCircle} />
            <IonLabel>Profile</IonLabel>
          </IonTabButton>
        </IonTabBar>
      </IonTabs>
      </IonContent>
  );
};

export default Dashboard;
