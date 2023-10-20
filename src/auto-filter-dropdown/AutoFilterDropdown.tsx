import { useEffect, useRef, useState, useMemo } from 'react';

import './AutoFilterDropdown.css';

type AutoFilterDropdownProps<T> = {
  data: T[];
  property: keyof T;
  placeholder: string;
  maxDisplayedOptions?: number;
  valueChange: (selectedItem: T) => void;
};

const AutoFilterDropdown = <T,>({
  data,
  property,
  placeholder = 'Type to filter...',
  maxDisplayedOptions = 30,
  valueChange,
}: AutoFilterDropdownProps<T>): React.JSX.Element => {
  const dropdownRef = useRef<HTMLDivElement>(null);

  const [inputValue, setInputValue] = useState<string>('');
  const [isFocused, setIsFocused] = useState<boolean>(false);

  const filteredData: T[] = useMemo(() => {
    return data.filter((item) => (item[property] as string).toLowerCase().includes(inputValue.toLowerCase()));
  }, [data, property, inputValue]);

  const onInputValueChangeHandler = (event: React.ChangeEvent<HTMLInputElement>): void => {
    setInputValue(event.target.value);
  };

  const onSelectValueHandler = (item: T): void => {
    valueChange(item);
    setInputValue(item[property] as string);
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
      {isFocused && inputValue && (
        <ul className="auto-filter-dropdown--list">
          {filteredData.slice(0, maxDisplayedOptions).map((item: T, index: number) => {
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
