
import {router} from "../routes/routes.jsx";
import {RouterProvider} from "react-router-dom";
import AuthContextProvider, {AuthContext} from "./store/authContext";


function App() {
  return (
      <AuthContextProvider>
        <RouterProvider router={router} />
      </AuthContextProvider>
  );
}

export default App;
