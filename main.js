var SpeechRecognition = window.webkitSpeechRecognition;
var recogniton = new SpeechRecognition();

function start() {
    document.getElementById("textbox").innerHTML="";
    recogniton.start();
}

recogniton.onresult = function (event){
    console.log(event);
    var content = event.results[0][0].transcript;
    document.getElementById("textbox").innerHTML=content;
    speak();
}

function speak() {
    var synth = window.speechSynthesis;
    var speak_data = document.getElementById("textbox").value;
    var utterThis = new SpeechSynthesisUtterance(speak_data);
    synth.speak(utterThis);
    Webcam.attach(camera);
}

Webcam.set({
    width:360,
    height:250,
    image_format:'png',
    png_quality:90
});

var camera = document.getElementById("camera");