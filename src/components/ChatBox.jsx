import useStore from "..";

const ChatBox = () => {
  const { messages } = useStore();  // Accessing messages from Zustand store

  return (
    <div className="w-full h-[70vh] max-w-full mx-auto flex flex-col rounded-lg overflow-hidden bg-white">
      <div className="flex-1 p-4 sm:p-6 md:p-8 overflow-y-auto">
        {messages.length === 0 ? (
          <div className="text-center text-gray-500">No conversation yet...</div>
        ) : (
          messages.map((msg, index) => (
            <div
              key={index}
              className={`p-3 my-2 rounded-lg ${
                msg.sender === 'user' 
                  ? 'bg-green-200 ml-auto text-right w-max max-w-[80%]'  // User message on the right with max width of 80% for mobile
                  : 'bg-gray-100 mr-auto text-left w-max max-w-[80%]'    // Bot message on the left with max width of 80% for mobile
              }`}
            >
              {msg.text}
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default ChatBox;
