import { useState, useEffect } from 'react';
import './App.css';
import { Card } from './Card';

function App() {
  const [users, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [inputState, setInputState] = useState('');

  const API = "https://jsonplaceholder.typicode.com/users";

  const fetchUser = async () => {
    try {
      const res = await fetch(API);
      const data = await res.json();
      setUser(data);
      setLoading(false);
    } catch (error) {
      console.log(error);
      setError(error);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchUser();
  }, []);

  function createUserCard(user) {
    return (
      <div key={user.id}>
        <Card 
        name={user.name}
        username={user.username}
        email={user.email}
        web={user.website}
        ></Card>
      </div>
    );
  }
  function handleOnChange(e) {
    return setInputState(e.target.value)
  }

  function Show() {
    return (
      <pre>
        <code>
          <p>{inputState}</p>
        </code>
      </pre>
    )
  }

  return (
    <>
      <div className="upper">
        <input type="text" value={inputState} onChange={handleOnChange} placeholder='Who is .. .?'/>
        <Show />
      </div>
      <hr />
      <div className="down">
        {loading && <p>Loading...</p>}
        {error && <p>Error: {error.message}</p>}
        <div className='cardContainer'>
          {users && users.map(createUserCard)}
        </div>
      </div>

    </>
  );
}

export default App;
