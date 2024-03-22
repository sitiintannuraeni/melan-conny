import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { Router, RouterProvider } from "react-router-dom";
import { router } from "./routes.jsx";
import { ThemeProvider } from "@material-tailwind/react";
import store from "./store.js";
import { Provider as ReduxProvider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { persistStore } from "redux-persist";
let persistor = persistStore(store);

const customTheme = {
  select: {
    styles: {
      base: {
        container: {
          position: "relative",
          width: "w-full",
          minWidth: "",
        },
      },
    },
  },
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
          position: "fixed",
          top: 0,
          left: 0,
          width: "w-screen",
          height: "min-h-full",
          backgroundColor: "bg-black",
          backgroundOpacity: "bg-opacity-60",
          backdropFilter: "backdrop-blur-sm",
        },
      },
      sizes: {
        xs: {
          width: "w-full md:w-3/5 lg:w-2/5 2xl:w-1/4",
          minWidth: "min-w-[80%] md:min-w-[60%] lg:min-w-[30%] 2xl:min-w-[25%]",
          maxWidth: "max-w-[80%] md:max-w-[60%] lg:max-w-[30%] 2xl:max-w-[25%]",
        },
      },
    },
  },
};

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ThemeProvider value={customTheme}>
      <ReduxProvider store={store}>
        <PersistGate persistor={persistor}>
          <RouterProvider router={router}></RouterProvider>
        </PersistGate>
      </ReduxProvider>
    </ThemeProvider>
  </React.StrictMode>
);
