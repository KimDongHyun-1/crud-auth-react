import { useState } from "react";
import Login from "./components/Login";

function App() {
  const [user, setUser] = useState(null);

  return (
    <>
      <h1>파이어베이스 CRUD 및 인증 리액트 앱</h1>
      {user ? (
        <>
          <h2>환영합니다! {user.email}님!</h2>
          <button>로그아웃</button>
        </>
      ) : (
        <Login setUser={setUser} />
      )}
    </>
  );
}

export default App;
