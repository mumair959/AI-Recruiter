import { Navigate } from "react-router-dom";

import { useAuth } from "../store/auth";

export default function ProtectedRoute({children}: any) {

  const { token } = useAuth();

  if (!token) {

    return (
      <Navigate
        to="/login"
      />
    );
  }

  return children;
}