//get the seat numbers

function getSeatNumbers(elementId){
    const element  =document.getElementById(elementId);
    const getSeatValueText = element.innerText;
    const value = parseInt(getSeatValueText);
    return value;

}

function setSeatNumbers(elementId,value){
const element = document.getElementById(elementId);
element.innerText = value;


}

function highlightTickets(elementId){
const element = document.getElementById(elementId);
element.classList.add("bg-green-500","text-white");


}