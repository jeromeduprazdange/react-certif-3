import { ChangeEvent, useState } from 'react';
import usePersistedState from './use-persisted-state';

const SetStateValue = (): React.JSX.Element => {
  const [inputValue, setInputValue] = useState('');
  const [, setPersistedValue] = usePersistedState('myPersistedData', '');

  const onInputChangeHandler = (event: ChangeEvent<HTMLInputElement>): void => {
    setInputValue(event.target.value);
  };

  const onButtonClickHandler = (): void => {
    setPersistedValue(inputValue);
  };

  return (
    <div>
      <input type="text" value={inputValue} onChange={onInputChangeHandler} />
      <button onClick={onButtonClickHandler}>Set persisted value</button>
    </div>
  );
};

export default SetStateValue;
