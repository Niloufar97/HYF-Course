import "./App.css";
import People from "./components/People";
import { createContext, useState } from "react";

let initialUsers = [
  { id: 1, name: "Niloufar", age: 26 },
  { id: 2, name: "Mohammad", age: 30 },
  { id: 3, name: "Armin", age: 3 },
];
export const UserContext = createContext();

function App() {
  const [users] = useState(initialUsers);

  return (
    <UserContext.Provider value={users}>
      <h1>hello</h1>
      <People />
    </UserContext.Provider>
  );
}

export default App;
