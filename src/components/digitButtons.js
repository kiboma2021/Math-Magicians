// eslint-disable-next-line import/no-cycle
import { ACTIONS } from './Calculator';

// eslint-disable-next-line react/prop-types
export default function DigitButton({ dispatch, digit }) {
  return (
    <button type="submit" onClick={() => dispatch({ type: ACTIONS.ADD_DIGIT, payload: { digit } })}>
      { digit }
    </button>
  );
}
