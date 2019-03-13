function displayWelcomeMessage(){
    let message = document.getElementById('inputMessage').value;
    document.getElementById('inputMessage').value = "";

    let elementP = document.getElementById('demo').innerHTML;
    document.getElementById('demo').innerHTML = message;
    console.log(elementP);
}

function keyPressed(){
    alert("Key pressed");
}

function changeStyle(){
    //console.log( document.getElementsByClassName('item')[0] );
    let color = document.getElementById('inputColor').value
    //document.getElementsByClassName('item')[0].style.backgroundColor = color;
    let divlerim = document.getElementsByTagName("div");
    divlerim[1].style.fontSize = "50px";
    console.log(divlerim);
    document.querySelector(".item").style.backgroundColor = color;
}

