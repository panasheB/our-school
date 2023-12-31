import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import UserService from "services/UserService";

import "simplebar/src/simplebar.css";
import { Provider as ReduxProvider } from "react-redux";
import "assets/third-party/apex-chart.css";
import App from "./App";
import { store } from "store";
import reportWebVitals from "./reportWebVitals";

const container = document.getElementById("root");
const root = createRoot(container);

const RenderApp = () => {
  return root.render(
    <StrictMode>
      <ReduxProvider store={store}>
        <BrowserRouter basename="/myapp">
          <App />
        </BrowserRouter>
      </ReduxProvider>
    </StrictMode>
  );
};

UserService.initKeycloak(RenderApp)
reportWebVitals();
