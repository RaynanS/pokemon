import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { store } from "./app/store";
import "./index.css";
import Router from "./routes/router";

ReactDOM.render(
  <Provider store={store}>
    <Router />
  </Provider>,
  document.getElementById("root")
);
