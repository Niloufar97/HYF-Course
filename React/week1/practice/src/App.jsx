import './App.css'
import UserList from './components/UserList';

function App() {
  const users = [
    {
      id: 1,
      fullname: "testy mc testy face",
      address: "test alley",
      age: 35,
      height: 185,
      languages: ["danish", "arabic"],
    },
    {
      id: 2,
      fullname: "Ahmad Hansen",
      address: "test alley 2",
      age: 89,
      height: 167,
      languages: ["english", "polish"],
    },
    {
      id: 3,
      fullname: "Peter Petersen",
      address: "alley 2",
      age: 19,
      height: 176,
      languages: ["english", "danish"],
    },
  ];

  

  return (
    <div>
     <h1>Users</h1>
      <UserList users={users} />
    </div>
  )
}

export default App
