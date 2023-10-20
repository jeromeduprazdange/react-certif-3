import { useState } from 'react';
import AutoFilterDropdown from './AutoFilterDropdown';
import useHttp from './hooks/use-http';
import { User } from './types/User';
import { SwapiResponse } from './types/SwapiResponse';
import { Planet } from './types/Planet';

import './AutoFilterDropdownDemo.css';

const AutoFilterDropdownDemo = (): React.JSX.Element => {
  const [userData] = useHttp<User[]>('https://jsonplaceholder.typicode.com/users');
  const [userFound, setUserFound] = useState<User | null>(null);
  const [planetData] = useHttp<SwapiResponse>('https://swapi.dev/api/planets/');
  const [planetFound, setPlanetFound] = useState<Planet | null>(null);

  const onUserValueChangeHandler = (event: User): void => {
    setUserFound(event);
  };

  const onPlanetValueChangeHandler = (event: Planet): void => {
    setPlanetFound(event);
  };

  return (
    <section className="auto-filter-dropdown-demo">
      <h1>Auto-filter dropdown demo</h1>
      <div>
        <h2>Search a user</h2>
        {userData ? (
          <AutoFilterDropdown
            data={userData}
            placeholder="Please enter a name"
            property="name"
            valueChange={onUserValueChangeHandler}
          ></AutoFilterDropdown>
        ) : (
          <p>No data</p>
        )}
        <p>User found: {userFound?.name}</p>
      </div>
      <div>
        <h2>Search a Star Wars planet</h2>
        {planetData ? (
          <AutoFilterDropdown
            data={planetData?.results}
            placeholder="Please enter a planet name"
            property="name"
            valueChange={onPlanetValueChangeHandler}
          ></AutoFilterDropdown>
        ) : (
          <p>No data</p>
        )}
        <p>Planet found: {planetFound?.name}</p>
      </div>
    </section>
  );
};

export default AutoFilterDropdownDemo;
