import { nanoid } from "nanoid";
import { TrainCharacteristicsProps } from "../utils/types"
import { TrainCharacteristicsСells } from "./TrainCharacteristicsСells";
import { SubmitBtn } from "./SubmitBtn";
import { fromParser } from "../utils/hooks/fromParser";

export function TrainCharacteristics({ name, characteristics }: TrainCharacteristicsProps) {

  const onSubmit = (event: React.FormEvent<HTMLFormElement>): void => {
    event.preventDefault();
    const collection = event.currentTarget.elements;

    console.log(fromParser(collection));
  };


  return (
    <div className='tableWrapper'>
      <form onSubmit={onSubmit} name={`Характеристики ${name}`}>
        <table>
          <caption>
            <h2>Характеристики</h2>
            <p>{name}</p>
          </caption>
          <thead>
            <tr>
              <th>скорость</th>
              <th>Сила тяги</th>
              <th>Ток двигателя</th>
            </tr>
          </thead>
          <tbody>
            {characteristics?.map((char) => {
              return (
                <TrainCharacteristicsСells  {...char} key={nanoid()} />
              )
            })}
          </tbody>
        </table>
        <SubmitBtn title="Отправить данные" />
      </form>
    </div>
  )
}
