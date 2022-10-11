import Login from "../Login";

export const ProtectedRoute = ({ children }) => {
  const user = false;
  if (!user) {
    return <Login />;
  }
  return children;
};