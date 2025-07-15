const answers = [
  "Interesting!",
  "Tell me more.",
  "I'm a bot, but that sounds cool!",
  "Could you explain that a bit?",
  "Why do you think that?"
];

function getRandomAnswer(): string {
  return answers[Math.floor(Math.random() * answers.length)];
}

export default getRandomAnswer;

