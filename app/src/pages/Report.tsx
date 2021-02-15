import React, { useEffect }  from 'react';
import { IonContent } from '@ionic/react';
import VictimDataCard from '../components/VictimDataCard'
import { useDispatch, useSelector } from 'react-redux';
import { fetchVictimsData } from '../redux/actions/victimAction';
const Report: React.FC = () => {
  const dispatch = useDispatch()
  const victims:any = useSelector(state => state)
  useEffect(() => {
    dispatch(fetchVictimsData())
  }, [dispatch])

  return (
    <div>
        <IonContent fullscreen>
          {
            victims.victim.length > 0 ?
            victims.victim.map((el:any, index:number) => (
              <VictimDataCard key={index} victims={el}></VictimDataCard>
            ))
            :
            <p>Loading</p>
          }
        </IonContent>
    </div>
  )
}

export default Report