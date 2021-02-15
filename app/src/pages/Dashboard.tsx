import { IonRow, IonCol, IonContent, IonHeader, IonLabel, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import TableData from '../components/Table';
import { fetchAllData } from '../redux/actions/victimAction';


const Dashboard: React.FC = () => {
  const dispatch = useDispatch()
  const data:any = useSelector(state => state)
  useEffect(() => {
    dispatch(fetchAllData())
  },[dispatch])


  return (
    <IonPage>
      <IonContent fullscreen>
        {
          data.victim.length > 0 ?
          <div>
            <TableData ></TableData>
          </div>
          :
          <h1>Loading</h1>
        }
      </IonContent>
    </IonPage>
  );
};

export default Dashboard;
