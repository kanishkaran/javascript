const messagesDiv = document.getElementById("messages");
const inputField = document.getElementById("user-input");
const sendBtn = document.getElementById("send-btn");

sendBtn.addEventListener("click", sendMessage);
inputField.addEventListener("keypress", function (e) {
  if (e.key === "Enter") sendMessage();
});

function sendMessage() {
  const text = inputField.value.trim();
  if (!text) return;
  addMessage( text, "user");
  inputField.value = "";
  simulateIncoming();
}

function addMessage(text, type) {
  const msg = document.createElement("div");
  msg.classList.add("message", type);
  const timestamp = new Date().toLocaleTimeString();
  msg.innerHTML = `<div>${text}</div><span class="timestamp">${timestamp}</span>`;
  messagesDiv.appendChild(msg);
  messagesDiv.scrollTop = messagesDiv.scrollHeight;
}

function simulateIncoming() {
  setTimeout(() => {
    const replies = [
      "Hi there!",
      "Need help with something?",
      "Interesting point!",
      "Please continue...",
      "Got it!"
    ];
    const randomReply = replies[Math.floor(Math.random() * replies.length)];
    addMessage( randomReply, "bot");
  }, 1000 + Math.random() * 2000);
}
