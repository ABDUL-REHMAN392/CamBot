import { useState } from "react";
import { FaUserCircle } from "react-icons/fa";
import QueryInput from "../components/QueryInput";
import ChatBox from "../components/ChatBox";
import useStore from "..";

const Dashboard = () => {
  const { logout, userEmail, addMessage, query, setQuery } = useStore();
  const [showChatbot, setShowChatbot] = useState(false);
  const [showMessage, setShowMessage] = useState(true); // Track the message state

  // Handle query submission
  const handleQuerySubmit = async () => {
    if (query.trim().length === 0) return;

    // Add user message to the store
    addMessage({ sender: "user", text: query });

    // Simulated bot response
    const isIrrelevantQuery =
      !query.toLowerCase().includes("help") && !query.toLowerCase().includes("hi");
    if (isIrrelevantQuery) {
      addMessage({
        sender: "bot",
        text: "Sorry, I didn't understand that. Can you ask something else?",
      });
    } else {
      try {
        const res = await axios.post("/api/chat", { query });
        addMessage({ sender: "bot", text: res.data.response });
      } catch (err) {
        addMessage({ sender: "bot", text: "Error: Could not fetch response." });
      }
    }

    // Hide the introductory message and show the chatbox after query submission
    setShowMessage(false);
    setShowChatbot(true);
  };

  return (
    <div className="h-screen bg-white text-black flex flex-col justify-between overflow-x-hidden">
      {/* Top Navbar */}
      <div className="w-full bg-black text-white px-4 py-3 flex items-center justify-between">
        <div className="text-2xl font-bold">CamBot</div>
        <div className="flex items-center gap-2 sm:gap-4">
          <FaUserCircle className="text-2xl" />
          <span className="hidden sm:block">{userEmail}</span>
          <button
            onClick={logout}
            className="bg-white text-black px-3 py-1 rounded hover:bg-gray-200"
          >
            Logout
          </button>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-grow flex flex-col items-center justify-center px-4 text-center">
        {/* Show introductory message initially */}
        {showMessage && (
          <div className="text-center mt-4 mb-4 flex flex-col items-center">
            <h2 className="text-2xl sm:text-3xl font-semibold">
              How can I assist with your university queries?
            </h2>
            <div className="mt-4 w-full max-w-xl mx-auto">
              <QueryInput onSubmit={handleQuerySubmit} />
            </div>
          </div>
        )}

        {/* Show ChatBox after query submission */}
        {showChatbot && <ChatBox />}
      </div>

      {/* Input Field at Bottom */}
      {showChatbot && (
        <div className="w-full max-w-xl mx-auto px-4 mb-4">
          <QueryInput onSubmit={handleQuerySubmit} />
        </div>
      )}
    </div>
  );
};

export default Dashboard;