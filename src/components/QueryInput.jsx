import { FaArrowUp } from "react-icons/fa";
import useStore from "..";

const QueryInput = ({ onSubmit }) => {
  const { query, setQuery } = useStore(); // Using Zustand for query state

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!query.trim()) return; // Prevent submitting empty query
    onSubmit(query); // Send the query to the parent (Dashboard)
    setQuery(""); // Clear input field
  };

  return (
    <div className="w-full max-w-xl mx-auto px-4 mt-4">
      <form onSubmit={handleSubmit} className="relative">
        <input
          type="text"
          placeholder="Ask me anything about university..."
          value={query}
          onChange={(e) => setQuery(e.target.value)} // Update the query in Zustand store
          className="w-full pr-12 pl-4 py-3 text-base rounded-lg border border-gray-300 focus:ring-2 focus:ring-black focus:outline-none"
        />
        <button
          type="submit"
          className="absolute right-2 top-1/2 -translate-y-1/2 bg-black text-white p-2 rounded-md hover:bg-gray-900 transition"
        >
          <FaArrowUp />
        </button>
      </form>
    </div>
  );
};

export default QueryInput;
