import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { AppProvider } from "./context/productContext.jsx";
import { CartProvider } from "./context/cartContext.jsx";
import { Auth0Provider } from "@auth0/auth0-react";

createRoot(document.getElementById("root")).render(
  <Auth0Provider
    domain="dev-7zp0xrnqgz22sq53.us.auth0.com"
    clientId="xHJhFOp68IwjyEZTxTHIyROsaUTQfq61"
    authorizationParams={{
      redirect_uri: window.location.origin,
    }}
  >
    <AppProvider>
      <CartProvider>
        <StrictMode>
          <App />
        </StrictMode>
      </CartProvider>
    </AppProvider>
  </Auth0Provider>
);
