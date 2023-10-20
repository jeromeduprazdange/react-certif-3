import { FocusEventHandler, useEffect, useRef, useState } from 'react';

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
  const dropdownRef = useRef<HTMLDivElement>(null);

  const [inputValue, setInputValue] = useState<string>('');
  const [isFocused, setIsFocused] = useState<boolean>(false);

  const filteredData: T[] = data.filter((item) =>
    (item[property] as unknown as string).toLowerCase().includes(inputValue.toLowerCase()),
  );

  const onInputValueChangeHandler = (event: React.ChangeEvent<HTMLInputElement>): void => {
    setInputValue(event.target.value);
  };

  const onSelectValueHandler = (item: T): void => {
    valueChange(item);
    setInputValue(item[property] as unknown as string);
    setIsFocused(false);
  };

  const onClickDocumentHandler = (event: MouseEvent): void => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
      setIsFocused(false);
    }
  };

  useEffect(() => {
    document.addEventListener('click', onClickDocumentHandler);
    return () => {
      document.removeEventListener('click', onClickDocumentHandler);
    };
  }, []);

  return (
    <div className="auto-filter-dropdown" onFocus={(): void => setIsFocused(true)} ref={dropdownRef}>
      <input
        className="auto-filter-dropdown--input"
        type="text"
        placeholder={placeholder}
        value={inputValue}
        onChange={onInputValueChangeHandler}
      />
      {isFocused && (
        <ul className="auto-filter-dropdown--list">
          {filteredData.map((item: T, index: number) => {
            const regex = new RegExp(`(${inputValue})`, 'ig');
            const itemName = (item[property] as unknown as string).replace(
              regex,
              (_, group) => `<strong>${group}</strong>`,
            );
            return (
              <li
                className="auto-filter-dropdown--list-element"
                key={`${itemName}-${index}`}
                onClick={(): void => onSelectValueHandler(item)}
                dangerouslySetInnerHTML={{ __html: itemName }}
              />
            );
          })}
        </ul>
      )}
    </div>
  );
};

export default AutoFilterDropdown;
