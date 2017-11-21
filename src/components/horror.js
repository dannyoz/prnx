import randomOption from '../shared/random-option';
import { setTimeout } from 'timers';

const horror = () => {

    console.log("Daddy, I'm scared...");

    const scaryImages = [
        'https://images.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.trickortreatstudios.com%2Fmedia%2Fcatalog%2Fcategory%2Falice_cooper.png&f=1',
        'https://images.duckduckgo.com/iu/?u=http%3A%2F%2Fofficialpsds.com%2Fimages%2Fthumbs%2FScary-Skull-psd96322.png&f=1',
    ];

    const container = document.createElement('div');
    container.className = 'centre';

    const overlay = document.createElement('div');
    overlay.className = 'overlay flicker';

    const img = document.createElement("img");
	img.src = randomOption(scaryImages);
    img.className = 'scary splat';
    img.style.height = `${Math.round((window.innerHeight * 0.8))}px`;

    document.body.appendChild(overlay);
    overlay.appendChild(container);

    setTimeout(() => {
        container.appendChild(img);
        setTimeout(() => {
            img.className = 'scary dancing';
        }, 300);
    }, 1500);

};

export default horror;
