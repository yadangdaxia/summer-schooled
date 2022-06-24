// console.log("HELLO JS FILE!")

const responses = ["It is quite likely!", "I am not sure about that.", "Definitely!", "I don't think so.", "No way!", "Probably.", "Ask me again later, I'm tired now"];

let askButton = document.getElementById('ask-button');

askButton.addEventListener('click', () => {
  // console.log("Clicked!")
  let autoReply = responses[Math.floor(Math.random() * responses.length)];
  // console.log(autoReply)

  let answerArea = document.getElementById('answer-area');

  answerArea.innerText = autoReply;

  answerArea.animate([{ opacity: 0 }, { opacity: 1 }], {
    duration: 1000,
  });

})
