import React  from 'react';
import {IonAvatar, IonItem, IonText, IonButton, IonHeader, IonToolbar, IonTitle, IonContent} from '@ionic/react';
import { useHistory } from 'react-router';

const Profile: React.FC = () => {
  const history = useHistory()
  const user = localStorage.user
  const handleLogout = () => {
    history.push('/')
    localStorage.clear()
  }
  return (
    <>
    <IonHeader>
      <IonToolbar>
        <IonTitle>Profile</IonTitle>
      </IonToolbar>
    <IonContent fullscreen>
      <IonItem>
        <IonAvatar>
            <img src="https://gravatar.com/avatar/dba6bae8c566f9d4041fb9cd9ada7741?d=identicon&f=y" />
        </IonAvatar>
        {
          user === "+628990277847" ?
          <div>
            <IonItem>
              <IonText>Admin</IonText>
            </IonItem>
            <IonText>
              {user}
            </IonText>
          </div>
            :
          <div>
            <IonItem>
              <IonText>Admin</IonText>
            </IonItem>
            <IonText>
              {user}
            </IonText>
          </div>
        }
      </IonItem>
      <div className="mt-5 d-flex justify-content-center align-items-center">
        <IonButton
        onClick={() => handleLogout()}
        >
          Logout
        </IonButton>
      </div>
    </IonContent>
    </IonHeader>
    </>
  )
}

export default Profile