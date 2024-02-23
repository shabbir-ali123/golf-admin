import { useEffect } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';

import Loader from './common/Loader';
import PageTitle from './components/PageTitle';
import SignIn from './pages/Authentication/SignIn';
import SignUp from './pages/Authentication/SignUp';
import Calendar from './pages/Calendar';
import Chart from './pages/Chart';
import ECommerce from './pages/Dashboard/ECommerce';
import FormElements from './pages/Form/FormElements';
import FormLayout from './pages/Form/FormLayout';
import Profile from './pages/Profile';
import Settings from './pages/Settings';
import Tables from './pages/Tables';
import Alerts from './pages/UiElements/Alerts';
import Buttons from './pages/UiElements/Buttons';
import Login from './pages/Authentication/Login';
import Posts from './pages/Posts';
import { useAuth } from './contexts/AuthContext';
import Teachers from './pages/Teachers';


function App() {

  const {  isLoading, hastoken} = useAuth();
  console.log( hastoken,"sads")
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  if(isLoading){
    return <Loader/>
  }
  return(
     
    <>
      {hastoken ? (<Routes>
        <Route
          index
          element={
            <>
              <PageTitle title=" Dashboard | Golf" />
              <ECommerce />
            </>
          }
        />
        <Route
          path="/analytics"
          element={
            <>
              <PageTitle title="Analytics | Golf" />
              <Calendar />
            </>
          }
        />
        <Route
          path="/events"
          element={
            <>
              <PageTitle title="Users | Golf" />
              <Profile />
            </>
          }
        />
        <Route
          path="/inbox"
          element={
            <>
              <PageTitle title="Inbox Messages | Golf" />
              <FormElements />
            </>
          }
        />
        <Route
          path="/forms/form-layout"
          element={
            <>
              <PageTitle title="Form Layout | Golf" />
              <FormLayout />
            </>
          }
        />
        <Route
          path="/contacts"
          element={
            <>
              <PageTitle title="Contacts | Golf" />
              <Tables />
            </>
          }
        />
        <Route
          path="/posts"
          element={
            <>
              <PageTitle title="Posts | Golf" />
              <Posts />
            </>
          }
        />
        <Route
          path="/teachers"
          element={
            <>
              <PageTitle title="Teacher | Golf" />
              <Teachers />
            </>
          }
        />
        <Route
          path="/students"
          element={
            <>
              <PageTitle title="Student | Golf" />
              <Tables />
            </>
          }
        />
        <Route
          path="/settings"
          element={
            <>
              <PageTitle title="Settings | Golf" />
              <Settings />
            </>
          }
        />
        <Route
          path="/chart"
          element={
            <>
              <PageTitle title="Basic Chart | Golf" />
              <Chart />
            </>
          }
        />
        <Route
          path="/ui/alerts"
          element={
            <>
              <PageTitle title="Alerts | Golf" />
              <Alerts />
            </>
          }
        />
        <Route
          path="/ui/buttons"
          element={
            <>
              <PageTitle title="Buttons | Golf" />
              <Buttons />
            </>
          }
        />
        <Route
          path="/login"
          element={
            <>
              <PageTitle title="Login | Golf" />
              <Login />
            </>
          }
        />
        <Route
          path="/auth/signin"
          element={
            <>
              <PageTitle title="Signin | Golf" />
              <SignIn />
            </>
          }
        />
        <Route
          path="/auth/signup"
          element={
            <>
              <PageTitle title="Signup | Golf" />
              <SignUp />
            </>
          }
        />
      </Routes>) :
        <Login  />
      }

    </>
  )  
    }


export default App;
