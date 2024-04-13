import { Suspense, lazy, useEffect  } from "react";
import { Route, Routes } from "react-router-dom";
import { useDispatch } from "react-redux";
import { refreshUser } from "../../redux/auth/operations";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Loader from "../Loader/Loader";
import RestrictedRoute from "../RestrictedRoute";
import PrivateRoute from "../PrivateRoute";
import Layout from '../Layout/Layout.jsx';


const HomePage = lazy(() => import('../../pages/Home/Home.jsx'))
const RegisterPage = lazy(() => import('../../pages/Register/Register.jsx'))
const LoginPage = lazy(() => import('../../pages/Login/Login.jsx'))
const ContactsPage = lazy(() => import('../../pages/Contacts/Contacts.jsx'))
const NotFoundPage = lazy(() => import('../../pages/NotFound/NotFound'))

export default function App() {
  const dispatch = useDispatch()  

  useEffect(() => {
    dispatch(refreshUser())
  }, [dispatch])

  return (
    <Layout>
      <Suspense fallback={<Loader/>}>
        <Routes>
          <Route path="/" element={<HomePage/>} />
          <Route path="/register" element={<RestrictedRoute component={<RegisterPage />} redirectTo='/contacts'/>} />
          <Route path="/login" element={<RestrictedRoute component={<LoginPage />} redirectTo='/contacts' />} />
          <Route path='/contacts' element={<PrivateRoute component={<ContactsPage />} redirectTo='/login' />} />
          <Route path='*' element={<NotFoundPage/>} />
        </Routes>
      </Suspense>
      <ToastContainer />
    </Layout>
  )
}