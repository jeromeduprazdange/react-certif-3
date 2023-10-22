import { ChangeEvent, useState } from 'react';
import usePersistedState from './use-persisted-state';

import './SetPersistedValue.css';

const SetPersistedValue = (): React.JSX.Element => {
  const [inputValue, setInputValue] = useState('');
  const [, setSharedData] = usePersistedState('sharedData', '');

  const onInputChangeHandler = (event: ChangeEvent<HTMLInputElement>): void => {
    setInputValue(event.target.value);
  };

  const onButtonClickHandler = (): void => {
    setSharedData(inputValue);
  };

  return (
    <div className="set-persisted-value">
      <input type="text" value={inputValue} onChange={onInputChangeHandler} />
      <button onClick={onButtonClickHandler}>Set persisted value</button>
    </div>
  );
};

export default SetPersistedValue;
