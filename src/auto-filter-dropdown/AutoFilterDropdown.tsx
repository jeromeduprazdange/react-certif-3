import { useState } from 'react';

import './AutoFilterDropdown.css';

type AutoFilterDropdownProps<T> = {
  data: T[];
  property: keyof T;
  placeholder: string;
  valueChange: (selectedItem: T) => void;
};

const AutoFilterDropdown = <T,>({
  data,
  property,
  placeholder = 'Type to filter...',
  valueChange,
}: AutoFilterDropdownProps<T>): React.JSX.Element => {
  const [inputValue, setInputValue] = useState<string>('');

  const filteredData: T[] = data.filter((item) =>
    (item[property] as unknown as string).toLowerCase().includes(inputValue.toLowerCase()),
  );

  const handleInputValueChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    setInputValue(event.target.value);
  };

  return (
    <div>
      <input type="text" placeholder={placeholder} value={inputValue} onChange={handleInputValueChange} />
      <ul>
        {filteredData.map((item) => {
          const regex = new RegExp(`(${inputValue})`, 'ig');
          const itemName = (item[property] as unknown as string).replace(
            regex,
            (_, group) => `<strong>${group}</strong>`,
          );
          return (
            <li key={itemName} onClick={(): void => valueChange(item)} dangerouslySetInnerHTML={{ __html: itemName }} />
          );
        })}
      </ul>
    </div>
  );
};

export default AutoFilterDropdown;
