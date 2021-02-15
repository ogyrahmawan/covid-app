import React  from 'react';
import {IonAvatar, IonItem, IonText, IonButton} from '@ionic/react';
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
    <IonItem>
      <IonAvatar>
          <img src="https://gravatar.com/avatar/dba6bae8c566f9d4041fb9cd9ada7741?d=identicon&f=y" />
      </IonAvatar>
      <IonText>
        {user}
      </IonText>
    </IonItem>
    <IonButton
    onClick={() => handleLogout()}
    >
      Logout
    </IonButton>
    </>
  )
}

export default Profile