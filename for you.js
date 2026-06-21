const messages = [
  "My Love, I spent all night thinking about what to write, and the truth is that no collection of words can undo the hurt I caused you. I know I've broken promises — not once, not twice, but enough times that my words lost their meaning. That is the part that hurts me the most. The person who was supposed to make you feel safe became the reason you felt disappointed, exhausted, and unable to trust. You gave me chances I didn't deserve. You believed in me when I gave you reasons not to. You stayed when walking away would have been easier. And instead of protecting your heart, I wounded it. I know that every apology sounds empty when it comes from someone who has already broken their word. That's why I'm not asking you to believe anything I say today. I'm not asking you to trust me because trust is not something I can ask for anymore. It's something I destroyed, and something only time and actions can rebuild. What I need you to know is that I truly see your pain now. I see every tear, every sleepless night, every moment you questioned your worth because of things I did. And if I could go back and take all of that pain away from you, I would do it without hesitation. You are one of the most beautiful parts of my life, and knowing that I became a source of sadness in yours is a feeling I carry every day. Maybe you don't believe my words anymore, and honestly, I understand why. But even if you doubt everything else, please don't doubt this: I loved you, I love you, and I will always regret the moments when my actions failed to show it. You deserved consistency. You deserved honesty. You deserved someone who kept every promise. And I am sorry for every moment I was not that person. If one day you find it in your heart to forgive me, I will be grateful. If you can't, I will still understand. Because love is not proven by apologies; it's proven by the way we treat the people we love, and I know I failed you there. I am sorry aya."
];

function nextMessage() {
  const messageElement = document.getElementById('message');
  if (messageElement) {
    messageElement.textContent = messages[0];
  }

  const responseSection = document.getElementById('response');
  if (responseSection) {
    responseSection.classList.remove('hidden');
  }

  const audio = document.getElementById('bg-audio');
  if (audio) {
    audio.volume = 0.3;
    audio.play().catch(() => {
      // Browser may block autoplay, but this click should allow it.
    });
  }
}

function showPromise() {
  const promiseElement = document.getElementById('promise');
  if (promiseElement) {
    promiseElement.textContent = "I promise to be honest, patient, and to show you every day that I am changing for the better. I will listen more, keep my word, and protect your heart like it deserves.";
  }
}

function answerYes() {
  const answerText = document.getElementById('answerText');
  if (answerText) {
    answerText.textContent = "Thank you, baby. I will spend every day showing you I deserve your trust again,i love you so much aya.";
    answerText.style.color = '#1b5e47';
  }
}

function answerNo() {
  const answerText = document.getElementById('answerText');
  if (answerText) {
    answerText.textContent = "I understand. I will keep working to earn your trust back, but please hurry up.haha is that what u wanted me to say? no ya cuta go choose the yes button go";
    answerText.style.color = '#7f1f3a';
  }
}

function dodgeNoButton() {
  const noButton = document.getElementById('noButton');
  if (!noButton) return;
  const parent = noButton.parentElement;
  const maxOffset = 120;
  const x = Math.random() * maxOffset - maxOffset / 2;
  const y = Math.random() * maxOffset - maxOffset / 2;
  noButton.style.transform = `translate(${x}px, ${y}px)`;
}
