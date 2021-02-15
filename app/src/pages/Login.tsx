import { IonContent, IonItem, IonInput, IonPage, IonButton} from '@ionic/react';
import firebase from '../firebase/config'
import 'firebase/auth'
import { useState } from 'react';
import Logo from '../theme/logo.png'
import {useHistory} from 'react-router-dom'

const Login: React.FC = () => {
  const history = useHistory()
  const [phoneNumber, setPhoneNumber] = useState('')
  const handleChange = (e: CustomEvent) => {
    setPhoneNumber(e.detail.value)
  }
  const setUpRecaptcha = () => {
    (window as any).recaptchaVerifier = new firebase.auth.RecaptchaVerifier('sign-in-button', {
      'size': 'invisible',
      'callback': (response: any) => {
        onSignInSubmit();
      }
    });
  }
  const onSignInSubmit = () => {
    setUpRecaptcha()  
    const appVerifier = (window as any).recaptchaVerifier;
    firebase.auth().signInWithPhoneNumber(phoneNumber, appVerifier)
        .then((confirmationResult) => {
          (window as any).confirmationResult = confirmationResult;
          const code: any = window.prompt('type otp');
          confirmationResult.confirm(code).then((result) => {
            const user:any = result.user;
            localStorage.setItem('user', user?.phoneNumber)
            if(user.phoneNumber === '+628990277847') {
              history.push('/dashboard')
            } else {
              history.push('home')
            }
          })
        }).catch((error) => {
          console.log(error)
        });
  }
  return (
    <IonPage>
      <IonContent fullscreen>
        <div className="d-flex justify-content-center">
          <div className="form_card">
            <div className="d-flex justify-content-center">
              <div className="brand_logo_container">
                <img src={Logo} className="brand_logo" alt="Logo" />
              </div>
              <div className="d-flex flex-column">
                <h3 className="text-white">Phone Number</h3>
                <IonItem>
                  <IonInput onIonChange={handleChange} 
                  type="text" 
                  placeholder="Enter Input">
                  </IonInput>
                  <div id="sign-in-button">

                  </div>
                </IonItem>
                  <IonButton 
                  onClick={onSignInSubmit}
                  >
                    Go
                  </IonButton>

              </div>
            </div>
          </div>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Login;
