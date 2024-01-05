

const Chat = () => {
  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <aside className="w-1/4 bg-gray-200 p-4">
        <h1 className="text-xl font-bold mb-4">Contacts</h1>
        {/* Contact list */}
        <ul>
          <li className="flex items-center mb-2">
            <img
              className="w-8 h-8 rounded-full mr-2"
              src="https://via.placeholder.com/50"
              alt="Contact"
            />
            <span>John Doe</span>
          </li>
          <li className="flex items-center mb-2">
            <img
              className="w-8 h-8 rounded-full mr-2"
              src="https://via.placeholder.com/50"
              alt="Contact"
            />
            <span>Jane Smith</span>
          </li>
          {/* Add more contacts */}
        </ul>
      </aside>

      {/* Main chat area */}
      <main className="flex-1 p-4">
        <div className="bg-gray-300 p-4 rounded-lg mb-4">
          {/* Chat header */}
          <h2 className="text-lg font-bold mb-2">Chat with John Doe</h2>
          {/* Messages */}
          <div className="overflow-y-auto max-h-72">
            {/* Individual Messages */}
            <div className="flex flex-col mb-2">
              <span className="bg-blue-500 text-white rounded-lg py-1 px-3 max-w-xs">
                Hi there!
              </span>
              <span className="text-xs text-gray-500 self-end">10:00 AM</span>
            </div>
            {/* Add more messages */}
          </div>

          {/* Message input */}
          <div className="mt-4 flex items-center">
            <input
              type="text"
              placeholder="Type a message..."
              className="border rounded-full py-2 px-4 w-full"
            />
            <button className="ml-2 bg-blue-500 text-white rounded-full py-2 px-4">
              Send
            </button>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Chat;
