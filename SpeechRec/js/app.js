window.SpeechRecognition=window.SpeechRecognition||window.webkitSpeechRecognition;
let recognition=new SpeechRecognition();
let words=document.getElementById("template");
// recognition.addEventListener('result',(e) => {
// // console.log(e);
// let transcript=e.results[0][0].transcript;
// console.log(transcript);
// });//mouse ,form,speech ,sumbit events to using this one 
// console.log(recognition);
// recognition.start();//Red mark
let p=document.createElement("p");
words.appendChild(p);
recognition.addEventListener("result",e=>{
    let transcript=[...e.results]
    .map(result=>result[0])
    .map(result=>result.transcript)
    .join("");
    // console.log(transcript);
    // console.log(typeof transcript);
    // console.log(Array.isArray(transcript));
    p.textContent=transcript;
    if(e.results[0].isFinal){
        p=document.createElement("p");
        words.appendChild(p);
    }
});
recognition.addEventListener("end",recognition.start);
   recognition.start(); 
