import { useState, useEffect } from 'react';
import AutoFilterDropdown from './AutoFilterDropdown';

type User = {
  id: number;
  name: string;
  username: string;
  email: string;
  address: {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
    geo: {
      lat: string;
      lng: string;
    };
  };
  phone: string;
  website: string;
  company: {
    name: string;
    catchPhrase: string;
    bs: string;
  };
};

const AutoFilterDropdownDemo = (): React.JSX.Element => {
  const [userData, setUserData] = useState<User[]>([]);
  const [userFound, setUserFound] = useState<User | null>(null);

  useEffect(() => {
    const fetchData = async (): Promise<void> => {
      try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        if (response.ok) {
          const jsonData = await response.json();
          setUserData(jsonData);
        } else {
          console.error('Error retrieving data');
        }
      } catch (error) {
        console.error('Error:', error);
      }
    };

    fetchData();
  }, []);

  const onValueChangeHandler = (event: User): void => {
    setUserFound(event);
  };

  return (
    <section>
      <h1>Auto-filter dropdown demo</h1>
      <div>
        <AutoFilterDropdown
          data={userData}
          placeholder="Please enter a name"
          property="name"
          valueChange={onValueChangeHandler}
        ></AutoFilterDropdown>
        <p>User found: {userFound?.name}</p>
      </div>
    </section>
  );
};

export default AutoFilterDropdownDemo;
