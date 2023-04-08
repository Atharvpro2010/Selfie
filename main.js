var SpeechRecognition = window.webkitSpeechRecognition;
var recognition = new SpeechRecognition();
function start()
{
    document.getElementById("text").innerHTML="";
recognition.start();
}
recognition.onresult = function(event){
    console.log(event);
    var Content = event.results[0][0].transcript;
    console.log(Content);
    document.getElementById("text").innerHTML=Content;
    if(Content == "take my selfie")
    {
        console.log("Taking your selfie - -- --- ");
        speak();
    }
    
}
function speak()
{
    var synth = window.speechSynthesis;
    speak_data = "Taking your selfie in 5 seconds";
    var utterThis = new SpeechSynthesisUtterance(speak_data);
    synth.speak(utterThis);
    Webcam.attach(camera);
    setTimeout(function()
 {   
        Takesnapshot();
        save();
},5000);
}
camera = document.getElementById("camera");
Webcam.set({
    width: 300,
    height: 250,
    image_format : "png",
    png_quality : 90
});
function Takesnapshot()
{
    Webcam.snap(function (data_uri){
        document.getElementById("result").innerHTML='<img id="selfie_image" src="'+data_uri+'"/>';  
    }); 
}
function save()
{
    link = document.getElementById("link");
    image = document.getElementById("selfie_image").src;
    link.href = image;
    link.click();
}