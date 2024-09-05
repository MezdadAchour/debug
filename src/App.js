import React, { useState } from "react";
import Counter from "./Counter";
import UserInfo from "./UserInfo";

function App() {
  const [count, setCount] = useState(0);
  const user = { name: "Achour", age: 29 };

  return (
    <div className="App">
      <h1>React application</h1>
      <Counter count={count} setCount={setCount} />
      <UserInfo user={user} />
    </div>
  );
}

export default App;
