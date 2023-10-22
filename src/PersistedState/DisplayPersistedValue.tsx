import usePersistedState from './use-persisted-state';

const DisplayPersistedValue = (): React.JSX.Element => {
  const [sharedData] = usePersistedState('sharedData', '');

  return <div>Persisted data: {sharedData}</div>;
};

export default DisplayPersistedValue;
