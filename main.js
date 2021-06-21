// QUESTIONS
const questions = [
  "What’s The Most Beautiful Place You’ve Ever Seen?",
  "What’s Your Favorite TV Show?",
  "What’s Your Favorite Sports Team?",
  "What’s Your Favorite Movie?",
  "What Would You Do With 10 Million Dollars?",
  "Spontaneity Or Stability?",
  "Do You Save Or Spend?",
  "What’s Your Worst Habit?",
  "Do you think that aliens exist?",
  "What’s wrong but sounds right?",
  "What food is delicious but a pain to eat?",
  "Who was your craziest / most interesting teacher",
  "How do you judge a person?",
  "Which celebrity or band has the worst fan base?",
  "What game have you spent the most hours playing?",
  "Do you eat food that’s past its expiration date if it still smells and looks fine?",
  "When was the last time you face palmed?",
  "What was your most recent lie?",
  "What word is a lot of fun to say?",
  "What’s the scariest non-horror movie?",
  "What’s your secret talent?",
  "If you were a clown themed super hero, what powers would you have?",
  "What escalated very quickly?",
  "If you owned a restaurant, what kind of food would it serve?",
];

// QUERY SELECTORS
const msgPage = document.querySelector(".msg-page");

const receivedChats = document.querySelector(".received-chats");
const receivedChatsImg = document.querySelector(".received-chats-img");
const receivedMsg = document.querySelector(".received-msg");
const receivedMsgInbox = document.querySelector(".received-msg-inbox");

const active = document.querySelector(".active h6");
const input = document.querySelector(".form-control");
const button = document.querySelector(".fa-paper-plane");
const time = document.querySelector(".time");

// FUNCTIONS
function goToBottom() {
  msgPage.scrollTop = msgPage.scrollHeight - msgPage.clientHeight;
}

setTimeout(() => {
  const today = new Date();
  const seconds =
    today.getSeconds() < 10 ? "0" + today.getSeconds() : today.getSeconds();
  const minutes =
    today.getMinutes() < 10 ? "0" + today.getMinutes() : today.getMinutes();
  const hours =
    today.getHours() < 10 ? "0" + today.getHours() : today.getHours();
  const day = today.getDate();
  const month = today.getMonth() + 1;
  const year = today.getFullYear();
  const date = `<strong>${hours}:${minutes}:${seconds}</strong> - ${day}/${month}/${year}`;

  active.innerHTML = "active now";
  const index = Math.floor(Math.random() * questions.length);
  const randomQuestion = questions[index];

  const imgSmall = document.createElement("img");
  imgSmall.className = "photo-small";
  imgSmall.setAttribute("src", "assets/FilipHR.png");
  receivedChatsImg.appendChild(imgSmall);

  const text = document.createElement("p");
  receivedMsgInbox.appendChild(text);
  text.innerHTML = randomQuestion;

  const time = document.createElement("span");
  time.className = "time";
  receivedMsgInbox.appendChild(time);
  time.innerHTML = date;
}, 1500);

const outgoingEnter = (e) => {
  if (e.keyCode === 13) {
    if (input.value) {
      const today = new Date();
      const seconds =
        today.getSeconds() < 10 ? "0" + today.getSeconds() : today.getSeconds();
      const minutes =
        today.getMinutes() < 10 ? "0" + today.getMinutes() : today.getMinutes();
      const hours =
        today.getHours() < 10 ? "0" + today.getHours() : today.getHours();
      const day = today.getDate();
      const month = today.getMonth() + 1;
      const year = today.getFullYear();
      const date = `<strong>${hours}:${minutes}:${seconds}</strong> - ${day}/${month}/${year}`;

      const outgoingChats = document.createElement("div");
      outgoingChats.className = "outgoing-chats";
      msgPage.appendChild(outgoingChats);

      const outgoingChatsMsg = document.createElement("div");
      outgoingChatsMsg.className = "outgoing-chats-msg";
      outgoingChats.appendChild(outgoingChatsMsg);

      const inputValue = input.value;
      const text = document.createElement("p");
      outgoingChatsMsg.appendChild(text);
      text.innerHTML = inputValue;

      const time = document.createElement("span");
      time.className = "time";
      outgoingChatsMsg.appendChild(time);
      time.innerHTML = date;

      const outgoingChatsImg = document.createElement("div");
      outgoingChatsImg.className = "outgoing-chats-img";
      outgoingChats.appendChild(outgoingChatsImg);

      const imgSmall = document.createElement("img");
      imgSmall.className = "photo-small";
      imgSmall.setAttribute("src", "assets/user.png");
      outgoingChatsImg.appendChild(imgSmall);

      input.value = "";

      goToBottom();
      receive();
    }
  }
};

const outgoingClick = () => {
  if (input.value) {
    const today = new Date();
    const seconds =
      today.getSeconds() < 10 ? "0" + today.getSeconds() : today.getSeconds();
    const minutes =
      today.getMinutes() < 10 ? "0" + today.getMinutes() : today.getMinutes();
    const hours =
      today.getHours() < 10 ? "0" + today.getHours() : today.getHours();
    const day = today.getDate();
    const month = today.getMonth() + 1;
    const year = today.getFullYear();
    const date = `<strong>${hours}:${minutes}:${seconds}</strong> - ${day}/${month}/${year}`;

    const outgoingChats = document.createElement("div");
    outgoingChats.className = "outgoing-chats";
    msgPage.appendChild(outgoingChats);

    const outgoingChatsMsg = document.createElement("div");
    outgoingChatsMsg.className = "outgoing-chats-msg";
    outgoingChats.appendChild(outgoingChatsMsg);

    const inputValue = input.value;
    const text = document.createElement("p");
    outgoingChatsMsg.appendChild(text);
    text.innerHTML = inputValue;

    const time = document.createElement("span");
    time.className = "time";
    outgoingChatsMsg.appendChild(time);
    time.innerHTML = date;

    const outgoingChatsImg = document.createElement("div");
    outgoingChatsImg.className = "outgoing-chats-img";
    outgoingChats.appendChild(outgoingChatsImg);

    const imgSmall = document.createElement("img");
    imgSmall.className = "photo-small";
    imgSmall.setAttribute("src", "assets/user.png");
    outgoingChatsImg.appendChild(imgSmall);

    input.value = "";

    goToBottom();
    receive();
  }
};

const receive = () => {
  active.innerHTML = "is typing...";

  setTimeout(() => {
    const today = new Date();
    const seconds =
      today.getSeconds() < 10 ? "0" + today.getSeconds() : today.getSeconds();
    const minutes =
      today.getMinutes() < 10 ? "0" + today.getMinutes() : today.getMinutes();
    const hours =
      today.getHours() < 10 ? "0" + today.getHours() : today.getHours();
    const day = today.getDate();
    const month = today.getMonth() + 1;
    const year = today.getFullYear();
    const date = `<strong>${hours}:${minutes}:${seconds}</strong> - ${day}/${month}/${year}`;

    active.innerHTML = "active now";

    const index = Math.floor(Math.random() * questions.length);
    const randomQuestion = questions[index];

    const receivedChats = document.createElement("div");
    receivedChats.className = "received-chats";
    msgPage.appendChild(receivedChats);

    const receivedChatsImg = document.createElement("div");
    receivedChatsImg.className = "received-chats-img";
    receivedChats.appendChild(receivedChatsImg);

    const imgSmall = document.createElement("img");
    imgSmall.className = "photo-small";
    imgSmall.setAttribute("src", "assets/FilipHR.png");
    receivedChatsImg.appendChild(imgSmall);

    const receivedMsg = document.createElement("div");
    receivedMsg.className = "received-msg";
    receivedChats.appendChild(receivedMsg);

    const receivedMsgInbox = document.createElement("div");
    receivedMsgInbox.className = "received-msg-inbox";
    receivedMsg.appendChild(receivedMsgInbox);

    const text = document.createElement("p");
    receivedMsgInbox.appendChild(text);
    text.innerHTML = randomQuestion;

    const time = document.createElement("span");
    time.className = "time";
    receivedMsgInbox.appendChild(time);
    time.innerHTML = date;

    goToBottom();
  }, 2500);
};

//LISTENERS
button.addEventListener("click", outgoingClick);
window.addEventListener("keypress", outgoingEnter);
