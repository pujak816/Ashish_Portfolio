import React from "react";
import Header from "./components/Header";
import Home from "./components/Home";
import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route,
} from "react-router-dom";

function App() {
  return (
    <div className="relative">
      <RouterProvider router={appRouter} />
    </div>
  );
}
const appRouter = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Header />}>
      <Route index element={<Home />}></Route>
    </Route>
  )
);

export default App;
