import ReactDOM from "react-dom/client";
import "./index.scss";
import App from "./App";

//setup fontawesome v6.4
import "./assets/fontawesome/css/fontawesome.min.css";
import "./assets/fontawesome/css/brands.min.css";
import "./assets/fontawesome/css/solid.min.css";
import { Provider } from "react-redux";
import { store } from "./store/store";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
