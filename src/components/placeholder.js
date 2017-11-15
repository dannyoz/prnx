import randomOption from '../shared/random-option';

const placeholder = () => {

	const options = [
		'http://placekitten.com',
		'https://www.placecage.com',
		'https://placebear.com',
		'http://fillmurray.com',
		'http://baconmockup.com',
		'http://lorempizza.com',
	];

	const option = randomOption(options);

	console.log(`${option} Placeholder images added!!!`);

	const imageElements = domElement('img');
	imageElements.forEach((img) => {
		const width = img.width;
		const height = img.height;
		img.src = `${option}/${width}/${height}`;
	});
};

const domElement = (selector) => {
    return document.querySelectorAll(selector);
};

export default placeholder;
