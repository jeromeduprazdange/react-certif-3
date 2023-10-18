import { useState } from 'react';
import Dialog from './Dialog';

const DialogDemo = (): React.JSX.Element => {
  const [display, setDisplay] = useState(false);

  const toggleModalHandler = () => {
    setDisplay(!display);
  };

  return (
    <div>
      <Dialog display={display}>test</Dialog>
      <button type="button" onClick={toggleModalHandler}></button>
    </div>
  );
};

export default DialogDemo;
