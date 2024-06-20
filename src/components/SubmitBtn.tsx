import { useAppSelector } from "../utils/hooks/stateHooks";

import "./SubmitBtn.css";

type btnProps = {
  title: string;
}

export function SubmitBtn ( {title}: btnProps ) {
  const isValid = useAppSelector((state) => state.submitBtn.isValid);
  return (
    <button
      type="submit"
      disabled={!isValid}
      className="submitBtn"
    >
      {title}
    </button>
  )
}
