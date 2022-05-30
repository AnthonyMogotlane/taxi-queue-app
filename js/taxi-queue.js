function TaxiQueue(queue, taxiQueue) {
	//variables
	let theQueue = queue ? queue : 0;
	let theTaxiQueue = taxiQueue ? taxiQueue : 0;
	//increment the people queue count
	const joinQueue = () => theQueue++;
	//decrement the count when a person leave the queue
	const leaveQueue = () => {
		if(theQueue > 0) {
			theQueue--;
		}
	}
	
	//increment taxi queue count
	const joinTaxiQueue = () => theTaxiQueue++;

	//get the length of the people on the queue
	const queueLength = () => theQueue;
	//get the length of the people on the queue
	const taxiQueueLength = () => theTaxiQueue;

	//taxi should depart if the conditions are met
	function taxiDepart(){
		if(theQueue >= 12) {
			if(theTaxiQueue > 0) {
				theQueue -= 12;
				theTaxiQueue -= 1;
			}
		}
	}

	return {
		joinQueue,
		leaveQueue,
		joinTaxiQueue,
		queueLength,
		taxiQueueLength,
		taxiDepart
	}
}