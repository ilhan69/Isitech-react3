import { useContext } from "react";
import userContext from "../contexts/userContext";
import Login from "../views/Login";

const ProtectedRoute = (props) => {

  const {user} = useContext(userContext)

  if (!user.logged) {
    return <Login />;
  } else {
    return props.page;
  }
};

export default ProtectedRoute