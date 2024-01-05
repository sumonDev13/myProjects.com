import { useState } from 'react';

const Chat = () => {
  const [messages, setMessages] = useState([
    { id: 1, text: 'Hi there!', sender: 'John Doe', time: '10:00 AM' },
    { id: 2, text: 'Hey! How are you?', sender: 'Jane Smith', time: '10:05 AM' },
    // Add more messages as needed
  ]);

  const [inputText, setInputText] = useState('');

  const sendMessage = () => {
    if (inputText.trim() === '') return;

    const newMessage = {
      id: messages.length + 1,
      text: inputText,
      sender: 'John Doe', // Assuming the user sending the message is 'John Doe'
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
    };

    setMessages([...messages, newMessage]);
    setInputText('');
  };

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
            {messages.map((message) => (
              <div
                key={message.id}
                className={`flex flex-col mb-2 ${
                  message.sender === 'John Doe' ? 'self-end items-end' : 'items-start'
                }`}
              >
                <span
                  className={`${
                    message.sender === 'John Doe' ? 'bg-blue-500 text-white' : 'bg-gray-200'
                  } rounded-lg py-1 px-3 max-w-xs`}
                >
                  {message.text}
                </span>
                <span className="text-xs text-gray-500">{message.time}</span>
              </div>
            ))}
          </div>

          {/* Message input */}
          <div className="mt-4 flex items-center">
            <input
              type="text"
              placeholder="Type a message..."
              className="border rounded-full py-2 px-4 w-full"
              value={inputText}
              onChange={(e) => setInputText(e.target.value)}
            />
            <button
              onClick={sendMessage}
              className="ml-2 bg-blue-500 text-white rounded-full py-2 px-4"
            >
              Send
            </button>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Chat;
