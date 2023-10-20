import DialogDemo from './dialog/DialogDemo';

import './App.css';
import AutoFilterDropdownDemo from './auto-filter-dropdown/AutoFilterDropdownDemo';

const App = (): React.JSX.Element => {
  return (
    <div className="root-content">
      <DialogDemo />
      <hr />
      <AutoFilterDropdownDemo />
      <hr />
    </div>
  );
};

export default App;
