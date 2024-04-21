import React from "react";
import ReactDOM from "react-dom/client";
import "./App.scss";
import { store } from "./store/store";
import { Provider } from "react-redux";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./pages/index"; // Assurez-vous que le chemin vers App est correct

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />, // Utilisez App ici
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);
