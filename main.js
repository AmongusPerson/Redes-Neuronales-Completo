Webcam.attach('#camera')
camera = document.getElementById("camera");
Webcam.set({
    width: 300,
    height: 300,
    image_format: "png",
    png_quality: 360
});

function capturar() {
    Webcam.snap(function(data_uri) { document.
        getElementById("result").innerHTML = '<img id="selfie_image" src="'+data_uri+'"/>'; })
}

console.log('ml5 version:', ml5.version);
classifier = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/7A76gJBLv/model.json',modelLoaded);
  function modelLoaded() {
    console.log('Model Loaded!');
  }
  function check()
  {
    img = document.getElementById('selfie_image');
    classifier.classify(img, gotResult);
  }

function gotResult(error,results) {
    if (error) {
        console.log(error);
    } else {
        console.log(results);
        document.getElementById("span1").innerHTML=results[0].label;
        document.getElementById("span2").innerHTML=results[0].confidence.toFixed(3);
    }
}