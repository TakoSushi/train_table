import { nanoid } from 'nanoid';
import './App.css'
import { TrainCharacteristics } from './components/TrainCharacteristicsTable';
import { useGetTrainsQuery } from './utils/api/trainsApi';
import { TrainCharacteristicsProps } from './utils/types';
import { useState } from 'react';


function App() {
  const { data, isLoading } = useGetTrainsQuery();
  const [renderData, setRenderData] = useState<TrainCharacteristicsProps | null>(null);

  const handleClick = (trainName: string): void => {
    if (data) {
      const trainData = data.find((trainData) => trainData.name === trainName) || null;
      setRenderData(trainData);
    }
  }

  return (
    <main>
      <div className='tableWrapper'>
        <table>
          <caption>
            <h2>Поезда</h2>
          </caption>
          <thead>
            <tr >
              <th>название </th>
              <th>Описание</th>
            </tr>
          </thead>
          <tbody>
            {isLoading ? <tr><td>Загрузка...</td></tr> : data?.map((train) => {
              return (
                <tr
                  onClick={() => handleClick(train.name)}
                  key={nanoid()}
                  className='clickableStroke'
                >
                  <td >{train.name}</td>
                  <td>{train.description}</td>
                </tr>
              )
            })}
          </tbody>
        </table>
      </div>
      {renderData && <TrainCharacteristics {...renderData} />}
    </main>
  )
}

export default App
