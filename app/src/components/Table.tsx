import { IonRow, IonCol, IonContent, IonHeader, IonLabel, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchAllData } from '../redux/actions/victimAction';
const TableData: React.FC = () => {
  const dispatch = useDispatch()
  const data:any = useSelector(state => state)
  useEffect(() => {
    dispatch(fetchAllData())
  },[dispatch])
  return (
    <>
    <IonRow className="bg-dark text-white border-dark" >
      <IonCol size="1">
        <IonLabel >No</IonLabel>
      </IonCol>
      <IonCol size="4">
        <IonLabel >Name</IonLabel>
      </IonCol>
      <IonCol size="2">
        <IonLabel >Age</IonLabel>
      </IonCol>
        <IonCol size="2">
        <IonLabel >Gender</IonLabel>
      </IonCol>
      <IonCol size="3">
        <IonLabel >Location</IonLabel>
      </IonCol>
    </IonRow>
    {
      data.victim.map((item:any, index: number) => (
      <IonRow key={index} >
        <IonCol size="1">
          <IonLabel >{index+1}</IonLabel>
        </IonCol>
        <IonCol size="4">
          <IonLabel >{item.name}</IonLabel>
        </IonCol>
        <IonCol size="2">
          <IonLabel >{item.age}</IonLabel>
        </IonCol>
        <IonCol size="2">
          <IonLabel >{item.gender}</IonLabel>
        </IonCol>
        <IonCol size="3">
          <IonLabel >{item.location}</IonLabel>
        </IonCol>
      </IonRow>
      ))
    }
    </>
  )
}
export default TableData