import DialogDemo from './dialog/DialogDemo';
import AutoFilterDropdownDemo from './auto-filter-dropdown/AutoFilterDropdownDemo';
import PersistedStateDemo from './PersistedState/PersistedStateDemo';

import './App.css';

const App = (): React.JSX.Element => {
  return (
    <div className="root-content">
      <PersistedStateDemo />
      <hr />
      <DialogDemo />
      <hr />
      <AutoFilterDropdownDemo />
    </div>
  );
};

export default App;
