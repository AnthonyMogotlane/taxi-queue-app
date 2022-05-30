// DOM element references
let joinTheQueue = document.querySelector(".join_queue");
let leaveTheQueue = document.querySelector(".leave_queue");
let joinTheTaxiQueue = document.querySelector(".join_taxi_queue");
let taxiDepart = document.querySelector(".depart");

// create Factory Function instance
const taxiQueue = TaxiQueue();

// write your DOM code here.
// DOM events
//add to queue
joinTheQueue.addEventListener("click", () => {
    taxiQueue.joinQueue();
    counterTemplate(taxiQueue.queueLength(), ".passenger_content", ".passenger_container");
})
//remove from queue
leaveTheQueue.addEventListener("click", () => {
    taxiQueue.leaveQueue();
    counterTemplate(taxiQueue.queueLength(), ".passenger_content", ".passenger_container");
})
//add when a taxi joins the queue
joinTheTaxiQueue.addEventListener("click", () => {
    taxiQueue.joinTaxiQueue();
    counterTemplate(taxiQueue.taxiQueueLength(), ".taxi_content", ".taxi_container");
})


//handlebars counters templates function
function counterTemplate(theCount, contentClass, containerClass) {
    let counterTemplate = document.querySelector(contentClass).innerHTML;
    let counterTemplateFunc = Handlebars.compile(counterTemplate);
    let counterObj = {
        counter: theCount
    }
    document.querySelector(containerClass).innerHTML = counterTemplateFunc(counterObj)
}
counterTemplate(taxiQueue.queueLength(), ".passenger_content", ".passenger_container");
counterTemplate(taxiQueue.taxiQueueLength(), ".taxi_content", ".taxi_container");


