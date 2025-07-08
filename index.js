// Javascript is Synchronous
// Javascript doesn't wait for the transaction to fully complete before moving to the nextline


// console.log("1. Launching the browser and opening IRCTC")
// console.log("2. Enter the credentials")
// console.log("3. Navigating to ticket booking")
// setTimeout(()=>{
// console.log("4. making payment in hdfc bank")
// },3000)
// console.log("5. book a ticket")

//Learning Promises

// const currencyapi = "https://restcountries.com/v3.1/currency/inr"
// const response =  fetch(currencyapi)
// console.log(response)

const cart = ["shoes", "kurta", "socks"]

// step1:

// api.createOrder(cart)
// api.proceedtopayment()

// api.createorder(cart,function(){
//     api.proceedtopayment()
// })
// api.proceedtopayment(function(){
//     api.showordersummary()
// })
// api.showordersummary(){
//     api.updatewallet()
// }

// Synchronous steps (happen instantly)
console.log("1. Open IRCTC website")
console.log("2. Enter the Login credentials")
console.log("3. Navigate to tatkal booking")
// Asynchronous simulation using setTimeout
setTimeout(()=>{
console.log("4. Selecting train & filling passenger details (takes time...")    
}, 2000)

//Promises

function bookTatkalTicket(isAvailable){

       return new Promise((resolve, reject)=>{
            console.log("5. Trying to book tatkal ticket")
            setTimeout(()=>{
                if(isAvailable){
                    resolve("Ticket booked successfully")
                }
                else
                {
                    reject("Booking failed! Tatkal quota is full")
                }
            },3000)
        })

}

const isTicketAvailable = false
bookTatkalTicket(isTicketAvailable)
.then((message)=>{
    console.log("6." , message)
    console.log("7. Payment done E-ticket received")
})
.catch((error) =>{
    console.log("6.", error)
    console.log("7., Try General quota or wait list")
})

