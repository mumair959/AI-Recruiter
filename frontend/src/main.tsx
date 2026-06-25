import './index.css'
import ReactDOM from "react-dom/client";
import AppRouter from "./routes";
import { AuthProvider } from "./store/auth";

ReactDOM.createRoot(
  document.getElementById("root")!
).render(

  <AuthProvider>

    <AppRouter />

  </AuthProvider>
);