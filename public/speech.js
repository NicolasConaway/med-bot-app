


const msgEl = document.getElementById('msg');
const start = document.getElementById('mic-start');
const stop = document.getElementById('mic-stop')

//initalize a speech recognition object
window.SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition

//Create a variable to work with Speech Recognition Object
let recognition = new window.SpeechRecognition();

//Listen for the result event
recognition.addEventListener('result', onSpeak);

//Create onSpeak function
function onSpeak(e) {
    console.log(e);
    const msg = e.results[0][0].transcript;
    console.log(msg);
writeMessage(msg);
}

// Start when Microphone is clicked
start.addEventListener('click', () =>{
    recognition.start();
})

// Stop when stop mic is clicked
stop.addEventListener('click', ()=>{
    recognition.stop();
})

//display msg to screen
function writeMessage(msg) {
    msgEl.innerHTML = `
        <span class="box"> ${msg} </span>`;
}

function synthVoice(text) {
    const synth = window.speechSynthesis;
    const utterance = new SpeechSynthesisUtterance();
    utterance.text = text;
    synth.speak(utterance);
  }