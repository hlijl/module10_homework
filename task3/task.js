const messageInput = document.getElementById('messageInput');
const sendButton = document.getElementById('sendButton');
const geoButton = document.getElementById('geoButton'); 
const chat = document.getElementById('chat');

const socket = new WebSocket('wss://echo-ws-service.herokuapp.com');

sendButton.addEventListener('click', () => {
  const message = messageInput.value;
  socket.send(message);
  displayMessage(message, 'sent');
  messageInput.value = '';
});

geoButton.addEventListener('click', () => {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(position => {
      const geoLink = `https://www.openstreetmap.org/#map=18/${position.coords.latitude}/${position.coords.longitude}`;
      displayMessage(geoLink, 'sent');
      socket.send(geoLink);
    });
  }
});

socket.addEventListener('message', (event) => {
  const message = event.data;
  displayMessage(message, 'received'); 
});

function displayMessage(message, type) {
  const messageElement = document.createElement('p');
  messageElement.textContent = message;
  messageElement.classList.add(type);
  chat.appendChild(messageElement);
}
