import DisplayStateValue from './DisplayStateValue';
import SetStateValue from './SetStateValue';

const PersistedStateDemo = (): React.JSX.Element => {
  return (
    <section className="peristed-state-demo">
      <h1>Persisted state demo</h1>
      <SetStateValue />
      <DisplayStateValue />
    </section>
  );
};

export default PersistedStateDemo;
