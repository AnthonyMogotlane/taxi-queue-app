function TaxiQueue(queue, taxiQueue) {
	let theQueue = queue ? queue : 0;
	let theTaxiQueue = taxiQueue ? taxiQueue : 0;


	function joinQueue() {
		theQueue++;
	}

	function leaveQueue() {
		if(theQueue > 0) {
			theQueue--;
		}
	}

	function joinTaxiQueue() {
		theTaxiQueue++;
	}

	function queueLength() {
		return theQueue;
	}

	function taxiQueueLength() {
		return theTaxiQueue;
	}

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