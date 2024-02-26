import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './css/style.css';
import './css/satoshi.css';
import 'jsvectormap/dist/css/jsvectormap.css';
import 'flatpickr/dist/flatpickr.min.css';
import { AuthContext } from './contexts/AuthContext';
import { BrowserRouter as Router } from 'react-router-dom';
import { EventsContext } from './contexts/EventContext';
import { TeacherContext } from './contexts/TeachersContext';
import { PostContext } from './contexts/PostContext';
import { AllUsers } from './contexts/AllUsers';
import { TotalPosts } from './contexts/TotalPosts';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Router>
      <AuthContext>
        <EventsContext>
          <TeacherContext>
            <PostContext>
              <AllUsers>
              <TotalPosts>
              <App />
              </TotalPosts>
              </AllUsers>
            </PostContext>
          </TeacherContext>
        </EventsContext>
      </AuthContext>
    </Router>
  </React.StrictMode>,
);
