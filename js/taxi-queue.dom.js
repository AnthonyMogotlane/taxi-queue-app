// DOM element references
let joinTheQueue = document.querySelector(".join_queue");
let leaveTheQueue = document.querySelector(".leave_queue");
let joinTheTaxiQueue = document.querySelector(".join_taxi_queue");
let depart = document.querySelector(".depart");

// create Factory Function instance
//initiate values from local storage
const taxiQueue = TaxiQueue(JSON.parse(localStorage.getItem("people-queue")), JSON.parse(localStorage.getItem("taxi-queue")));

//write your DOM code here.
// DOM events
//add to queue
joinTheQueue.addEventListener("click", () => {
    taxiQueue.joinQueue();
    counterTemplate(taxiQueue.queueLength(), ".passenger_content", ".passenger_container");
    localStorage.setItem("people-queue", JSON.stringify(taxiQueue.queueLength()));
})
//remove from queue
leaveTheQueue.addEventListener("click", () => {
    taxiQueue.leaveQueue();
    counterTemplate(taxiQueue.queueLength(), ".passenger_content", ".passenger_container");
    localStorage.setItem("people-queue", JSON.stringify(taxiQueue.queueLength()))
})
//add when a taxi joins the queue
joinTheTaxiQueue.addEventListener("click", () => {
    taxiQueue.joinTaxiQueue();
    counterTemplate(taxiQueue.taxiQueueLength(), ".taxi_content", ".taxi_container");
    localStorage.setItem("taxi-queue", JSON.stringify(taxiQueue.taxiQueueLength()));
})
//depart event button
depart.addEventListener("click", () => {
    taxiQueue.taxiDepart();

    counterTemplate(taxiQueue.queueLength(), ".passenger_content", ".passenger_container");
    counterTemplate(taxiQueue.taxiQueueLength(), ".taxi_content", ".taxi_container");

    localStorage.setItem("taxi-queue", JSON.stringify(taxiQueue.taxiQueueLength()));
    localStorage.setItem("people-queue", JSON.stringify(taxiQueue.queueLength()));
})

//handlebars counters templates function
function counterTemplate(theCount, contentClass, containerClass) {
    let counterTemplate = document.querySelector(contentClass).innerHTML;
    let counterTemplateFunc = Handlebars.compile(counterTemplate);
    let counterObj = {
        counter: theCount
    }
    document.querySelector(containerClass).innerHTML = counterTemplateFunc(counterObj);
}
counterTemplate(taxiQueue.queueLength(), ".passenger_content", ".passenger_container");
counterTemplate(taxiQueue.taxiQueueLength(), ".taxi_content", ".taxi_container");


