import randomRange from '../shared/random-range';

const randomiser = (methods) => {

	const randomDelay = randomRange(0, 50);
	const randomInterval = randomRange(0, 1000);

	let remainingMethods = methods;
	let selectedMethods = [];
	const rMethodCount = randomRange(1, methods.length);

	for (var i = 0; i < rMethodCount; i++) {
		const rMethodIndex = randomRange(0, remainingMethods.length -1);
		const rMethod = remainingMethods[rMethodIndex];
		selectedMethods.push(rMethod);
		remainingMethods.splice(rMethodIndex, 1);
	}

	setTimeout(() => {
		selectedMethods.forEach((method, index) => {
			setTimeout(() => {
				method();
			}, randomInterval * index);
		});
	}, randomDelay);

};

export default randomiser;