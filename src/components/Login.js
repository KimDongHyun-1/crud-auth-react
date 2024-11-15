import { useState } from "react";

const Login = ({ setUser }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  return (
    <div>
      <input
        type="email"
        placeholder="example@email.com"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="pssword"
        placeholder="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />

      <button>회원가입</button>
      <button>로그인</button>
      <button>구글 로그인</button>
      {message && <p>{message}</p>}
    </div>
  );
};

export default Login;
