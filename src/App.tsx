import { RouterProvider } from "react-router-dom";
import "./App.css";
import { Menu } from "./component/Menu";
import {  router } from "./component/Router";
import { DataComponent } from "./pages/Users";

const App = () => {
  return (
    <div>
      <RouterProvider router={router}/>
    </div>
  );
};

export default App;
