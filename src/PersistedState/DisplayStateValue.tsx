import usePersistedState from './use-persisted-state';

const DisplayStateValue = (): React.JSX.Element => {
  const [storedValue] = usePersistedState('sharedData', '');

  return <div>Shared Data: {storedValue}</div>;
};

export default DisplayStateValue;
