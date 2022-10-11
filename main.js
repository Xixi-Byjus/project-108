function startClassification(){
    navigator.mediaDevices.getUserMedia({audio: true});
    classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/FzvTlY-H7/model.json', modelReady);}

    function modelReady(){
        navigator.mediaDevices.getUserMedia();
        navigator.mediaDevices.getUserMedia({audio: true});
    }

    function gotResults(error, results)
{
    if(error){
        console.error(error);

    }
    else{
        console.log(results);
        random_number_r = Math.floor(Math.random()* 255)+ 1;
        random_number_g = Math.floor(Math.random()* 255)+ 1;
        random_number_b = Math.floor(Math.random()* 255)+ 1;

        document.getElementById("result_label").innerHTML = 'I can hear - '+ results[0].label;
        document.getElementById("result_confidence").innerHTML = 'Accuracy - '+ (results[0].confidence*100).toFixed(2)+"%";
        document.getElementById("result_label").style.color = "rgb(" 
        +random_number_r +"," +random_number_g+","+random_number_r+")";
        document.getElementById("result_confidence").style.color = "rgb(" 
        +random_number_r +"," +random_number_g+","+random_number_r+")";

        img = document.getElementById('animal1');
        img1 = document.getElementById('animal2');
        img2 = document.getElementById('animal3');
        img3 = document.getElementById('animal4');

        if(results[0].label == "dog"){
            img.src = 'dog GIF.gif';
            img1.src = 'cat.jpg';
            img2.src = 'lion.webp';
            img3.src = 'cow.jpg';
        }
        else if(results[0].label == "cat"){
            img.src = 'dog.jpg';
            img1.src = 'cat Gif.gif';
            img2.src = 'lion.webp';
            img3.src = 'cow.jpg';
        }
        else if(results[0].label == "lion"){
            img.src = 'dog.jpg';
            img1.src = 'cat.jpg';
            img2.src = 'lion GIF.gif';
            img3.src = 'cow.jpg';
        }
        else if(results[0].label == "cow"){
            img.src = 'dog.jpg';
            img1.src = 'cat.jpg';
            img2.src = 'lion.webp';
            img3.src = 'cwo gif.gif';
        }
        
    }
}