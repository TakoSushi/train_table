import { useEffect, useState } from "react";
import { TTrainCharacteristics } from "../utils/types"
import { useAppDispatch } from "../utils/hooks/stateHooks";
import { updateValue } from "../providers/store/submitButtonSlice";


import "./TrainCharacteristicsСells.css";

export function TrainCharacteristicsСells({ speed, force, engineAmperage }: TTrainCharacteristics) {
  const dispatch = useAppDispatch();

  const [trainSpeed, setTrainSpeed] = useState<string>(speed.toString());
  const [isSpeedValid, setIsSpeedValid] = useState<boolean>(true);

  const [trainForce, setTrainForce] = useState<string>(force.toString());
  const [isForceValid, setIsForceValid] = useState<boolean>(true);

  const [trainEngineAmperage, setTrainEngineAmperage] = useState<string>(engineAmperage.toString());
  const [isEngineAmperageValid, setIsEngineAmperageValid] = useState<boolean>(true);

  useEffect(() => {
    if (isSpeedValid && isForceValid && isEngineAmperageValid){
    dispatch(updateValue(true));
    } else {
      dispatch(updateValue(false));
    }
  }, [isSpeedValid, isForceValid, isEngineAmperageValid]);

  const validateNonNegative = (str: string): boolean => {
    const regExp = /^(?:[1-9]\d*|0)$/g;
    return regExp.test(str);
  }
  const validatePositive = (str: string): boolean => {
    const regExp = /^[1-9]\d*$/g;
    return regExp.test(str);
  }

  const validatePositiveFloatingPoint = (str: string): boolean => {
    const regExp = /^(?:[0-9][.]|[1-9]+[.]|[1-9]+)(?:\d*|0)\d$|^[0-9]$/g;
    return regExp.test(str);
  }

  const handleChangeSpeed = (e: string): void => {
    validateNonNegative(e) ? setIsSpeedValid(true) : setIsSpeedValid(false);
    setTrainSpeed(e);
  }

  const handleChangeForce = (e: string): void => {
    validatePositiveFloatingPoint(e) ? setIsForceValid(true) : setIsForceValid(false);
    console.log(validatePositiveFloatingPoint(e));
    setTrainForce(e);
  }

  const handleChangeEngineAmperage = (e: string): void => {
    validatePositive(e) ? setIsEngineAmperageValid(true) : setIsEngineAmperageValid(false);
    setTrainEngineAmperage(e);
  }

  return (
    <tr>
      <td className="inputCeil">
        <input
          type="text"
          value={trainSpeed}
          onChange={(e) => handleChangeSpeed(e.target.value)}
          name={`${trainSpeed}-speed`}
          />
        <span className={`${isSpeedValid ? "valid" : "invalid"} errorMessage`}>
          <p>Указанное значение не верно.</p> <p>Введите неотрицательное целое число</p>
        </span>
      </td>
      <td className="inputCeil">
        <input
          type="text"
          value={trainForce}
          onChange={(e) => handleChangeForce(e.target.value)}
          name={`${trainSpeed}-force`}
         />
        <span className={`${isForceValid ? "valid" : "invalid"} errorMessage`}>
          <p>Указанное значение не верно.</p>
          <p>Введите положительное число с плавающей запятой</p>
        </span>
      </td>
      <td className="inputCeil">
        <input
          type="text"
          value={trainEngineAmperage}
          onChange={(e) => handleChangeEngineAmperage(e.target.value)}
          name={`${trainSpeed}-engineAmperage`}
         />
        <span className={`${isEngineAmperageValid ? "valid" : "invalid"} errorMessage`}>
          <p>Указанное значение не верно.</p>
          <p>Введите положительное целое число</p>
        </span>
      </td>
    </tr>
  )
}
