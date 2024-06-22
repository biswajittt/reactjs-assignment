import { useState } from "react";
import "./App.css";
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import Layout from "./Layout.jsx";
import EventRegistration from "./components/EventRegistration/EventRegistration.jsx";
import Survey from "./components/Survey/Survey.jsx";
import JobApplication from "./components/JobApplication/JobApplication.jsx";
import Home from "./components/Home/Home.jsx";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route path="" element={<Home />} />
      <Route path="eventregistrationform" element={<EventRegistration />} />
      <Route path="jobapplicationform" element={<JobApplication />} />
      <Route path="surveyform" element={<Survey />} />
    </Route>
  )
);

function App() {
  return (
    // <GlobalContextProvider>
    <RouterProvider router={router} />
    // </GlobalContextProvider>
  );
}

export default App;
