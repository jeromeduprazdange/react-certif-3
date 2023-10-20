import AutoFilterDropdown from './AutoFilterDropdown';

type DataType = {
  name: string;
  value: number;
};

const DATA: DataType[] = [
  { name: 'Test1', value: 0 },
  { name: 'Test2', value: 1 },
  { name: 'Test3', value: 2 },
];

const AutoFilterDropdownDemo = (): React.JSX.Element => {
  const handleValueChange = (event: DataType): void => {
    console.log(event);
  };

  return (
    <div>
      <h1>AutoFilterDropdown Demo</h1>
      <AutoFilterDropdown
        data={DATA}
        placeholder="Please enter something"
        property="name"
        valueChange={handleValueChange}
      ></AutoFilterDropdown>
    </div>
  );
};

export default AutoFilterDropdownDemo;
