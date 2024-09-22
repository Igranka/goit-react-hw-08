import { lazy, Suspense, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { refreshUser } from "../../redux/auth/operations";
import { selectIsRefreshing } from "../../redux/auth/selectors";
import Layout from "../../components/Layout/Layout";
import RestrictedRoute from "../../components/Routes/RestrictedRoute";
import PrivateRoute from "../../components/Routes/PrivateRoute";
import Loader from "../../components/Loader/Loader";
import NotFoundPage from "../../pages/NotFoundPage/NotFoundPage";

const ContactsPage = lazy(() => import("../../pages/ContactsPage/ContactsPage"));
const HomePage = lazy(() => import("../../pages/HomePage/HomePage"));
const LoginPage = lazy(() => import("../../pages/LoginPage/LoginPage"));
const RegistrationPage = lazy(() => import("../../pages/RegistrationPage/RegistrationPage"));

export default function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);
  const isRefreshing = useSelector(selectIsRefreshing);
  if (isRefreshing) return <Loader />;
  return (
    <Layout>
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route
            path="/register"
            element={
              <RestrictedRoute component={<RegistrationPage />} redirectTo="/" />
            }
          />
          <Route
            path="/login"
            element={
              <RestrictedRoute
                component={<LoginPage />}
                redirectTo="/contacts"
              />
            }
          />
          <Route
            path="/contacts"
            element={
              <PrivateRoute component={<ContactsPage />} redirectTo="/login" />
            }
          />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Suspense>
    </Layout>
  );
}
