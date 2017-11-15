export default (options) => {
	const index = Math.floor(Math.random() * options.length);
    return options[index];
};
