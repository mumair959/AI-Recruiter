import { useState } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { register } from "../services/auth.service";
import { useAuth } from "../store/auth";

export default function RegisterPage() {

  const navigate = useNavigate();

  const {token} = useAuth();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirmation, setPasswordConfirmation] = useState("");

  if (token) {
    return (
      <Navigate
        to="/dashboard"
      />
    );
  }

  const submit = async (
    e: React.FormEvent
  ) => {

    e.preventDefault();

    await register(
      name,
      email,
      password,
      passwordConfirmation
    );

    navigate("/login");
  };

  return (
    <div className="flex justify-center items-center h-screen">

      <form
        onSubmit={submit}
        className="border p-6 rounded w-96 space-y-4"
      >

        <h2 className="text-xl font-bold">
          Register
        </h2>

        <input
          type="text"
          placeholder="Name"
          className="border p-2 w-full"
          value={name}
          onChange={(e) =>
            setName(
              e.target.value
            )
          }
        />

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

        <input
          type="password"
          placeholder="Confirm Password"
          className="border p-2 w-full"
          value={passwordConfirmation}
          onChange={(e) =>
            setPasswordConfirmation(
              e.target.value
            )
          }
        />

        <button
          className="border p-2 w-full"
        >
          Register
        </button>

        <Link to="/register">
          Already Have Account
        </Link>

      </form>

    </div>
  );
}