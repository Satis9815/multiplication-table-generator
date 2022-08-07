let generateBtn=document.getElementById('generateBtn');
generateBtn.addEventListener('click',multiplication);
function multiplication(e){
    let num=document.getElementById('text');
    let typeValue=(Math.abs(num.value));
     if(typeValue==0){
        console.log("Plese enter the number");
        alert("Please enter the number first")
    }
    else{
    let val=document.getElementById('table');
        val.innerHTML=`
        <h2 style="font-family: consolas">Your multiplication table of ${typeValue} is given below</h2>
        <p style="font-size:25px;">${typeValue} X ${1} = ${typeValue*1}</p>
        <p style="font-size:25px;">${typeValue} X ${2} = ${typeValue*2}</p>
        <p style="font-size:25px;">${typeValue} X ${3} = ${typeValue*3}</p>
        <p style="font-size:25px;">${typeValue} X ${4} = ${typeValue*4}</p>
        <p style="font-size:25px;">${typeValue} X ${5} = ${typeValue*5}</p>
        <p style="font-size:25px;">${typeValue} X ${6} = ${typeValue*6}</p>
        <p style="font-size:25px;">${typeValue} X ${7} = ${typeValue*7}</p>
        <p style="font-size:25px;">${typeValue} X ${8} = ${typeValue*8}</p>
        <p style="font-size:25px;">${typeValue} X ${9} = ${typeValue*9}</p>
        <p style="font-size:25px;">${typeValue} X ${10} = ${typeValue*10}</p>
        `
    }
}

setInterval(showTime, 1000);
function showTime() {
  let time = new Date();
  let hour = time.getHours();
  let min = time.getMinutes();
  let sec = time.getSeconds();
  am_pm = "AM";

  if (hour > 12) {
    hour -= 12;
    am_pm = "PM";
  }
  if (hour == 0) {
    hr = 12;
    am_pm = "AM";
  }

  hour = hour < 10 ? "0" + hour : hour;
  min = min < 10 ? "0" + min : min;
  sec = sec < 10 ? "0" + sec : sec;

  let currentTime = hour + ":" + min + ":" + sec + am_pm;

  document.getElementById("clock").innerHTML = currentTime;
}
showTime();