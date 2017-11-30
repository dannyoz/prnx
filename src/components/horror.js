import randomOption from '../shared/random-option';
import { setTimeout } from 'timers';

const horror = () => {

    console.log("Daddy, I'm scared...");

    const scaryImages = [
        'https://images.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.trickortreatstudios.com%2Fmedia%2Fcatalog%2Fcategory%2Falice_cooper.png&f=1',
        'https://images.duckduckgo.com/iu/?u=http%3A%2F%2Fofficialpsds.com%2Fimages%2Fthumbs%2FScary-Skull-psd96322.png&f=1',
        'https://images.duckduckgo.com/iu/?u=http%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F0127%2F0982%2Fproducts%2F26445_1024x1024.png%3Fv%3D1407508743&f=1',
    ];

    const screams = [
        'https://www.soundjay.com/human/woman-scream-01.mp3',
        'https://www.soundjay.com/human/woman-scream-02.mp3',
        'https://www.soundjay.com/human/man-screaming-01.mp3',
    ];

    const scream = randomOption(screams);
    const audio = document.createElement('audio');
    const source = document.createElement('source');
    audio.setAttribute('autoplay', 'true');
    source.setAttribute('type', 'audio/mpeg');
    source.setAttribute('src', scream);
    audio.appendChild(source);

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
        document.body.appendChild(audio);
        setTimeout(() => {
            img.className = 'scary dancing';
        }, 300);
    }, 1500);

};

export default horror;
