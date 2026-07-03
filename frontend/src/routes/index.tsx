import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

import ProtectedRoute from "./ProtectedRoute";

import DashboardLayout from "../layouts/DashboardLayout";

import LoginPage from "../pages/LoginPage";
import RegisterPage from "../pages/RegisterPage";

import DashboardPage from "../pages/DashboardPage";
import JobsPage from "../pages/jobs/JobsPage";
import CandidatesPage from "../pages/candidates/CandidatesPage";
import MatchesPage from "../pages/MatchesPage";
import CreateJobPage from "../pages/jobs/CreateJobPage";
import JobDetailsPage from "../pages/jobs/JobDetailsPage";
import CreateCandidatePage from "../pages/candidates/CreateCandidatePage";
import CandidateDetailsPage from "../pages/candidates/CandidateDetailsPage";
import JobMatchesPage from "../pages/jobs/JobMatchesPage";
import ApplicationsPage from "../pages/applications/ApplicationsPage";
import ApplicationDetailsPage from "../pages/applications/ApplicationDetailsPage";

export default function AppRouter() {

  return (
    <BrowserRouter>

      <Routes>

        <Route
          path="/login"
          element={<LoginPage />}
        />

        <Route
          path="/register"
          element={<RegisterPage />}
        />

        <Route
          path="/"
          element={
            <ProtectedRoute>

              <DashboardLayout />

            </ProtectedRoute>
          }
        >

          <Route
            index
            element={
              <Navigate to="/dashboard" />
            }
          />

          <Route
            path="dashboard"
            element={<DashboardPage />}
          />

          <Route
            path="jobs"
            element={<JobsPage />}
          />

          <Route
            path="jobs/create"
            element={<CreateJobPage />}
          />

          <Route
            path="jobs/:id"
            element={<JobDetailsPage />}
          />

          <Route
            path="candidates"
            element={<CandidatesPage />}
          />

          <Route
            path="candidates/create"
            element={<CreateCandidatePage />}
          />

          <Route
            path="candidates/:id"
            element={<CandidateDetailsPage />}
          />

          <Route
            path="/jobs/:id/matches"
            element={<JobMatchesPage />}
          />

          <Route
            path="applications"
            element={<ApplicationsPage />}
          />

          <Route
            path="/applications/:id"
              element={<ApplicationDetailsPage />}
          />

          <Route
            path="matches"
            element={<MatchesPage />}
          />

        </Route>

      </Routes>

    </BrowserRouter>
  );
}