import { useState } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";

import { login } from "../services/auth.service";
import { useAuth } from "../store/auth";

export default function LoginPage() {

  const navigate = useNavigate();

  const {token, setToken, setUser} = useAuth();

  if (token) {
    return (
      <Navigate
        to="/dashboard"
      />
    );
  }

  const [email, setEmail] = useState("");

  const [password, setPassword] = useState("");

  const submit = async (
    e: React.FormEvent
  ) => {

    e.preventDefault();

    const data = await login(
      email,
      password
    );

    localStorage.setItem(
      "token",
      data.token
    );

    localStorage.setItem(
      "user",
      JSON.stringify(data.user)
    );

    setToken(data.token);

    setUser(data.user);

    navigate("/dashboard");
  };

  return (
    <div className="flex justify-center items-center h-screen">

      <form
        onSubmit={submit}
        className="border p-6 rounded w-96 space-y-4"
      >

        <h2 className="text-xl font-bold">
          Login
        </h2>

        <input
          type="email"
          placeholder="Email"
          className="border p-2 w-full"
          value={email}
          onChange={(e) =>
            setEmail(
              e.target.value
            )
          }
        />

        <input
          type="password"
          placeholder="Password"
          className="border p-2 w-full"
          value={password}
          onChange={(e) =>
            setPassword(
              e.target.value
            )
          }
        />

        <button
          className="border p-2 w-full"
        >
          Login
        </button>

        <Link to="/register">
          Create Account
        </Link>

      </form>

    </div>
  );
}