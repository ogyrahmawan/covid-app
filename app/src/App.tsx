import { Redirect, Route } from 'react-router-dom';
import { IonApp, IonRouterOutlet } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import Home from './pages/Home';
import Report from './pages/Report';
import Profile from './pages/Profil';
import firebase from "./firebase/config"

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';
import Login from './pages/Login'
/* Theme variables */
import './theme/variables.css';
import Dashboard from './pages/Dashboard';
import { NewReport } from './pages/NewReport';
import AllData from './components/AllData'

const App: React.FC = () => (
  <IonApp>
    <IonReactRouter>
      <IonRouterOutlet>
        <Route exact path="/" component={Login} />
        <Route exact path="/home" component={Home} />
        <Route exact path="/dashboard" component={Dashboard} />
        <Route path="/report" component={Report} exact />
        <Route path="/profil" component={Profile}  exact />
        <Route path="/new" component={NewReport} exact />
      </IonRouterOutlet>
    </IonReactRouter>
  </IonApp>
);

export default App;
