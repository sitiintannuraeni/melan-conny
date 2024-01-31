import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { Router, RouterProvider } from "react-router-dom";
import { router } from "./routes.jsx";
import { ThemeProvider } from "@material-tailwind/react";

const customTheme = {
  drawer: {
    defaultProps: {
      size: 400,
    },
    styles: {
      base: {
        overlay: {
          position: "fixed",
        },
      },
    },
  },
  dialog: {
    styles: {
      base: {
        backdrop: {
          display: "grid",
          placeItems: "place-items-center",
          position: "relative",
          top: 0,
          left: 0,
          width: "w-screen",
          height: "min-h-full",
          backgroundColor: "bg-black",
          backgroundOpacity: "bg-opacity-60",
          backdropFilter: "backdrop-blur-sm",
        },
      },
    },
  },
};

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ThemeProvider value={customTheme}>
      <RouterProvider router={router}></RouterProvider>
    </ThemeProvider>
  </React.StrictMode>
);
