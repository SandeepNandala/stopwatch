
// getting the seconds element from html
var secEle=document.getElementById('seconds');
// getting the milliseconds element from html
var milsEle=document.getElementById('milliseconds');
//getting the minutes element from html
var minEle=document.getElementById('minutes');



var startTimerEl=document.getElementById('start');// start button element
var stopTimerEl=document.getElementById('stop');//stop button element
var resetTimerEl=document.getElementById('reset');//reset button element

let secondsValue;//to perform the calculations of the seconds
let millisecondsValue;//to perform the calculations related to milliseconds
let minutesValue;//to perform the calucutions related to minutes
let timer;//this variable we will use to hold the setinterval return value

//this flag I'm using to stop the second setInterval while one setInterval method is running
let flag=true;


// this function is used to start the timer when the start button is clicked
function startTimer(event)
{
    if(flag)
    {
    timer=setInterval(() =>{
        
        millisecondsValue=parseInt(milsEle.innerText);//milliseconds value from the html
        secondsValue=parseInt(secEle.innerText);//seconds value from the html
        minutesValue=parseInt(minEle.innerText);//minutes value from the html

        // milliseconds value must be a number and checking wheather milliseconds less than
        //60 or not. if it is less than 60 then we will increment the milliseconds in timer
        //else if it is greater or equal to 60 we are increasing the seconds value and reseting
        //the milliseconds to zero.
        if(millisecondsValue!=NaN && millisecondsValue < 60)
        {
            millisecondsValue++;
            if(millisecondsValue<10)
            {
                //if value is less than 10 we will add zero before it
                milsEle.innerText="0"+millisecondsValue;
            }
            else
            milsEle.innerText=""+millisecondsValue;
        }
        else if(millisecondsValue!=NaN && millisecondsValue >=60)
        {
            // we are increasing the seconds value if the milliseconds are 60
            if(secondsValue!=NaN && secondsValue < 60)
            {
                secondsValue++;
                if(secondsValue<10)
                {
                    secEle.innerText="0"+secondsValue;
                }
                else
                secEle.innerText=""+secondsValue;
                
                //resetting the milliseconds to zero
                millisecondsValue=0;
                milsEle.innerText="0"+millisecondsValue;
            }

            //if the seconds reached the 60 then we are increasing the minutes timer
            //and resetting the milliseconds and seconds to zero.
            if(secondsValue!=NaN && secondsValue >=60)
            {
                if(minutesValue!=NaN)
                {
                    minutesValue++;
                    if(minutesValue<10)
                    {
                        minEle.innerText="0"+minutesValue;
                    }
                    else
                       minEle.innerText=""+minutesValue;

                    //resetting the milliseconds and seconds to zero
                    millisecondsValue=0;
                    milsEle.innerText="0"+millisecondsValue;  
                    secondsValue=0;
                    secEle.innerText="0"+secondsValue;
                }
            }
              
        }
    },10)//this inerval will run for every millisecond

    //to stop the setInterval rerun if the user clicks the start button two times.
    //if this flag was not set to false. if user clicks the start button twice then it 
    //will break the complete fuctionalities of stop watch.
    flag=false;
    event.stopPropagation();//to stop event propagation
}
}

//adding the click event listener to start button.
startTimerEl.addEventListener('click',startTimer);


function stopTimer(event)
{
    clearInterval(timer);//clearing the timer setInterval
    event.stopPropagation();
    flag=true;//setting the flag to true so user can start timer again   
}

function resetTimer(event)
{
    clearInterval(timer);//clearing the timer setInterval
    milsEle.innerText="00";//restting the milliseconds
    secEle.innerText="00";//resetting the seconds element
    minEle.innerText="00";//resetting the minutes element
    event.stopPropagation();
    flag=true;//setting the flag to true so user can start timer again
    
}
//when a user clicks the stop button the timer will stop.
stopTimerEl.addEventListener('click',stopTimer);

//when a user clicks the reset button the timer will stop and set it to zero
resetTimerEl.addEventListener('click',resetTimer);
