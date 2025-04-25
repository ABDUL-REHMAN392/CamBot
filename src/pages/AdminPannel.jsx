import { useEffect } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import useStore from "..";
 

const AdminPanel = () => {
  const navigate = useNavigate(); // Initialize navigate from useNavigate
  const isAdminLoggedIn = useStore((state) => state.isAdminLoggedIn); // Access the store's logged-in state
  const setAdminLoggedIn = useStore((state) => state.setAdminLoggedIn); // Access the store's set function

  useEffect(() => {
    if (!isAdminLoggedIn) {
      navigate("/admin-login"); // Redirect to login if not logged in
    }
  }, [isAdminLoggedIn, navigate]);

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-4xl p-6 bg-white shadow-md rounded-lg">
        <h2 className="text-3xl font-semibold mb-6">Admin Panel</h2>
        <p className="mb-4">Welcome to the Admin Panel! Here you can manage various aspects of the application.</p>
        <div className="mt-8">
          <button
            onClick={() => {
              setAdminLoggedIn(false); // Log out by updating the Zustand state
              navigate("/admin-login"); // Redirect to login page
            }}
            className="py-2 px-4 bg-red-500 text-white rounded-md hover:bg-red-600 transition duration-200"
          >
            Logout
          </button>
        </div>
      </div>
    </div>
  );
};

export default AdminPanel;
