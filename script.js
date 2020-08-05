document.getElementById('notify1').style.display = 'none';
document.getElementById('notify2').style.display = 'none';

document.getElementById('generate-btn').addEventListener('click', function() {
    var randomNumber = Math.round(Math.random() * 9999);
    console.log(randomNumber);

    document.getElementById('generated-pin').value = randomNumber;
})
var button = document.getElementsByClassName('button');
for(var i = 0; i < button.length; i++) {
    var pin = document.getElementById('submit-pin').value;
    button[i].addEventListener('click', function() {
        // console.log('pressed' + this.id);
        pin = pin + this.id;
        printPin(pin);    
    })
}

document.getElementById('submit-btn').addEventListener('click', function() {
    var submittedPin = document.getElementById('submit-pin').value;
    console.log('submitted pin:' + submittedPin);
    var generatedPin = document.getElementById('generated-pin').value;
    console.log('generated pin:' + generatedPin);

    if(submittedPin === generatedPin) {
        // console.log('pin matched!!!');
        document.getElementById('notify2').style.display = 'block';
    }
    else {
        // console.log('pin not matched!!!');
        document.getElementById('notify1').style.display = 'block';
    }
})

function printPin(pin) {
    document.getElementById('submit-pin').value = pin;
}