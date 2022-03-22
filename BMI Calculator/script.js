// هنا سوف تنشئ دالة calculate 
function calculate() {
let weight = document.getElementById("weight").value;
let hight = document.getElementById("hight").value;


let BMI = weight/(hight*hight);
let status = " ";


if (hight== "" || weight== "") {
    alert ("you forgot to enter your info");
    return;
}

if (BMI <18.5){
    status= "تعاني من نقص في الوزن";
} else if (BMI <25) {
    status= "وزنك صحي";
} else if (BMI < 30){
    status= "تعاني من زيادة في الوزن";
} else {
    status = "تعاني من السمنة المفرطة";
}


BMI = BMI.toFixed(2);
document.getElementById("result").innerHTML = BMI;
document.getElementsByClassName("comment")[0].innerHTML = status;
}