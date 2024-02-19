let totalPrice = 0;
let ticketCount = 0;

const applyButton  = document.getElementById('apply-btn');
applyButton.disabled = true; 
//disable next button
const nextButton = document.getElementById("next-btn");
nextButton.disabled = true;

const badges =document.querySelectorAll(".badge");


for (let index = 0; index < badges.length; index++) {
    const badge = badges[index];
   

    badge.addEventListener("click", function(){
// Check if maximum number of tickets have been selected
        if (ticketCount >= 4) {

    alert("You can only select up to 4 tickets.");
            return;
        }

    
// Check if the badge has already been clicked
if (this.classList.contains("disabled")) {
    alert("This ticket has already been selected.");
    return;
}

const title = this.innerText;




const titleContainer = document.getElementById('seat');
    const p = document.createElement('p');
    p.innerText =title;
p.classList.add(".badge", "text-gray-400","text-xl", "font-normal");
    titleContainer.appendChild(p);
    const titleClass = document.getElementById('class');
    const p1 = document.createElement('p');
    p1.innerText ="Economy";
p1.classList.add(".badge", "text-gray-400","text-xl","font-normal");
    titleClass.appendChild(p1);

    const PriceContainer = document.getElementById('price');
    const p3 = document.createElement('p');
    p3.innerText =parseInt("550");

p3.classList.add(".badge", "text-gray-400","text-xl","font-normal");
PriceContainer.appendChild(p3);

totalPrice += 550;
    console.log(totalPrice);
    const totalPriceElement = document.getElementById('total-price');
    totalPriceElement.innerText = totalPrice;
handleByKeyboardPress(ticketCount);

const grandTotal= document.getElementById('grand-total');

grandTotal.innerText =totalPrice;
ticketCount++;

this.classList.add("disabled");
// Remove click event listener to disable further clicks
this.removeEventListener("click", arguments.callee);
//enable buttons
if (ticketCount >= 4) {
    applyButton.disabled = false; 
}
if(ticketCount > 0){
    nextButton.disabled = false;
}
    }
    )
    
}
const buyTicket = document.getElementById("buy-ticket").addEventListener("click", function(){
    const showTicket = document.getElementById("ticket-section");
showTicket.scrollIntoView({ behavior: 'smooth' });
});


function handleByKeyboardPress(event){

const selectedTicket = event.key;
 const currentTicketSelect = document.getElementById('ticket-container');


 if(ticketCount > 4){
    alert("Cannot select more than 4 tickets");
    return;
    }
    
    const currentSeatAvailable = getSeatNumbers('total-seats');
    const newSeatAvailable = currentSeatAvailable -1;
    setSeatNumbers('total-seats', newSeatAvailable);

    const selectedSeat = getSeatNumbers('select-seat');
    const newSeat = selectedSeat + 1;
    setSeatNumbers('select-seat',newSeat);

    
}




applyButton.addEventListener("click", function(){

    const couponCode = document.getElementById('input-field').value;
     

       if (totalPrice >= 2200) {
        if (couponCode === 'NEW15') {
            const discountElement = document.getElementById('discount-price');

            console.log(discountElement)
            const discount = totalPrice * 0.15;
            discountElement.innerText = discount;

             
            // Hide apply button
            const couponField = document.getElementById("coupon-field");
            couponField.classList.add("hidden");
            // Grand total
            const grandTotal = document.getElementById("grand-total");
            const grandTotalText = totalPrice - discount;
            grandTotal.innerText = grandTotalText;
            document.getElementById('input-field').value = "";
            return grandTotalText;
        } else if (couponCode === 'Couple 20') {
           
            const discountElement = document.getElementById('discount-price');
            const discount = totalPrice * 0.20;
            discountElement.innerText = discount;
            
            // Hide apply button
            const couponField = document.getElementById("coupon-field");
            couponField.classList.add("hidden");
            // Grand total
            const grandTotal = document.getElementById("grand-total");
            const grandTotalText = totalPrice - discount;
            grandTotal.innerText = grandTotalText;
            document.getElementById('input-field').value = "";
            return grandTotalText
        } else {
            
            alert("Invalid coupon code.")
        }
    }
    
})

function showModal(){
 const show =   document.getElementById("modal");
 
show.classList.remove("hidden");
const main = document.getElementById("main");
main.classList.add("hidden")
}
function returnHome(){
    const returnHome = document.getElementById("main");
    returnHome.classList.remove("hidden")
    const show = document.getElementById("modal");
    show.classList.add("hidden");
    
}

 function displayDiscount(){
    const displayDiscount = document.getElementById("discountPrice");
    displayDiscount.classList.remove("hidden");
 }