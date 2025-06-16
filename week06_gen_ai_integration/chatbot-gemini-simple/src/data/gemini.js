const createChat = async prompt => {
  const response = await fetch('http://localhost:5050/chat', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ message: prompt })
  });
  if (!response.ok) {
    // If the response is not ok, throw an error by parsing the JSON response
    const { error } = await response.json();
    throw new Error(error || 'Something went wrong');
  }

  const data = await response.json();

  return data;
};

const getChatHistory = async chatId => {
  const response = await fetch(`http://localhost:5050/chat/${chatId}`);
  if (!response.ok) {
    // If the response is not ok, throw an error by parsing the JSON response
    const { error } = await response.json();
    throw new Error(error || 'Something went wrong');
  }

  const data = await response.json();

  return data;
};

export { createChat, getChatHistory };
