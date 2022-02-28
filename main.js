var recognition=window.webkitSpeechRecognition;
var synth=window.speechSynthesis;
speech=new recognition();
speech.start();
camera=document.getElementById("c");
Webcam.attach(camera);
Webcam.set({
    width: 360,
    height: 250,
    image_format: 'jpeg',
    jpeg_quality: 90
});
speech.onresult=function(event){
    console.log(event);
    if(hear(event)=="Go."){
        takeSelfie();
    }
}
function hear(e){
    console.log(e);
    return(e.results[0][0].transcript);
}
function speak(speech){
    var utterance=new SpeechSynthesisUtterance(speech);
    synth.speak(utterance);
}
function takeSelfie(){
    Webcam.snap(function(i){
        document.getElementById("o").innerHTML='<img id="i" src="'+i+'">';
    });
    document.getElementById("link").href=i;
    document.getElementById("link").click();
}
