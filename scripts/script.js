let totalPrice = 0;
let ticketCount = 0;

const badges =document.querySelectorAll(".badge");

for (let index = 0; index < badges.length; index++) {
    const badge = badges[index];
   

    badge.addEventListener("click", function(){
// Check if maximum number of tickets have been selected
        if (ticketCount >= 4) {
            
            alert("You can only select up to 4 tickets.");
            return;
        }

    
const title = badge.innerText;



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
    }
    
    const currentSeatAvailable = getSeatNumbers('total-seats');
    const newSeatAvailable = currentSeatAvailable -1;
    setSeatNumbers('total-seats', newSeatAvailable);

    const selectedSeat = getSeatNumbers('select-seat');
    const newSeat = selectedSeat + 1;
    setSeatNumbers('select-seat',newSeat);

    
}

const applyButton  = document.getElementById('apply-btn');
applyButton.addEventListener("click", function(){

    const couponElement = document.getElementById('input-field').value;
       const couponCode = couponElement.split(' ').join('').toUpperCase();

       if (totalPrice >= 2200) {
        if (couponCode === 'NEW15') {
            const discountElement = document.getElementById('discount-price');
            const discount = totalPrice * 0.15;
            discountElement.innerText = discount;
            discountElement.classList.remove("hidden");
            // Hide apply button
            const couponField = document.getElementById("coupon-field");
            couponField.classList.add("hidden");
            // Grand total
            const grandTotal = document.getElementById("grand-total");
            const grandTotalText = totalPrice - discount;
            grandTotal.innerText = grandTotalText;
            document.getElementById('input-field').value = "";
            return grandTotalText;
        } else if (couponCode === 'COUPLE20') {
            console.log("clicked")
            const discountElement = document.getElementById('discount-price');
            const discount = totalPrice * 0.20;
            discountElement.innerText = discount;
            discountElement.classList.remove("hidden");
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


 