type TTrainData = {
  name: string;
  description: string;
  characteristics: TTrainCharacteristics[];
};

type TTrainCharacteristics = {
  speed: number;
  force: number;
  engineAmperage: number;
};

type TTrainsState = TTrainData[];

type TrainCharacteristicsProps = Omit<TTrainData, 'description'>;


export type { TTrainsState, TTrainData, TTrainCharacteristics, TrainCharacteristicsProps };