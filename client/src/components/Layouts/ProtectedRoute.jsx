import Login from "../Login";

export const ProtectedRoute = ({ children }) => {
  const user = true;
  if (!user) {
    return <Login />;
  }
  return children;
};