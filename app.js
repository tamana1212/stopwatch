let hr = 0;
let min = 0;
let sec = 0;
let count = 0;

let timer = false;

const startTime = () => {
    timer = true;
    stopWatch();
}
const stopTime = () => {
    timer = false;
}

const resetTime = () => {
    timer = false;
     
      document.getElementById("count").innerHTML = "00";
        document.getElementById("sec").innerHTML = "00"
        document.getElementById("min").innerHTML = "00"
        document.getElementById("hour").innerHTML = "00"

} 


const stopWatch = () => {
    if(timer == true){
        count++;
        if(count == 59){
            sec++;
            count = 0;
        }
        if(sec == 59){
            min++;
            sec = 0;
        } if(min == 59){
            hr++;
            min = 0;    
            sec= 0;
        }

        let hrString = hr;
        let minString = min;
        let secString = sec;
        let countString = count;

        if(hr<10){
            hrString = "0" + hrString;
        }
        if(min<10){
            minString = "0" + minString  ;
        } if(sec<10){
            secString = "0" + secString;
        } if(count<10){
            countString = "0" + countString;
        }
        document.getElementById("count").innerHTML = countString;
        document.getElementById("sec").innerHTML = secString;
        document.getElementById("min").innerHTML = minString;
        document.getElementById("hour").innerHTML = hrString;


        setTimeout( "stopWatch()",10);
    } 
}