const counters = document.querySelectorAll('.counter');
const speed = 1000; // The lower the slower
counters.forEach(counter => {
	const updateCount = () => {
		const target = +counter.getAttribute('data-target');
		const count = +counter.innerText;
		// Lower inc to slow and higher to fast
		const inc = target / speed;
		// Check if target is reached
		if (count < target) {
			// Add inc to count and output in counter
			counter.innerText = count + inc;
			// Call function every ms
			setTimeout(updateCount, 1);
		} else {
			counter.innerText = target;
		}
	};
	updateCount();
});
