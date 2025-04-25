// components/ProtectedRoute.jsx
import { Navigate } from 'react-router-dom';
import useStore from '..';


const ProtectedRoute = ({ children }) => {
  const { isAuthenticated } = useStore();

  return isAuthenticated ? children : <Navigate to="/" />;
};

export default ProtectedRoute;
