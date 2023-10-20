import usePersistedState from './use-persisted-state';

const DisplayStateValue = (): React.JSX.Element => {
  const [persistedValue] = usePersistedState('myPersistedData', '');

  return (
    <div>
      <h2>Persisted value : {persistedValue}</h2>
    </div>
  );
};

export default DisplayStateValue;
