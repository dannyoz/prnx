const placeholder = () => {
	console.log('Placeholder images added!!!');
	
	const imageElements = domElement('img');
	imageElements.forEach((img) => {
		const width = img.width;
		const height = img.height;
		img.src = `https://www.placecage.com/${width}/${height}`;
	});
};

const domElement = (selector) => {
    return document.querySelectorAll(selector);
};

export default placeholder;
