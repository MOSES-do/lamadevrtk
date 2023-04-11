import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import store from "./redux/store";
import { Provider } from "react-redux";

import { fetchUsers } from './redux/userSlice'


store.dispatch(fetchUsers())

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <App />
  </Provider>
)

