const charlie = () => {

	console.log('Charlie likes to darnce');
	
	const url1 = 'http://i0.kym-cdn.com/photos/images/newsfeed/000/367/194/58b.png';
	const url2 = 'http://i49.tinypic.com/mvtifn.png';

	const img1 = document.createElement("img");
	img1.src = url1;
    img1.style.position = 'fixed';
    img1.style.width = '300px';
    img1.style.bottom = '-10px';
    img1.style.right = '10px';
    img1.style.zIndex = '999999';
    img1.className = 'dancing';
    document.body.appendChild(img1);

    const img2 = document.createElement("img");
	img2.src = url2;
    img2.style.position = 'fixed';
    img2.style.width = '300px';
    img2.style.bottom = '-10px';
    img2.style.left = '10px';
    img2.style.zIndex = '999999';
    img2.style.animationDelay = '0.5s';
    img2.className = 'dancing';
    document.body.appendChild(img2);
};

export default charlie;
