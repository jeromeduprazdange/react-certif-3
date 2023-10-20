import AutoFilterDropdown from './AutoFilterDropdown';

type DataType = {
  name: string;
  value: number;
};

const DATA: DataType[] = [
  { name: 'Test1', value: 0 },
  { name: 'Test2', value: 1 },
  { name: 'Test3', value: 2 },
  { name: 'Test1', value: 3 },
  { name: 'Test2', value: 4 },
  { name: 'Test3', value: 5 },
  { name: 'Test1', value: 6 },
  { name: 'Test2', value: 7 },
  { name: 'Test3', value: 8 },
  { name: 'Test1', value: 9 },
  { name: 'Test2', value: 10 },
  { name: 'Test3', value: 11 },
  { name: 'Test1', value: 12 },
  { name: 'Test2', value: 13 },
  { name: 'Test3', value: 14 },
  { name: 'Test1', value: 15 },
  { name: 'Test2', value: 16 },
  { name: 'Test3', value: 17 },
  { name: 'Test1', value: 18 },
  { name: 'Test2', value: 19 },
  { name: 'Test3', value: 20 },
];

const AutoFilterDropdownDemo = (): React.JSX.Element => {
  const onValueChangeHandler = (event: DataType): void => {
    console.log(event);
  };

  return (
    <div>
      <h1>Auto-filter dropdown demo</h1>
      <div className="auto-filter-dropdown-demo">
        <AutoFilterDropdown
          data={DATA}
          placeholder="Please enter something"
          property="name"
          valueChange={onValueChangeHandler}
        ></AutoFilterDropdown>
      </div>
    </div>
  );
};

export default AutoFilterDropdownDemo;
