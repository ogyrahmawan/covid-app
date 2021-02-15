import React  from 'react';
import { IonTabs, IonRouterOutlet, IonTabBar, IonTabButton, IonIcon, IonLabel, IonHeader, IonTitle, IonContent } from '@ionic/react';
import { Route, Redirect } from 'react-router';
import {document, add, peopleCircle, personCircle} from 'ionicons/icons';
import { NewReport } from './NewReport';
import Report from './Report';
import Profile from './Profil';

const Home: React.FC = () => {
  return (
    <>
    <IonContent fullscreen>
      <IonTabs>
        <IonRouterOutlet>
          <Route path="/new" component={NewReport}  />
          <Route path="/home" component={Report}  />
          <Route path="/profil" component={Profile}  />
        </IonRouterOutlet>
        <IonTabBar slot="bottom">
          <IonTabButton tab="report" href="/home">
            <IonIcon icon={document} />
            <IonLabel>Report</IonLabel>
          </IonTabButton>
          <IonTabButton tab="add" href="/new">
            <IonIcon icon={add} />
            <IonLabel>New Report</IonLabel>
          </IonTabButton>
          <IonTabButton tab="profil" href="/profil">
            <IonIcon icon={personCircle} />
            <IonLabel>Profile</IonLabel>
          </IonTabButton>
        </IonTabBar>
      </IonTabs>
    </IonContent>
    </>
  );
};

export default Home;