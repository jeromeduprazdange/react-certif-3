import DisplayPersistedValue from './DisplayPersistedValue';
import SetPersistedValue from './SetPersistedValue';

const PersistedStateDemo = (): React.JSX.Element => {
  return (
    <section className="peristed-state-demo">
      <h1>Persisted state demo</h1>
      <SetPersistedValue />
      <DisplayPersistedValue />
    </section>
  );
};

export default PersistedStateDemo;
