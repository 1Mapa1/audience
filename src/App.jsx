import React from "react";
import { Provider } from "react-redux";
import store from "./redux/store"; // Путь к вашему файлу store.js
import ProjectRoutes from "Routes";

function App() {
  
  return ( 
    <Provider store={store}> 
      <ProjectRoutes /> 
    </Provider>)
}
export default App;
